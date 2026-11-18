import { getStore } from "@netlify/blobs";

export default async (req) => {
  try {
    const store = getStore("mes-chinese-cloud-store");

    if (req.method === "GET") {
      const cloudData = await store.get("shared-progress", { type: "json" });
      return Response.json({
        ok: true,
        data: cloudData || null
      });
    }

    if (req.method === "POST") {
      const incoming = await req.json();
      const existing = (await store.get("shared-progress", { type: "json" })) || {
        profiles: [],
        customWords: []
      };

      // Gộp thông minh theo từng Profile để Người 1 học trên PC không ghi đè Người 2 học trên Điện thoại/iPad
      const profileMap = new Map();
      (existing.profiles || []).forEach(p => profileMap.set(p.id, p));
      (incoming.profiles || []).forEach(incP => {
        const oldP = profileMap.get(incP.id);
        if (!oldP) {
          profileMap.set(incP.id, incP);
        } else {
          const mergedSrs = { ...(oldP.srs || {}), ...(incP.srs || {}) };
          profileMap.set(incP.id, {
            ...oldP,
            ...incP,
            xp: Math.max(oldP.xp || 0, incP.xp || 0),
            srs: mergedSrs,
            updatedAt: Date.now()
          });
        }
      });

      // Gộp danh sách từ vựng tự thêm (Custom Words)
      const wordMap = new Map();
      (existing.customWords || []).forEach(w => wordMap.set(w.id, w));
      (incoming.customWords || []).forEach(w => wordMap.set(w.id, w));

      const mergedState = {
        profiles: Array.from(profileMap.values()),
        customWords: Array.from(wordMap.values()),
        updatedAt: Date.now()
      };

      await store.setJSON("shared-progress", mergedState);

      return Response.json({
        ok: true,
        data: mergedState
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  } catch (err) {
    return Response.json(
      { ok: false, error: err.message || "Cloud sync error" },
      { status: 500 }
    );
  }
};

export const config = {
  path: "/api/sync"
};
