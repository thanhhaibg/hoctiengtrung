// ============================================================================
// DỮ LIỆU CHƯƠNG TRÌNH HỌC TIẾNG TRUNG THỰC CHIẾN: IT MES (PINYIN-FIRST)
// Đối tượng: Kỹ sư IT MES giao tiếp với PD, TE, Sản xuất, Kỹ thuật (PE/ME), QC, Kho
// ============================================================================

window.MES_CURRICULUM = {
  departments: [
    { id: "all", name: "Tất cả bộ phận (IT MES)", icon: "💻", color: "#3b82f6" },
    { id: "mes_core", name: "Hệ thống MES & IT Support", icon: "🖥️", color: "#6366f1" },
    { id: "pd_prod", name: "PD & Sản xuất (Chuyền)", icon: "🏭", color: "#10b981" },
    { id: "te_test", name: "TE & Kỹ thuật Test", icon: "🔬", color: "#f59e0b" },
    { id: "qc_qual", name: "QC / Chất lượng (IQC/IPQC/OQC)", icon: "🛡️", color: "#ef4444" },
    { id: "wh_label", name: "Kho (WMS) & Tem nhãn Barcode", icon: "📦", color: "#8b5cf6" },
    { id: "pe_equip", name: "Kỹ thuật PE/ME & Thiết bị", icon: "⚙️", color: "#06b6d4" }
  ],

  // 1. QUY TẮC ĐỌC PINYIN CẤP TỐC CHO NGƯỜI VIỆT (KHÔNG CẦN HỌC CHỮ HÁN)
  pinyinRules: [
    {
      group: "Nhóm âm Bật hơi vs Không bật hơi (Rất dễ nhầm khi nghe dưới xưởng)",
      desc: "Người Trung Quốc phân biệt rất rõ âm thường và âm bật mạnh hơi từ cổ họng ra:",
      items: [
        {
          pair: "b / p",
          howTo: "b đọc như 'p' nhẹ tiếng Việt (bǎngdìng - gắn mã); p bật hơi mạnh 'pờ-h' (pīhào - số lô).",
          examplePy: "bǎngdìng vs pīhào",
          exampleAudio: "绑定，批号",
          vn: "Link mã SN vs Số lô (Batch/Lot)"
        },
        {
          pair: "d / t",
          howTo: "d đọc như 't' tiếng Việt (dǎyìn - in tem); t đọc như 'th' tiếng Việt (tíngxiàn - dừng chuyền).",
          examplePy: "dǎyìn vs tíngxiàn",
          exampleAudio: "打印，停线",
          vn: "In ấn vs Dừng chuyền"
        },
        {
          pair: "g / k",
          howTo: "g đọc như 'c/k' tiếng Việt (gōngdān - công đơn); k đọc như 'kh' bật hơi (kǎzhù - bị treo/đơ).",
          examplePy: "gōngdān vs kǎzhù",
          exampleAudio: "工单，卡住",
          vn: "Lệnh sản xuất vs Bị treo/đơ máy"
        }
      ]
    },
    {
      group: "Nhóm âm Mặt lưỡi (j, q, x) — Xuất hiện trong 40% từ vựng IT MES",
      desc: "Đặt mặt lưỡi chạm nhẹ hàm dưới, kéo khóe miệng sang hai bên như đang cười:",
      items: [
        {
          pair: "j (đọc gần giống 'ch' nhẹ)",
          howTo: "Không bật hơi. Ví dụ: jīqì (máy móc), jiěbǎng (gỡ link SN), jiěsuǒ (mở khóa lô).",
          examplePy: "jiěbǎng / jiěsuǒ",
          exampleAudio: "解绑，解锁",
          vn: "Unlink mã vs Mở khóa (Unhold)"
        },
        {
          pair: "q (đọc như 'ch' nhưng bật mạnh hơi)",
          howTo: "Bật hơi mạnh ra ở đầu lưỡi. Ví dụ: quēliào (thiếu liệu), quánxiàn (quyền hạn), quánjiǎn (kiểm 100%).",
          examplePy: "quēliào / quánxiàn",
          exampleAudio: "缺料，权限",
          vn: "Thiếu nguyên liệu vs Quyền tài khoản"
        },
        {
          pair: "x (đọc như 'x' tiếng Việt nhưng mềm hơn)",
          howTo: "Ví dụ: xìtǒng (hệ thống), xiàn (chuyền/line), shàngxiàn (lên chuyền), xiūgǎi (sửa đổi).",
          examplePy: "xìtǒng / shàngxiàn",
          exampleAudio: "系统，上线",
          vn: "Hệ thống vs Lên chuyền sản xuất"
        }
      ]
    },
    {
      group: "Nhóm âm Đầu lưỡi (z, c, s) vs Cong lưỡi (zh, ch, sh)",
      desc: "Dưới xưởng người Đài Loan / miền Nam TQ hay đọc nhẹ âm cong lưỡi, bạn nắm quy tắc sau để nghe cả hai:",
      items: [
        {
          pair: "z / zh",
          howTo: "z thẳng lưỡi (zǔzhuāng - lắp ráp); zh cong lưỡi như 'tr' (zhàn - trạm, guòzhàn - qua trạm, zhìjù - jig test).",
          examplePy: "guòzhàn / zhìjù",
          exampleAudio: "过站，治具",
          vn: "Qua trạm MES vs Jig gá test"
        },
        {
          pair: "c / ch",
          howTo: "c bật hơi thẳng lưỡi (cèshì - test, cāngkù - kho); ch cong lưỡi bật hơi (chūkù - xuất kho, chōujiǎn - kiểm xác suất).",
          examplePy: "cèshì vs chōujiǎn",
          exampleAudio: "测试，抽检",
          vn: "Test chức năng vs Kiểm tra xác suất"
        },
        {
          pair: "s / sh",
          howTo: "s thẳng lưỡi (sǎomǎ - quét mã, suǒdān - khóa đơn); sh cong lưỡi như 's' nặng (shùjù - dữ liệu, shàngchuán - upload).",
          examplePy: "sǎomǎ vs shùjù",
          exampleAudio: "扫码，数据",
          vn: "Quét mã barcode vs Dữ liệu (Data)"
        }
      ]
    },
    {
      group: "4 Thanh Điệu & Biến Điệu Thực Tế",
      desc: "Trong Pinyin chỉ có 4 dấu chính, biết quy tắc sẽ đoán nghĩa cực chuẩn:",
      items: [
        {
          pair: "Thanh 1 (ā) & Thanh 2 (á)",
          howTo: "Thanh 1 (ngang cao đều): kāi gōngdān. Thanh 2 (đi lên như dấu sắc): cháxún (tra cứu), fǎngōng (làm lại).",
          examplePy: "kāi gōngdān / cháxún",
          exampleAudio: "开工单，查询",
          vn: "Mở công đơn / Tra cứu dữ liệu"
        },
        {
          pair: "Thanh 3 (ǎ) & Thanh 4 (à)",
          howTo: "Thanh 3 (hỏi trầm): sǎomǎ (quét mã). Thanh 4 (dứt khoát từ cao xuống thấp): bàocuò (báo lỗi!), guòzhàn (qua trạm!).",
          examplePy: "sǎomǎ bàocuò",
          exampleAudio: "扫码报错",
          vn: "Quét mã bị báo lỗi"
        },
        {
          pair: "Biến điệu chữ bù (不) và yī (一)",
          howTo: "Khi đứng trước thanh 4, 'bù' đọc thành 'bú' (bú duì - không đúng, bú shì - không phải); 'yī' đọc thành 'yí' (kàn yíxià - xem một chút).",
          examplePy: "bú duì / kàn yíxià",
          exampleAudio: "不对，看一下",
          vn: "Không đúng / Kiểm tra một chút"
        }
      ]
    }
  ],

  // 2. KHO TỪ VỰNG & MẪU CÂU THỰC CHIẾN IT MES (CHIA THEO BỘ PHẬN)
  vocabulary: [
    // --- MES CORE & IT SUPPORT ---
    {
      id: "v01",
      dept: "mes_core",
      pinyin: "xìtǒng bàocuò",
      pinyinPlain: "xitong baocuo",
      phoneticVn: "xi-thủng pao-chua",
      hanzi: "系统报错",
      hanViet: "Hệ thống báo thác",
      meaning: "Hệ thống báo lỗi (System Error)",
      tip: "xìtǒng = hệ thống; bàocuò = báo sai/báo lỗi. Từ nghe nhiều nhất mỗi ngày của IT MES!",
      exPinyin: "IT, MES xìtǒng bàocuò le, nǐ guòlái kàn yíxià!",
      exHanzi: "IT，MES系统报错了，你过来看一下！",
      exVn: "IT ơi, hệ thống MES báo lỗi rồi, bạn qua xem giúp một chút!"
    },
    {
      id: "v02",
      dept: "mes_core",
      pinyin: "guòzhàn / tiàozhàn",
      pinyinPlain: "guozhan / tiaozhan",
      phoneticVn: "cua-chan / theo-chan",
      hanzi: "过站 / 跳站",
      hanViet: "Quá trạm / Khiêu trạm",
      meaning: "Qua trạm (Pass station) / Nhảy cóc trạm (Skip station)",
      tip: "guò = đi qua; tiào = nhảy qua; zhàn = trạm (station) trên lưu trình MES.",
      exPinyin: "Zhège SN bù néng guòzhàn, xìtǒng tíshì tiàozhàn le.",
      exHanzi: "这个SN不能过站，系统提示跳站了。",
      exVn: "Mã SN này không qua trạm được, hệ thống cảnh báo bị nhảy cóc trạm rồi."
    },
    {
      id: "v03",
      dept: "mes_core",
      pinyin: "lùyóu cuòwù / liúchéng cuòwù",
      pinyinPlain: "luyou cuowu / liucheng cuowu",
      phoneticVn: "lu-dấu chua-u / liếu-chấng chua-u",
      hanzi: "路由错误 / 流程错误",
      hanViet: "Lộ do sai ngộ / Lưu trình sai ngộ",
      meaning: "Lỗi Routing / Sai lưu trình công đoạn",
      tip: "Khi công nhân quét sản phẩm ở trạm B nhưng chưa qua trạm A, MES sẽ hiện lỗi này.",
      exPinyin: "Sǎomǎ bàocuò shì yīnwèi liúchéng cuòwù, hái méi guò shàng yí gè zhàn.",
      exHanzi: "扫码报错是因为流程错误，还没过上一个站。",
      exVn: "Quét mã báo lỗi là vì sai lưu trình, chưa qua trạm trước đó."
    },
    {
      id: "v04",
      dept: "mes_core",
      pinyin: "quánxiàn / kāi quánxiàn",
      pinyinPlain: "quanxian / kai quanxian",
      phoneticVn: "choén-xien / khai choén-xien",
      hanzi: "权限 / 开权限",
      hanViet: "Quyền hạn / Khai quyền hạn",
      meaning: "Quyền truy cập / Mở quyền tài khoản trên MES",
      tip: "quánxiàn âm Hán Việt chính là 'Quyền hạn'. kāi = mở.",
      exPinyin: "Wǒ de zhànghào méiyǒu quánxiàn, bāng wǒ kāi yíxià quánxiàn.",
      exHanzi: "我的账号没有权限，帮我开一下权限。",
      exVn: "Tài khoản (zhànghào) của tôi không có quyền, giúp tôi mở quyền với."
    },
    {
      id: "v05",
      dept: "mes_core",
      pinyin: "bǎngdìng / jiěbǎng",
      pinyinPlain: "bangding / jiebang",
      phoneticVn: "pảng-tinh / chiể-pảng",
      hanzi: "绑定 / 解绑",
      hanViet: "Bảng định / Giải bảng",
      meaning: "Link (Gắn kết mã SN/PCBA/Thùng) / Unlink (Gỡ liên kết)",
      tip: "bǎng = buộc/gắn vào; jiě = cởi/gỡ ra. Rất hay dùng khi đóng gói hoặc ghép bản mạch.",
      exPinyin: "Zhège SN bǎngdìng cuò le, qǐng bāng wǒ jiěbǎng.",
      exHanzi: "这个SN绑定错了，请帮我解绑。",
      exVn: "Mã SN này bị link nhầm rồi, vui lòng giúp tôi gỡ link (unlink)."
    },
    {
      id: "v06",
      dept: "mes_core",
      pinyin: "jiétú / fā gěi wǒ",
      pinyinPlain: "jietu / fa gei wo",
      phoneticVn: "chiế-thú / pha cẩy ủa",
      hanzi: "截图 / 发给我",
      hanViet: "Tiệt đồ / Phát cấp ngã",
      meaning: "Chụp màn hình (Screenshot) / Gửi cho tôi",
      tip: "Câu cửa miệng của IT MES khi người dùng báo lỗi qua điện thoại/WeChat/Zalo.",
      exPinyin: "Nǐ bǎ bàocuò huàmiàn jiétú fā gěi wǒ kàn yíxià.",
      exHanzi: "你把报错画面截图发给我看一下。",
      exVn: "Bạn chụp màn hình bị báo lỗi gửi qua cho tôi xem thử nhé."
    },
    {
      id: "v07",
      dept: "mes_core",
      pinyin: "chóngqǐ / shuāxīn",
      pinyinPlain: "chongqi / shuaxin",
      phoneticVn: "chúng-chỉ / xoa-xin",
      hanzi: "重启 / 刷新",
      hanViet: "Trùng khởi / Soát tân",
      meaning: "Khởi động lại (Restart) / Làm mới trang (Refresh F5)",
      tip: "chóngqǐ diànnǎo = restart máy tính; chóngqǐ ruǎnjiàn = tắt bật lại phần mềm.",
      exPinyin: "Wǒ gǎi hǎo shùjù le, nǐ chóngqǐ yíxià MES ruǎnjiàn.",
      exHanzi: "我改好数据了，你重启一下MES软件。",
      exVn: "Tôi sửa xong dữ liệu rồi, bạn khởi động lại phần mềm MES nhé."
    },
    {
      id: "v08",
      dept: "mes_core",
      pinyin: "wǎngluò duànkāi / kǎzhù",
      pinyinPlain: "wangluo duankai / kazhu",
      phoneticVn: "quảng-lua toan-khai / khả-chu",
      hanzi: "网络断开 / 卡住",
      hanViet: "Vọng lạc đoạn khai / Tạp trú",
      meaning: "Mất kết nối mạng / Bị đơ, treo máy",
      tip: "wǎngluò = mạng (Network); duànkāi = đứt/ngắt; kǎzhù = kẹt/đơ.",
      exPinyin: "Èr hào xiàn de diànnǎo wǎngluò duànkāi le, xìtǒng kǎzhù.",
      exHanzi: "二号线的电脑网络断开了，系统卡住。",
      exVn: "Máy tính chuyền số 2 bị rớt mạng rồi, hệ thống bị đơ."
    },
    {
      id: "v09",
      dept: "mes_core",
      pinyin: "shùjùkù / fúwùqì",
      pinyinPlain: "shujuku / fuwuqi",
      phoneticVn: "su-chuy-khu / phú-u-chi",
      hanzi: "数据库 / 服务器",
      hanViet: "Số cứ khố / Phục vụ khí",
      meaning: "Cơ sở dữ liệu (Database) / Máy chủ (Server)",
      tip: "shùjù = dữ liệu (data); shùjùkù = kho dữ liệu (DB); fúwùqì = server.",
      exPinyin: "Wǒ zhèngzài shùjùkù lǐ cháxún zhège SN de jìlù.",
      exHanzi: "我正在数据库里查询这个SN的记录。",
      exVn: "Tôi đang truy vấn lịch sử (log/record) của mã SN này trong Database."
    },

    // --- PD & SẢN XUẤT (PRODUCTION) ---
    {
      id: "v10",
      dept: "pd_prod",
      pinyin: "gōngdān / kāi gōngdān",
      pinyinPlain: "gongdan / kai gongdan",
      phoneticVn: "cung-tan / khai cung-tan",
      hanzi: "工单 / 开工单",
      hanViet: "Công đơn / Khai công đơn",
      meaning: "Lệnh sản xuất (Work Order / MO) / Mở lệnh sản xuất",
      tip: "Bộ phận PD (Production Planning) chuyên mở gōngdān và đẩy xuống MES.",
      exPinyin: "PD yǐjīng kāi gōngdān le, dànshì MES hái méi tóngbù.",
      exHanzi: "PD已经开工单了，但是MES还没同步。",
      exVn: "PD đã mở lệnh sản xuất rồi, nhưng MES vẫn chưa đồng bộ (tóngbù) sang."
    },
    {
      id: "v11",
      dept: "pd_prod",
      pinyin: "shàngxiàn / xiàxiàn",
      pinyinPlain: "shangxian / xiaxian",
      phoneticVn: "sang-xien / xia-xien",
      hanzi: "上线 / 下线",
      hanViet: "Thượng tuyến / Hạ tuyến",
      meaning: "Đưa công đơn lên chuyền (Online) / Kết thúc xuống chuyền (Offline)",
      tip: "xiàn = dây chuyền (line). shàngxiàn = bắt đầu chạy trên chuyền.",
      exPinyin: "Zhège xīn gōngdān shénme shíhou shàngxiàn?",
      exHanzi: "这个新工单什么时候上线？",
      exVn: "Lệnh sản xuất mới này khi nào thì bắt đầu đưa lên chuyền chạy?"
    },
    {
      id: "v12",
      dept: "pd_prod",
      pinyin: "huànxiàn / zhuǎnxiàn",
      pinyinPlain: "huanxian / zhuanxian",
      phoneticVn: "hoan-xien / choản-xien",
      hanzi: "换线 / 转线",
      hanViet: "Hoán tuyến / Chuyển tuyến",
      meaning: "Đổi mã hàng trên chuyền (Changeover) / Chuyển sang chuyền khác",
      tip: "Mỗi khi huànxiàn, IT MES thường phải kiểm tra lại model (jīzhǒng) và lưu trình.",
      exPinyin: "Sān hào xiàn xiànzài yào huànxiàn, qǐng bāng wǒ qiēhuàn jīzhǒng.",
      exHanzi: "三号线现在要换线，请帮我切换机种。",
      exVn: "Chuyền 3 bây giờ cần đổi mã hàng, vui lòng giúp tôi chuyển đổi Model (jīzhǒng)."
    },
    {
      id: "v13",
      dept: "pd_prod",
      pinyin: "tíngxiàn / gǎnhuò",
      pinyinPlain: "tingxian / ganhuo",
      phoneticVn: "thính-xien / cản-huô",
      hanzi: "停线 / 赶货",
      hanViet: "Đình tuyến / Cản hóa",
      meaning: "Dừng chuyền sản xuất (Line Stop) / Chạy gấp đơn hàng",
      tip: "Nếu lỗi MES làm tíngxiàn khi đang gǎnhuò, chủ quản sản xuất sẽ giục cực gắt!",
      exPinyin: "Wǒmen zhèngzài gǎnhuò, bù néng tíngxiàn, kuài diǎn chǔlǐ!",
      exHanzi: "我们正在赶货，不能停线，快点处理！",
      exVn: "Chúng tôi đang chạy gấp hàng, không thể dừng chuyền được, xử lý nhanh lên nhé!"
    },
    {
      id: "v14",
      dept: "pd_prod",
      pinyin: "chǎnnéng / chǎnliàng",
      pinyinPlain: "channeng / chanliang",
      phoneticVn: "chản-nấng / chản-lieng",
      hanzi: "产能 / 产量",
      hanViet: "Sản năng / Sản lượng",
      meaning: "Năng suất định mức (Capacity/UPH) / Sản lượng thực tế (Output)",
      tip: "Bảng điện tử Kanban của MES dưới xưởng luôn hiển thị chǎnliàng theo giờ.",
      exPinyin: "Kanban shàng de chǎnliàng shùjù bù zhǔnquè.",
      exHanzi: "看板上的产量数据不准确。",
      exVn: "Dữ liệu sản lượng trên màn hình Kanban không chính xác."
    },
    {
      id: "v15",
      dept: "pd_prod",
      pinyin: "jié gōngdān / guāndān",
      pinyinPlain: "jie gongdan / guandan",
      phoneticVn: "chiế cung-tan / quan-tan",
      hanzi: "结工单 / 关单",
      hanViet: "Kết công đơn / Quan đơn",
      meaning: "Đóng công đơn (Close Work Order)",
      tip: "Khi chạy đủ số lượng (mǎnliàng), PD sẽ yêu cầu đóng công đơn.",
      exPinyin: "Shùliàng yǐjīng mǎn le, kěyǐ jié gōngdān le.",
      exHanzi: "数量已经满了，可以结工单了。",
      exVn: "Số lượng đã chạy đủ rồi, có thể đóng công đơn được rồi."
    },

    // --- TE & KỸ THUẬT TEST ---
    {
      id: "v16",
      dept: "te_test",
      pinyin: "cèshì zhàn / cèshì shùjù",
      pinyinPlain: "ceshi zhan / ceshi shuju",
      phoneticVn: "chưa-sư chan / chưa-sư su-chuy",
      hanzi: "测试站 / 测试数据",
      hanViet: "Trắc thí trạm / Trắc thí số cứ",
      meaning: "Trạm Test (Test Station) / Dữ liệu log test (Test Data)",
      tip: "TE làm việc với IT MES nhiều nhất về việc đẩy log từ máy test lên API MES.",
      exPinyin: "Cèshì shùjù méiyǒu shàngchuán dào MES xìtǒng.",
      exHanzi: "测试数据没有上传到MES系统。",
      exVn: "Dữ liệu log test không đẩy (upload - shàngchuán) lên hệ thống MES được."
    },
    {
      id: "v17",
      dept: "te_test",
      pinyin: "zhìjù / cèshì zhìjù",
      pinyinPlain: "zhiju / ceshi zhiju",
      phoneticVn: "trư-chuy / chưa-sư trư-chuy",
      hanzi: "治具 / 测试治具",
      hanViet: "Trị cụ / Trắc thí trị cụ",
      meaning: "Đồ gá / Jig test",
      tip: "zhìjù là từ chuyên ngành cực phổ biến ở xưởng điện tử để chỉ Jig/Fixture.",
      exPinyin: "Zhège cèshì zhìjù de chuànkǒu (COM port) liánjiē shībài.",
      exHanzi: "这个测试治具的串口连接失败。",
      exVn: "Cổng COM của bộ Jig test này kết nối bị lỗi rồi."
    },
    {
      id: "v18",
      dept: "te_test",
      pinyin: "jiēkǒu / diàoyòng API",
      pinyinPlain: "jiekou / diaoyong API",
      phoneticVn: "chia-khẩu / teo-dung API",
      hanzi: "接口 / 调用API",
      hanViet: "Tiếp khẩu / Điệu dụng API",
      meaning: "Cổng giao tiếp (Interface / API) / Gọi API",
      tip: "Khi trao đổi kỹ thuật giữa IT MES và kỹ sư phần mềm TE Trung Quốc.",
      exPinyin: "Cèshì chéngxù diàoyòng MES jiēkǒu chāoshí (timeout) le.",
      exHanzi: "测试程序调用MES接口超时了。",
      exVn: "Chương trình test gọi API của MES bị quá thời gian (timeout) rồi."
    },
    {
      id: "v19",
      dept: "te_test",
      pinyin: "shāolù / bǎnběn",
      pinyinPlain: "shaolu / banben",
      phoneticVn: "sao-lu / pản-pẩn",
      hanzi: "烧录 / 版本",
      hanViet: "Thiêu lục / Bản bổn",
      meaning: "Nạp chương trình (Flash Firmware) / Phiên bản (Version)",
      tip: "MES thường kiểm soát bǎnběn (version) của phần mềm khi nạp (shāolù) vào IC/bo mạch.",
      exPinyin: "MES shàng pèizhì de ruǎnjiàn bǎnběn bú duì, shāolù bàocuò.",
      exHanzi: "MES上配置的软件版本不对，烧录报错。",
      exVn: "Phiên bản phần mềm cấu hình trên MES không đúng nên trạm nạp FW báo lỗi."
    },
    {
      id: "v20",
      dept: "te_test",
      pinyin: "fùcè / chongcè",
      pinyinPlain: "fuce / chongce",
      phoneticVn: "phu-chưa / chúng-chưa",
      hanzi: "复测 / 重测",
      hanViet: "Phục trắc / Trùng trắc",
      meaning: "Test lại (Retest)",
      tip: "Hàng test NG lần 1 thường được cho phép fùcè (retest) tối đa 2-3 lần trên MES.",
      exPinyin: "Zhège chǎnpǐn yǐjīng fùcè sān cì dōu NG, xìtǒng suǒzhù le.",
      exHanzi: "这个产品已经复测三次都NG，系统锁住了。",
      exVn: "Sản phẩm này đã retest 3 lần đều NG nên hệ thống tự khóa lại rồi."
    },

    // --- QC / CHẤT LƯỢNG (IQC / IPQC / OQC) ---
    {
      id: "v21",
      dept: "qc_qual",
      pinyin: "suǒdān / jiěsuǒ",
      pinyinPlain: "suodan / jiesuo",
      phoneticVn: "suổ-tan / chiể-suổ",
      hanzi: "锁单 / 解锁",
      hanViet: "Tỏa đơn / Giải tỏa",
      meaning: "Khóa công đơn, Hold lô hàng / Mở khóa (Unhold)",
      tip: "suǒ = cái khóa; jiěsuǒ = mở khóa. Khi phát hiện lỗi hàng loạt, QC sẽ yêu cầu suǒdān.",
      exPinyin: "Pǐnzhì (QC) fāxiàn yìcháng, bǎ zhè pī huò suǒdān le.",
      exHanzi: "品质发现异常，把这批货锁单了。",
      exVn: "Bộ phận QC phát hiện bất thường nên đã khóa (Hold) lô hàng này trên MES rồi."
    },
    {
      id: "v22",
      dept: "qc_qual",
      pinyin: "bùliángpǐn / liángpǐn",
      pinyinPlain: "buliangpin / liangpin",
      phoneticVn: "pu-liếng-pỉn / liếng-pỉn",
      hanzi: "不良品 / 良品",
      hanViet: "Bất lương phẩm / Lương phẩm",
      meaning: "Hàng lỗi (NG / Defective) / Hàng tốt (OK / Good unit)",
      tip: "bùliánglǜ = tỷ lệ hàng lỗi (Defect rate); liánglǜ = tỷ lệ đạt (Yield rate).",
      exPinyin: "Jīntiān de bùliánglǜ tài gāo le, QC yāoqiú quánjiǎn.",
      exHanzi: "今天的不良率太高了，QC要求全检。",
      exVn: "Tỷ lệ hàng lỗi hôm nay cao quá, QC yêu cầu kiểm tra 100% (quánjiǎn)."
    },
    {
      id: "v23",
      dept: "qc_qual",
      pinyin: "fǎngōng / wéixiū zhàn",
      pinyinPlain: "fangong / weixiu zhan",
      phoneticVn: "phản-cung / uấy-xiu chan",
      hanzi: "返工 / 维修站",
      hanViet: "Phản công / Duy tu trạm",
      meaning: "Làm lại (Rework) / Trạm sửa chữa (Repair Station)",
      tip: "Khi quét NG, sản phẩm phải đi vào wéixiū zhàn trên MES, nếu cần làm lại cả lô thì mở lệnh fǎngōng.",
      exPinyin: "NG de chǎnpǐn bìxū xiān sǎomǎ jìn wéixiū zhàn.",
      exHanzi: "NG的产品必须先扫码进维修站。",
      exVn: "Sản phẩm NG bắt buộc phải quét mã đưa vào trạm sửa chữa (Repair) trước."
    },
    {
      id: "v24",
      dept: "qc_qual",
      pinyin: "chōujiǎn / quánjiǎn",
      pinyinPlain: "choujian / quanjian",
      phoneticVn: "châu-chiển / choén-chiển",
      hanzi: "抽检 / 全检",
      hanViet: "Trừu kiểm / Toàn kiểm",
      meaning: "Kiểm tra xác suất (Sampling) / Kiểm tra 100%",
      tip: "OQC trước khi xuất kho thường quét chōujiǎn trên hệ thống MES.",
      exPinyin: "OQC chōujiǎn tōngguò le, kěyǐ dǎyìn chūhuò biāoqiān.",
      exHanzi: "OQC抽检通过了，可以打印出货标签。",
      exVn: "OQC kiểm xác suất đã Pass rồi, có thể in tem xuất hàng."
    },
    {
      id: "v25",
      dept: "qc_qual",
      pinyin: "bàofèi / bùliáng dàimǎ",
      pinyinPlain: "baofei / buliang daima",
      phoneticVn: "pao-phây / pu-liếng tai-mả",
      hanzi: "报废 / 不良代码",
      hanViet: "Báo phế / Bất lương đại mã",
      meaning: "Hàng phế hủy (Scrap) / Mã lỗi (Error/Defect Code)",
      tip: "Ở trạm QC/Repair, công nhân phải quét bùliáng dàimǎ (mã lỗi) để lưu vào MES.",
      exPinyin: "Wéixiū yuán sǎo cuò bùliáng dàimǎ le, nǐ bāng wǒ xiūgǎi yíxià.",
      exHanzi: "维修员扫错不良代码了，你帮我修改一下。",
      exVn: "Nhân viên sửa chữa quét nhầm mã lỗi (Defect Code) rồi, bạn giúp tôi sửa lại nhé."
    },

    // --- KHO (WMS) & TEM NHÃN BARCODE ---
    {
      id: "v26",
      dept: "wh_label",
      pinyin: "sǎomǎ / tiáomǎ / biāoqiān",
      pinyinPlain: "saoma / tiaoma / biaoqian",
      phoneticVn: "sảo-mả / théo-mả / peo-chien",
      hanzi: "扫码 / 条码 / 标签",
      hanViet: "Tảo mã / Điều mã / Tiêu thiêm",
      meaning: "Quét mã / Mã vạch (Barcode) / Tem nhãn (Label)",
      tip: "3 từ bất ly thân của IT MES khi làm việc với súng quét mã (sǎomǎqiāng) và máy in tem.",
      exPinyin: "Biāoqiān dǎyìn bù qīngchǔ, sǎomǎqiāng sǎo bù chūlái.",
      exHanzi: "标签打印不清楚，扫码枪扫不出来。",
      exVn: "Tem nhãn in bị mờ không rõ, súng quét mã không quét ra được."
    },
    {
      id: "v27",
      dept: "wh_label",
      pinyin: "tiáomǎ chóngfù / chóngmǎ",
      pinyinPlain: "tiaoma chongfu / chongma",
      phoneticVn: "théo-mả chúng-phu / chúng-mả",
      hanzi: "条码重复 / 重码",
      hanViet: "Điều mã trùng phức / Trùng mã",
      meaning: "Trùng mã vạch / Trùng số SN (Duplicate Barcode/SN)",
      tip: "Lỗi kinh điển dưới xưởng: in nhầm 2 tem giống nhau hoặc quét lặp lại.",
      exPinyin: "Xìtǒng bàocuò: tiáomǎ chóngfù! Zhège SN yǐjīng sǎo guò le.",
      exHanzi: "系统报错：条码重复！这个SN已经扫过了。",
      exVn: "Hệ thống báo lỗi: Trùng mã vạch! Mã SN này đã được quét qua rồi."
    },
    {
      id: "v28",
      dept: "wh_label",
      pinyin: "fāliào / lǐngliào / tuìliào",
      pinyinPlain: "faliao / lingliao / tuiliao",
      phoneticVn: "pha-leo / lỉnh-leo / thuây-leo",
      hanzi: "发料 / 领料 / 退料",
      hanViet: "Phát liệu / Lĩnh liệu / Thoái liệu",
      meaning: "Kho phát liệu / Sản xuất nhận liệu / Trả liệu thừa về kho",
      tip: "liào = nguyên vật liệu (Material). fā = phát, lǐng = lĩnh nhận, tuì = trả lại.",
      exPinyin: "Cāngkù yǐjīng fāliào le, dànshì MES shàng hái méi kàn dào.",
      exHanzi: "仓库已经发料了，但是MES上还没看到。",
      exVn: "Kho đã phát liệu rồi, nhưng trên hệ thống MES vẫn chưa nhìn thấy."
    },
    {
      id: "v29",
      dept: "wh_label",
      pinyin: "shàngliào fángdāi / kòuliào",
      pinyinPlain: "shangliao fangdai / kouliao",
      phoneticVn: "sang-leo pháng-tai / khâu-leo",
      hanzi: "上料防呆 / 扣料",
      hanViet: "Thượng liệu phòng ngốc / Khấu liệu",
      meaning: "Chống sai khi nạp liệu (Poka-yoke) / Trừ liệu tự động trên MES",
      tip: "fángdāi = chống làm sai/nhầm mã nguyên liệu (BOM check); kòuliào = trừ tồn kho.",
      exPinyin: "Shàngliào fángdāi bàocuò, zhège liàohào bù zài BOM lǐmiàn!",
      exHanzi: "上料防呆报错，这个料号不在BOM里面！",
      exVn: "Hệ thống chống sai nạp liệu báo lỗi: Mã liệu (liàohào) này không nằm trong BOM!"
    },
    {
      id: "v30",
      dept: "wh_label",
      pinyin: "rùkù / chūkù / pándiǎn",
      pinyinPlain: "ruku / chuku / pandian",
      phoneticVn: "ru-khu / chu-khu / phán-tiển",
      hanzi: "入库 / 出库 / 盘点",
      hanViet: "Nhập khố / Xuất khố / Bàn điểm",
      meaning: "Nhập kho / Xuất kho / Kiểm kê kho",
      tip: "Cuối tháng kho rất hay pándiǎn (kiểm kê) và đối chiếu số liệu tồn giữa MES & ERP/SAP.",
      exPinyin: "Chéngpǐn sǎomǎ rùkù shībài, ERP hé MES shùjù bù yízhì.",
      exHanzi: "成品扫码入库失败，ERP和MES数据不一致。",
      exVn: "Thành phẩm quét mã nhập kho bị lỗi, dữ liệu giữa ERP và MES không khớp nhau."
    },
    {
      id: "v31",
      dept: "wh_label",
      pinyin: "zhuāngxiāng / zhànbbǎn (kǎbǎn)",
      pinyinPlain: "zhuangxiang / zhanban",
      phoneticVn: "choang-xieng / chan-pản (khả-pản)",
      hanzi: "装箱 / 栈板 (卡板)",
      hanViet: "Trang tương / Sạn bản",
      meaning: "Đóng thùng carton (Packing) / Đóng Pallet",
      tip: "Ở trạm Packing, công nhân quét mã SN gắn vào thùng (xiānghào) rồi gắn vào Pallet (zhànbǎn).",
      exPinyin: "Zhège xiānghào hái méi zhuāng mǎn, bù néng dǎyìn zhànbǎn biāoqiān.",
      exHanzi: "这个箱号还没装满，不能打印栈板标签。",
      exVn: "Mã thùng này chưa đóng đủ số lượng nên chưa in được tem Pallet."
    },

    // --- KỸ THUẬT PE/ME & THIẾT BỊ ---
    {
      id: "v32",
      dept: "pe_equip",
      pinyin: "shèbèi gùzhàng / bǎoyǎng",
      pinyinPlain: "shebei guzhang / baoyang",
      phoneticVn: "sưa-pây cu-chang / pảo-dảng",
      hanzi: "设备故障 / 保养",
      hanViet: "Thiết bị cố chướng / Bảo dưỡng",
      meaning: "Thiết bị gặp sự cố / Bảo dưỡng định kỳ",
      tip: "Chú ý phân biệt âm: guòzhàn (qua trạm) vs gùzhàng (hỏng hóc/sự cố).",
      exPinyin: "SMT tiēpiànjī shèbèi gùzhàng, zhèngzài wéixiū.",
      exHanzi: "SMT贴片机设备故障，正在维修。",
      exVn: "Máy gắp linh kiện SMT đang bị sự cố, đang sửa chữa."
    },
    {
      id: "v33",
      dept: "pe_equip",
      pinyin: "dǎyìnjī / sǎomǎqiāng",
      pinyinPlain: "dayinji / saomaqiang",
      phoneticVn: "tả-in-chi / sảo-mả-chieng",
      hanzi: "打印机 / 扫码枪",
      hanViet: "Đả ấn cơ / Tảo mã thương",
      meaning: "Máy in tem (Printer) / Súng quét mã vạch (Barcode Scanner)",
      tip: "Hai thiết bị ngoại vi mà IT MES phải đi hỗ trợ dưới chuyền nhiều nhất.",
      exPinyin: "Bāozhuāng zhàn de dǎyìnjī kǎzhǐ le, bù néng dǎ biāoqiān.",
      exHanzi: "包装站的打印机卡纸了，不能打标签。",
      exVn: "Máy in ở trạm đóng gói bị kẹt giấy (kǎzhǐ) rồi, không in tem được."
    },
    {
      id: "v34",
      dept: "pe_equip",
      pinyin: "móbǎn / biāoqiān móbǎn",
      pinyinPlain: "moban / biaoqian moban",
      phoneticVn: "múa-pản / peo-chien múa-pản",
      hanzi: "模板 / 标签模板",
      hanViet: "Mô bản / Tiêu thiêm mô bản",
      meaning: "File mẫu tem (Label Template - Bartender/Codesoft)",
      tip: "Khi khách hàng đổi quy cách tem, PE/PD sẽ bảo IT MES cập nhật biāoqiān móbǎn.",
      exPinyin: "Kèhù yāoqiú gēnghuàn biāoqiān móbǎn, qǐng bāng wǒ shàngchuán dào MES.",
      exHanzi: "客户要求更换标签模板，请帮我上传到MES。",
      exVn: "Khách hàng yêu cầu thay đổi mẫu tem nhãn, vui lòng giúp tôi upload lên MES."
    },
    {
      id: "v35",
      dept: "pe_equip",
      pinyin: "BOM biǎo / liàohào",
      pinyinPlain: "BOM biao / liaohao",
      phoneticVn: "BOM pẻo / leo-hao",
      hanzi: "BOM表 / 料号",
      hanViet: "BOM biểu / Liệu hiệu",
      meaning: "Bảng định mức vật tư (BOM) / Mã vật tư (Part Number)",
      tip: "PE/IE quản lý BOM biǎo; mỗi linh kiện có một liàohào (Part Number) riêng.",
      exPinyin: "PE hái méi wéihù BOM biǎo, suǒyǐ MES bù néng shàngliào.",
      exHanzi: "PE还没维护BOM表，所以MES不能上料。",
      exVn: "Bộ phận PE chưa cập nhật (wéihù) bảng BOM nên MES không cho nạp liệu."
    }
  ],

  // 3. BÀI TẬP LUYỆN NGHE PHẢN XẠ "MÙ" (BLIND LISTENING DRILLS)
  listeningDrills: [
    {
      id: "l01",
      dept: "pd_prod",
      caller: "Trưởng chuyền Sản xuất (Line 2)",
      audioText: "IT，二号线的工单已经上线了，但是扫码一直报错说流程错误！",
      pinyin: "IT, èr hào xiàn de gōngdān yǐjīng shàngxiàn le, dànshì sǎomǎ yìzhí bàocuò shuō liúchéng cuòwù!",
      vn: "IT ơi, công đơn của chuyền số 2 đã đưa lên chuyền rồi, nhưng quét mã cứ báo lỗi là sai lưu trình!",
      keywords: ["èr hào xiàn (chuyền 2)", "gōngdān shàngxiàn (công đơn lên chuyền)", "liúchéng cuòwù (sai lưu trình)"],
      question: "Chuyền 2 đang gặp sự cố gì cần IT MES xử lý?",
      options: [
        { text: "Máy in tem ở chuyền 2 bị hết mực không in được", correct: false },
        { text: "Đã lên công đơn nhưng quét mã bị báo lỗi sai lưu trình (Routing)", correct: true },
        { text: "Kho chưa phát nguyên vật liệu cho chuyền 2", correct: false }
      ]
    },
    {
      id: "l02",
      dept: "te_test",
      caller: "Kỹ thuật viên TE (Trạm Function Test)",
      audioText: "你好，三号线测试站的数据没有上传到MES，是不是网络断开了？",
      pinyin: "Nǐ hǎo, sān hào xiàn cèshì zhàn de shùjù méiyǒu shàngchuán dào MES, shì bú shì wǎngluò duànkāi le?",
      vn: "Chào bạn, dữ liệu ở trạm test chuyền 3 không đẩy lên MES được, có phải bị đứt mạng rồi không?",
      keywords: ["cèshì zhàn (trạm test)", "shùjù méi shàngchuán (dữ liệu chưa đẩy lên)", "wǎngluò duànkāi (ngắt mạng)"],
      question: "Kỹ thuật TE đang nghi ngờ nguyên nhân gì khiến log test không lên MES?",
      options: [
        { text: "Nghi ngờ bị mất kết nối mạng (wǎngluò duànkāi) ở trạm test chuyền 3", correct: true },
        { text: "Nhân viên chưa có quyền đăng nhập phần mềm MES", correct: false },
        { text: "QC đã khóa công đơn của chuyền 3", correct: false }
      ]
    },
    {
      id: "l03",
      dept: "qc_qual",
      caller: "Chủ quản QC (IPQC)",
      audioText: "这批货不良率太高了，我已经把工单锁住了，先不要过站！",
      pinyin: "Zhè pī huò bùliánglǜ tài gāo le, wǒ yǐjīng bǎ gōngdān suǒzhù le, xiān bú yào guòzhàn!",
      vn: "Lô hàng này tỷ lệ lỗi cao quá, tôi đã khóa công đơn lại rồi, tạm thời đừng cho qua trạm nữa!",
      keywords: ["bùliánglǜ tài gāo (tỷ lệ lỗi quá cao)", "suǒzhù (đã khóa/Hold)", "bú yào guòzhàn (đừng qua trạm)"],
      question: "Tại sao các trạm dưới chuyền không quét qua trạm (guòzhàn) được nữa?",
      options: [
        { text: "Vì Server MES đang bảo trì định kỳ", correct: false },
        { text: "Vì súng quét mã vạch bị hỏng cổng USB", correct: false },
        { text: "Vì QC đã khóa công đơn (suǒdān) do tỷ lệ hàng NG quá cao", correct: true }
      ]
    },
    {
      id: "l04",
      dept: "wh_label",
      caller: "Nhân viên Kho / Trạm Đóng Gói",
      audioText: "IT，包装站打印出来的箱号标签条码重复了，麻烦帮我解绑一下SN！",
      pinyin: "IT, bāozhuāng zhàn dǎyìn chūlái de xiānghào biāoqiān tiáomǎ chóngfù le, máfan bāng wǒ jiěbǎng yíxià SN!",
      vn: "IT ơi, tem mã thùng in ra ở trạm đóng gói bị trùng mã vạch rồi, phiền bạn giúp tôi gỡ link (unlink) mã SN ra nhé!",
      keywords: ["bāozhuāng zhàn (trạm đóng gói)", "tiáomǎ chóngfù (trùng mã vạch)", "jiěbǎng SN (gỡ link SN)"],
      question: "Nhân viên trạm đóng gói nhờ IT MES làm thao tác gì trên hệ thống?",
      options: [
        { text: "Mở công đơn mới cho trạm đóng gói", correct: false },
        { text: "Gỡ liên kết (jiěbǎng / Unlink) mã SN do tem thùng bị in trùng mã", correct: true },
        { text: "Cấp thêm quyền tài khoản cho nhân viên kho", correct: false }
      ]
    },
    {
      id: "l05",
      dept: "pe_equip",
      caller: "Kỹ sư PE (Kỹ thuật sản phẩm)",
      audioText: "一号线马上要换线了，新的BOM表和标签模板我已经发给你了，请帮我上传到MES。",
      pinyin: "Yī hào xiàn mǎshàng yào huànxiàn le, xīn de BOM biǎo hé biāoqiān móbǎn wǒ yǐjīng fā gěi nǐ le, qǐng bāng wǒ shàngchuán dào MES.",
      vn: "Chuyền 1 sắp đổi mã hàng (chuyển chuyền) rồi, bảng BOM mới và file mẫu tem tôi đã gửi cho bạn rồi, vui lòng giúp tôi upload lên MES nhé.",
      keywords: ["huànxiàn (đổi mã/chuyển chuyền)", "BOM biǎo (bảng BOM)", "biāoqiān móbǎn (mẫu tem nhãn)"],
      question: "Kỹ sư PE vừa gửi cho bạn 2 thứ gì để upload lên MES chuẩn bị đổi chuyền?",
      options: [
        { text: "Danh sách công nhân tăng ca và lịch bảo dưỡng máy", correct: false },
        { text: "Bảng BOM mới (BOM biǎo) và File mẫu tem nhãn (biāoqiān móbǎn)", correct: true },
        { text: "Biên bản kiểm kê kho và phiếu trả liệu", correct: false }
      ]
    }
  ],

  // 4. BÀI TẬP NGHE & GÕ PINYIN (PINYIN DICTATION)
  dictations: [
    {
      id: "d01",
      dept: "mes_core",
      audioText: "你把报错画面截图发给我看一下。",
      beforePy: "Nǐ bǎ",
      blank1: "baocuo",
      blank1Display: "bàocuò",
      midPy: "huàmiàn",
      blank2: "jietu",
      blank2Display: "jiétú",
      afterPy: "fā gěi wǒ kàn yíxià.",
      vn: "Bạn đem màn hình [báo lỗi] [chụp ảnh màn hình] gửi cho tôi xem một chút.",
      hint: "Từ 1: báo lỗi (baocuo) • Từ 2: chụp màn hình (jietu)"
    },
    {
      id: "d02",
      dept: "pd_prod",
      audioText: "工单已经上线了，但是扫码不能过站。",
      beforePy: "Gōngdān yǐjīng",
      blank1: "shangxian",
      blank1Display: "shàngxiàn",
      midPy: "le, dànshì sǎomǎ bù néng",
      blank2: "guozhan",
      blank2Display: "guòzhàn",
      afterPy: ".",
      vn: "Công đơn đã [lên chuyền] rồi, nhưng quét mã không thể [qua trạm].",
      hint: "Từ 1: lên chuyền (shangxian) • Từ 2: qua trạm (guozhan)"
    },
    {
      id: "d03",
      dept: "qc_qual",
      audioText: "不良率太高了，QC把工单锁单了。",
      beforePy: "",
      blank1: "bulianglv",
      blank1Alt: "bulianglu",
      blank1Display: "Bùliánglǜ",
      midPy: "tài gāo le, QC bǎ gōngdān",
      blank2: "suodan",
      blank2Display: "suǒdān",
      afterPy: "le.",
      vn: "[Tỷ lệ hàng lỗi] cao quá rồi, QC đã đem công đơn [khóa lại] rồi.",
      hint: "Từ 1: tỷ lệ lỗi (bulianglv / bulianglu) • Từ 2: khóa đơn (suodan)"
    },
    {
      id: "d04",
      dept: "wh_label",
      audioText: "这个SN绑定错了，请帮我解绑。",
      beforePy: "Zhège SN",
      blank1: "bangding",
      blank1Display: "bǎngdìng",
      midPy: "cuò le, qǐng bāng wǒ",
      blank2: "jiebang",
      blank2Display: "jiěbǎng",
      afterPy: ".",
      vn: "Mã SN này [gắn link] bị sai rồi, vui lòng giúp tôi [gỡ link].",
      hint: "Từ 1: gắn kết/link (bangding) • Từ 2: gỡ link (jiebang)"
    },
    {
      id: "d05",
      dept: "te_test",
      audioText: "测试站的数据没有上传到系统。",
      beforePy: "Cèshì zhàn de",
      blank1: "shuju",
      blank1Display: "shùjù",
      midPy: "méiyǒu",
      blank2: "shangchuan",
      blank2Display: "shàngchuán",
      afterPy: "dào xìtǒng.",
      vn: "[Dữ liệu] của trạm test chưa được [đẩy/upload] lên hệ thống.",
      hint: "Từ 1: dữ liệu (shuju) • Từ 2: đẩy lên/upload (shangchuan)"
    }
  ],

  // 5. KỊCH BẢN ĐÓNG VAI XỬ LÝ SỰ CỐ IT MES (ROLEPLAY + LUYỆN NÓI QUA MIC)
  roleplays: [
    {
      id: "rp01",
      title: "Xử lý lỗi 'Không qua trạm được' với Trưởng chuyền Sản xuất",
      dept: "pd_prod",
      partnerRole: "Chủ quản Sản xuất (Lão Trương)",
      partnerQuestionHanzi: "IT，一号线扫码一直报错，不能过站，我们在赶货，你快点看一下！",
      partnerQuestionPinyin: "IT, yī hào xiàn sǎomǎ yìzhí bàocuò, bù néng guòzhàn, wǒmen zài gǎnhuò, nǐ kuài diǎn kàn yíxià!",
      partnerQuestionVn: "IT ơi, chuyền 1 quét mã cứ báo lỗi suốt, không qua trạm được, bọn tôi đang chạy gấp hàng, bạn xem nhanh giúp nhé!",
      SuggestedReplies: [
        {
          label: "Cách 1: Bảo gửi mã SN & chụp màn hình lỗi để kiểm tra",
          pinyin: "Hǎo de, nǐ xiān bǎ SN hàomǎ hé bàocuò jiétú fā gěi wǒ, wǒ mǎshàng chá yíxià!",
          phoneticVn: "Hảo tơ, nỉ xien pả SN hao-mả khứa pao-chua chiế-thú pha cẩy ủa, ủa mả-sang chá ý-xia!",
          hanzi: "好的，你先把SN号码和报错截图发给我，我马上查一下！",
          vn: "Vâng, bạn gửi trước mã SN và ảnh chụp màn hình báo lỗi cho tôi nhé, tôi kiểm tra ngay lập tức!"
        },
        {
          label: "Cách 2: Báo nguyên nhân do chưa qua trạm test phía trước",
          pinyin: "Wǒ chá le, zhège SN liúchéng cuòwù, tā hái méiyǒu guò cèshì zhàn!",
          phoneticVn: "Ủa chá lơ, trư-cơ SN liếu-chấng chua-u, tha hái mấy-dẩu cua chưa-sư chan!",
          hanzi: "我查了，这个SN流程错误，它还没有过测试站！",
          vn: "Tôi kiểm tra rồi, mã SN này bị sai lưu trình, nó vẫn chưa đi qua trạm Test!"
        }
      ]
    },
    {
      id: "rp02",
      title: "Phối hợp với Kỹ thuật TE xử lý lỗi mất kết nối API đẩy Log Test",
      dept: "te_test",
      partnerRole: "Kỹ sư TE (Anh Trần)",
      partnerQuestionHanzi: "IT，功能测试站的测试数据上传失败，MES接口是不是挂了？",
      partnerQuestionPinyin: "IT, gōngnéng cèshì zhàn de cèshì shùjù shàngchuán shībài, MES jiēkǒu shì bú shì guà le?",
      partnerQuestionVn: "IT ơi, dữ liệu test của trạm Function Test upload bị lỗi rồi, có phải cổng API của MES bị sập (guà le) không?",
      SuggestedReplies: [
        {
          label: "Cách 1: Báo Server MES bình thường, kiểm tra lại dây mạng máy test",
          pinyin: "MES fúwùqì hé jiēkǒu dōu zhèngcháng, nǐ jiǎnchá yíxià cèshì diànnǎo de wǎngluò.",
          phoneticVn: "MES phú-u-chi khứa chia-khẩu tâu trâng-cháng, nỉ chiển-chá ý-xia chưa-sư tien-nảo tơ quảng-lua.",
          hanzi: "MES服务器和接口都正常，你检查一下测试电脑的网络。",
          vn: "Server MES và API đều bình thường, bạn kiểm tra lại mạng của máy tính trạm test xem sao."
        },
        {
          label: "Cách 2: Bảo khởi động lại phần mềm truyền dữ liệu",
          pinyin: "Wǒ gānggāng shuāxīn le pèizhì, nǐ chóngqǐ yíxià cèshì ruǎnjiàn zài shìshì.",
          phoneticVn: "Ủa cang-cang xoa-xin lơ phây-trư, nỉ chúng-chỉ ý-xia chưa-sư roản-chien chai sư-sư.",
          hanzi: "我刚刚刷新了配置，你重启一下测试软件再试试。",
          vn: "Tôi vừa làm mới lại cấu hình rồi, bạn khởi động lại phần mềm test rồi thử lại nhé."
        }
      ]
    },
    {
      id: "rp03",
      title: "Làm việc với QC về Mở khóa công đơn (Unhold) và đẩy hàng về Repair",
      dept: "qc_qual",
      partnerRole: "Chủ quản QC (Chị Lâm)",
      partnerQuestionHanzi: "IT，这个工单我们已经重检OK了，请帮我解锁，另外那五个不良品帮我退回维修站。",
      partnerQuestionPinyin: "IT, zhège gōngdān wǒmen yǐjīng chóngjiǎn OK le, qǐng bāng wǒ jiěsuǒ, lìngwài nà wǔ gè bùliángpǐn bāng wǒ tuì huí wéixiū zhàn.",
      partnerQuestionVn: "IT ơi, công đơn này bọn chị đã kiểm tra lại OK rồi, giúp chị mở khóa nhé, ngoài ra 5 con hàng lỗi kia giúp chị đẩy lùi về trạm Repair.",
      SuggestedReplies: [
        {
          label: "Cách 1: Xác nhận đã mở khóa công đơn và xin mã SN của 5 con hàng NG",
          pinyin: "Gōngdān yǐjīng jiěsuǒ le! Nà wǔ gè bùliángpǐn de SN nǐ fā gěi wǒ, wǒ bāng nǐ tuì huí wéixiū zhàn.",
          phoneticVn: "Cung-tan ỷ-ching chiể-suổ lơ! Na ủ cơ pu-liếng-pỉn tơ SN nỉ pha cẩy ủa, ủa pang nỉ thuây khuấy uấy-xiu chan.",
          hanzi: "工单已经解锁了！那五个不良品的SN你发给我，我帮你退回维修站。",
          vn: "Công đơn đã mở khóa xong rồi! Mã SN của 5 con hàng NG đó chị gửi qua cho em, em đẩy về trạm sửa chữa giúp chị."
        }
      ]
    },
    {
      id: "rp04",
      title: "Hỗ trợ Kho & PD xử lý lỗi Chống cắm nhầm liệu (BOM /の上料防呆)",
      dept: "wh_label",
      partnerRole: "Tổ trưởng Kho / Kitting (Anh Hoàng)",
      partnerQuestionHanzi: "IT，仓库发料的时候系统提示料号不在BOM里面，不能上料，怎么回事？",
      partnerQuestionPinyin: "IT, cāngkù fāliào de shíhou xìtǒng tíshì liàohào bù zài BOM lǐmiàn, bù néng shàngliào, zěnme huí shì?",
      partnerQuestionVn: "IT ơi, lúc kho phát liệu thì hệ thống báo mã liệu không nằm trong BOM, không nạp liệu lên chuyền được, là sao vậy?",
      SuggestedReplies: [
        {
          label: "Cách 1: Giải thích đây là mã liệu thay thế, cần PE cập nhật BOM trên MES",
          pinyin: "Zhège shì tìdàiliào (liệu thay thế), yào qǐng PE zài MES lǐmiàn wéihù BOM biǎo cái kěyǐ shàngliào.",
          phoneticVn: "Trư-cơ sư thi-tai-leo, deo chỉnh PE chai MES lỉ-mien uấy-khu BOM pẻo chái khứa-ỷ sang-leo.",
          hanzi: "这个是替代料，要请PE在MES里面维护BOM表才可以上料。",
          vn: "Đây là mã liệu thay thế (tìdàiliào), phải nhờ bộ phận PE cập nhật vào bảng BOM trong MES thì mới nạp liệu được."
        }
      ]
    }
  ]
};
