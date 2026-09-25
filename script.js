const MILIASTRA_LANGS = ["en", "zhs", "zht", "ja", "ko", "es", "fr", "ru", "th", "vi", "de", "id", "pt", "tr", "it"],
  SHARED_LANG_KEY = "miliastra-lang",
  LANGUAGE_NAMES = {
    en: "English", zhs: "简体中文", zht: "繁體中文", ja: "日本語", ko: "한국어",
    es: "Español", fr: "Français", ru: "Русский", th: "ไทย", vi: "Tiếng Việt",
    de: "Deutsch", id: "Indonesia", pt: "Português", tr: "Türkçe", it: "Italiano",
  },
  APP_NAMES = {
    en: "Ease Lab", zhs: "缓动实验室", zht: "緩動實驗室", ja: "イージングラボ", ko: "이징 랩",
    es: "Laboratorio de suavizado", fr: "Laboratoire d’interpolation", ru: "Лаборатория плавности",
    th: "แล็บการเคลื่อนไหว", vi: "Phòng lab chuyển động", de: "Easing-Labor", id: "Lab Easing",
    pt: "Laboratório de suavização", tr: "Yumuşatma Laboratuvarı", it: "Laboratorio di interpolazione",
  };

const I18N = {
  en: { language: "Language", description: "Compare easing for position, scale and rotation.", labView: "Lab view", gallery: "Ease Gallery", editor: "Motion Editor", allTypes: "All EaseTypes", types: "types", transform: "Transform", scale: "Scale", rotation: "Rotation", families: "Families", familyFilter: "Ease family filter", channels: "Channels", setup: "Animation setup", setupHelp: "Select a property, then choose its curve.", propertyEdit: "Property to edit", enabled: "Enabled", family: "Family", direction: "Direction", points: "Points", reorderHelp: "Drag rows to reorder.", add: "Add", hint: "Keep at least 2 points. Select one and press Delete to remove it.", pause: "Pause", play: "Play", restart: "Restart", undo: "Undo", redo: "Redo", addCenter: "Point at center", timeline: "Animation timeline", viewer: "1600 by 900 animation canvas. Click to add a point and drag markers to move them.", footerMain: "1600 × 900 coordinates · Click empty space to add · Drag a marker or its gizmo handles", footerShift: "Hold {key} to align X or Y with another point", all: "All", showAll: "Show every family", toggleFamily: "Toggle {name}", enabledPoint: "Enabled for Point {n}", startPoint: "Start point", point: "Point {n}", start: "Start", dragReorder: "Drag point to reorder", rotate: "Rotate °", fromPrevious: "From prev ms", deletePoint: "Delete point", dragRotate: "Drag to rotate", dragScale: "Drag to scale", clickAdd: "Click to add a point", segment: "segment {n}/{total}", restartPause: "restart pause" },
  zhs: { language: "语言", description: "比较位置、缩放和旋转的缓动效果。", labView: "实验室视图", gallery: "缓动画廊", editor: "运动编辑器", allTypes: "所有 EaseType", types: "种类型", transform: "位移", scale: "缩放", rotation: "旋转", families: "系列", familyFilter: "缓动系列筛选", channels: "通道", setup: "动画设置", setupHelp: "选择属性，然后选择其曲线。", propertyEdit: "要编辑的属性", enabled: "已启用", family: "系列", direction: "方向", points: "点", reorderHelp: "拖动行以重新排序。", add: "添加", hint: "至少保留 2 个点。选择一个点并按 Delete 键即可删除。", pause: "暂停", play: "播放", restart: "重新开始", undo: "撤销", redo: "重做", addCenter: "在中心添加点", timeline: "动画时间轴", viewer: "1600 × 900 动画画布。单击可添加点，拖动标记可移动点。", footerMain: "1600 × 900 坐标 · 单击空白处添加 · 拖动标记或其控件手柄", footerShift: "按住 {key} 可将 X 或 Y 与另一个点对齐", all: "全部", showAll: "显示所有系列", toggleFamily: "切换 {name}", enabledPoint: "为点 {n} 启用", startPoint: "起始点", point: "点 {n}", start: "起始", dragReorder: "拖动点以重新排序", rotate: "旋转 °", fromPrevious: "距前一点 ms", deletePoint: "删除点", dragRotate: "拖动以旋转", dragScale: "拖动以缩放", clickAdd: "单击以添加点", segment: "片段 {n}/{total}", restartPause: "重新开始前暂停" },
  zht: { language: "語言", description: "比較位置、縮放和旋轉的緩動效果。", labView: "實驗室檢視", gallery: "緩動畫廊", editor: "動態編輯器", allTypes: "所有 EaseType", types: "種類型", transform: "位移", scale: "縮放", rotation: "旋轉", families: "系列", familyFilter: "緩動系列篩選", channels: "通道", setup: "動畫設定", setupHelp: "選擇屬性，然後選擇其曲線。", propertyEdit: "要編輯的屬性", enabled: "已啟用", family: "系列", direction: "方向", points: "點", reorderHelp: "拖曳列以重新排序。", add: "新增", hint: "至少保留 2 個點。選取一點並按 Delete 鍵即可移除。", pause: "暫停", play: "播放", restart: "重新開始", undo: "復原", redo: "重做", addCenter: "在中央新增點", timeline: "動畫時間軸", viewer: "1600 × 900 動畫畫布。按一下可新增點，拖曳標記可移動點。", footerMain: "1600 × 900 座標 · 按一下空白處新增 · 拖曳標記或其控制把手", footerShift: "按住 {key} 可將 X 或 Y 與另一點對齊", all: "全部", showAll: "顯示所有系列", toggleFamily: "切換 {name}", enabledPoint: "為點 {n} 啟用", startPoint: "起始點", point: "點 {n}", start: "起始", dragReorder: "拖曳點以重新排序", rotate: "旋轉 °", fromPrevious: "距前一點 ms", deletePoint: "刪除點", dragRotate: "拖曳以旋轉", dragScale: "拖曳以縮放", clickAdd: "按一下以新增點", segment: "片段 {n}/{total}", restartPause: "重新開始前暫停" },
  ja: { language: "言語", description: "位置、スケール、回転のイージングを比較します。", labView: "ラボ表示", gallery: "イージングギャラリー", editor: "モーションエディター", allTypes: "すべての EaseType", types: "タイプ", transform: "移動", scale: "スケール", rotation: "回転", families: "ファミリー", familyFilter: "イージングファミリーの絞り込み", channels: "チャンネル", setup: "アニメーション設定", setupHelp: "プロパティを選び、カーブを選択します。", propertyEdit: "編集するプロパティ", enabled: "有効", family: "ファミリー", direction: "方向", points: "ポイント", reorderHelp: "行をドラッグして並べ替えます。", add: "追加", hint: "ポイントは2つ以上必要です。選択して Delete キーで削除できます。", pause: "一時停止", play: "再生", restart: "再スタート", undo: "元に戻す", redo: "やり直す", addCenter: "中央にポイント", timeline: "アニメーションタイムライン", viewer: "1600 × 900 のアニメーションキャンバス。クリックでポイントを追加し、マーカーをドラッグして移動します。", footerMain: "1600 × 900 座標 · 空白をクリックして追加 · マーカーまたはギズモハンドルをドラッグ", footerShift: "{key} を押しながら操作すると X または Y を別のポイントに揃えます", all: "すべて", showAll: "すべてのファミリーを表示", toggleFamily: "{name} を切り替え", enabledPoint: "ポイント {n} で有効", startPoint: "開始ポイント", point: "ポイント {n}", start: "開始", dragReorder: "ドラッグして並べ替え", rotate: "回転 °", fromPrevious: "前から ms", deletePoint: "ポイントを削除", dragRotate: "ドラッグして回転", dragScale: "ドラッグして拡大縮小", clickAdd: "クリックしてポイントを追加", segment: "区間 {n}/{total}", restartPause: "再スタート前の停止" },
  ko: { language: "언어", description: "위치, 크기 및 회전의 이징을 비교합니다.", labView: "랩 보기", gallery: "이징 갤러리", editor: "모션 편집기", allTypes: "모든 EaseType", types: "개 유형", transform: "이동", scale: "크기", rotation: "회전", families: "계열", familyFilter: "이징 계열 필터", channels: "채널", setup: "애니메이션 설정", setupHelp: "속성을 선택한 다음 곡선을 선택하세요.", propertyEdit: "편집할 속성", enabled: "사용", family: "계열", direction: "방향", points: "포인트", reorderHelp: "행을 드래그하여 순서를 바꾸세요.", add: "추가", hint: "포인트를 2개 이상 유지하세요. 선택한 후 Delete 키를 눌러 삭제합니다.", pause: "일시정지", play: "재생", restart: "다시 시작", undo: "실행 취소", redo: "다시 실행", addCenter: "중앙에 포인트", timeline: "애니메이션 타임라인", viewer: "1600 × 900 애니메이션 캔버스입니다. 클릭하여 포인트를 추가하고 마커를 드래그하여 이동하세요.", footerMain: "1600 × 900 좌표 · 빈 공간을 클릭하여 추가 · 마커 또는 기즈모 핸들 드래그", footerShift: "{key} 키를 누르면 X 또는 Y를 다른 포인트에 맞춥니다", all: "전체", showAll: "모든 계열 표시", toggleFamily: "{name} 전환", enabledPoint: "포인트 {n}에 사용", startPoint: "시작 포인트", point: "포인트 {n}", start: "시작", dragReorder: "드래그하여 순서 변경", rotate: "회전 °", fromPrevious: "이전부터 ms", deletePoint: "포인트 삭제", dragRotate: "드래그하여 회전", dragScale: "드래그하여 크기 조절", clickAdd: "클릭하여 포인트 추가", segment: "구간 {n}/{total}", restartPause: "다시 시작 전 정지" },
  es: { language: "Idioma", description: "Compara la aceleración de posición, escala y rotación.", labView: "Vista del laboratorio", gallery: "Galería de curvas", editor: "Editor de movimiento", allTypes: "Todos los EaseType", types: "tipos", transform: "Posición", scale: "Escala", rotation: "Rotación", families: "Familias", familyFilter: "Filtro de familias", channels: "Canales", setup: "Configuración de animación", setupHelp: "Selecciona una propiedad y luego elige su curva.", propertyEdit: "Propiedad que editar", enabled: "Activado", family: "Familia", direction: "Dirección", points: "Puntos", reorderHelp: "Arrastra las filas para reordenarlas.", add: "Añadir", hint: "Conserva al menos 2 puntos. Selecciona uno y pulsa Delete para eliminarlo.", pause: "Pausa", play: "Reproducir", restart: "Reiniciar", undo: "Deshacer", redo: "Rehacer", addCenter: "Punto en el centro", timeline: "Línea de tiempo", viewer: "Lienzo de animación de 1600 × 900. Haz clic para añadir un punto y arrastra los marcadores para moverlos.", footerMain: "Coordenadas 1600 × 900 · Clic en un espacio vacío para añadir · Arrastra un marcador o sus controles", footerShift: "Mantén {key} para alinear X o Y con otro punto", all: "Todas", showAll: "Mostrar todas las familias", toggleFamily: "Alternar {name}", enabledPoint: "Activado para el punto {n}", startPoint: "Punto inicial", point: "Punto {n}", start: "Inicio", dragReorder: "Arrastra el punto para reordenar", rotate: "Giro °", fromPrevious: "Desde anterior ms", deletePoint: "Eliminar punto", dragRotate: "Arrastra para girar", dragScale: "Arrastra para escalar", clickAdd: "Haz clic para añadir un punto", segment: "segmento {n}/{total}", restartPause: "pausa de reinicio" },
  fr: { language: "Langue", description: "Comparez les accélérations de position, d’échelle et de rotation.", labView: "Vue du laboratoire", gallery: "Galerie des courbes", editor: "Éditeur de mouvement", allTypes: "Tous les EaseType", types: "types", transform: "Position", scale: "Échelle", rotation: "Rotation", families: "Familles", familyFilter: "Filtre des familles", channels: "Canaux", setup: "Configuration de l’animation", setupHelp: "Sélectionnez une propriété, puis choisissez sa courbe.", propertyEdit: "Propriété à modifier", enabled: "Activé", family: "Famille", direction: "Direction", points: "Points", reorderHelp: "Faites glisser les lignes pour les réordonner.", add: "Ajouter", hint: "Conservez au moins 2 points. Sélectionnez-en un et appuyez sur Delete pour le supprimer.", pause: "Pause", play: "Lecture", restart: "Recommencer", undo: "Annuler", redo: "Rétablir", addCenter: "Point au centre", timeline: "Chronologie de l’animation", viewer: "Canevas d’animation 1600 × 900. Cliquez pour ajouter un point et faites glisser les marqueurs pour les déplacer.", footerMain: "Coordonnées 1600 × 900 · Cliquez dans le vide pour ajouter · Faites glisser un marqueur ou ses poignées", footerShift: "Maintenez {key} pour aligner X ou Y sur un autre point", all: "Toutes", showAll: "Afficher toutes les familles", toggleFamily: "Activer/désactiver {name}", enabledPoint: "Activé pour le point {n}", startPoint: "Point de départ", point: "Point {n}", start: "Départ", dragReorder: "Faites glisser pour réordonner", rotate: "Rotation °", fromPrevious: "Depuis précédent ms", deletePoint: "Supprimer le point", dragRotate: "Faites glisser pour tourner", dragScale: "Faites glisser pour redimensionner", clickAdd: "Cliquez pour ajouter un point", segment: "segment {n}/{total}", restartPause: "pause avant reprise" },
  ru: { language: "Язык", description: "Сравнивайте сглаживание положения, масштаба и вращения.", labView: "Режим лаборатории", gallery: "Галерея сглаживаний", editor: "Редактор движения", allTypes: "Все EaseType", types: "типов", transform: "Положение", scale: "Масштаб", rotation: "Вращение", families: "Семейства", familyFilter: "Фильтр семейств", channels: "Каналы", setup: "Настройка анимации", setupHelp: "Выберите свойство, затем выберите его кривую.", propertyEdit: "Редактируемое свойство", enabled: "Включено", family: "Семейство", direction: "Направление", points: "Точки", reorderHelp: "Перетаскивайте строки для изменения порядка.", add: "Добавить", hint: "Оставьте не менее 2 точек. Выберите точку и нажмите Delete, чтобы удалить её.", pause: "Пауза", play: "Воспроизвести", restart: "Сначала", undo: "Отменить", redo: "Повторить", addCenter: "Точка в центре", timeline: "Шкала анимации", viewer: "Холст анимации 1600 × 900. Щёлкните, чтобы добавить точку, и перетаскивайте маркеры для перемещения.", footerMain: "Координаты 1600 × 900 · Щёлкните по пустому месту для добавления · Перетаскивайте маркер или его ручки", footerShift: "Удерживайте {key}, чтобы выровнять X или Y по другой точке", all: "Все", showAll: "Показать все семейства", toggleFamily: "Переключить {name}", enabledPoint: "Включено для точки {n}", startPoint: "Начальная точка", point: "Точка {n}", start: "Начало", dragReorder: "Перетащите точку для изменения порядка", rotate: "Поворот °", fromPrevious: "От предыдущей, мс", deletePoint: "Удалить точку", dragRotate: "Перетащите для вращения", dragScale: "Перетащите для масштаба", clickAdd: "Щёлкните, чтобы добавить точку", segment: "сегмент {n}/{total}", restartPause: "пауза перед повтором" },
  th: { language: "ภาษา", description: "เปรียบเทียบการผ่อนการเคลื่อนไหวของตำแหน่ง ขนาด และการหมุน", labView: "มุมมองแล็บ", gallery: "แกลเลอรีการผ่อน", editor: "ตัวแก้ไขการเคลื่อนไหว", allTypes: "EaseType ทั้งหมด", types: "ประเภท", transform: "ตำแหน่ง", scale: "ขนาด", rotation: "การหมุน", families: "ตระกูล", familyFilter: "ตัวกรองตระกูล", channels: "ช่อง", setup: "ตั้งค่าแอนิเมชัน", setupHelp: "เลือกคุณสมบัติ แล้วเลือกเส้นโค้ง", propertyEdit: "คุณสมบัติที่จะแก้ไข", enabled: "เปิดใช้", family: "ตระกูล", direction: "ทิศทาง", points: "จุด", reorderHelp: "ลากแถวเพื่อจัดลำดับใหม่", add: "เพิ่ม", hint: "เก็บไว้อย่างน้อย 2 จุด เลือกจุดแล้วกด Delete เพื่อลบ", pause: "หยุดชั่วคราว", play: "เล่น", restart: "เริ่มใหม่", undo: "เลิกทำ", redo: "ทำซ้ำ", addCenter: "จุดที่กึ่งกลาง", timeline: "ไทม์ไลน์แอนิเมชัน", viewer: "ผืนผ้าใบแอนิเมชัน 1600 × 900 คลิกเพื่อเพิ่มจุดและลากเครื่องหมายเพื่อย้าย", footerMain: "พิกัด 1600 × 900 · คลิกพื้นที่ว่างเพื่อเพิ่ม · ลากเครื่องหมายหรือที่จับ", footerShift: "กด {key} ค้างเพื่อจัด X หรือ Y ให้ตรงกับอีกจุด", all: "ทั้งหมด", showAll: "แสดงทุกตระกูล", toggleFamily: "สลับ {name}", enabledPoint: "เปิดใช้สำหรับจุด {n}", startPoint: "จุดเริ่มต้น", point: "จุด {n}", start: "เริ่มต้น", dragReorder: "ลากจุดเพื่อจัดลำดับใหม่", rotate: "หมุน °", fromPrevious: "จากจุดก่อน ms", deletePoint: "ลบจุด", dragRotate: "ลากเพื่อหมุน", dragScale: "ลากเพื่อปรับขนาด", clickAdd: "คลิกเพื่อเพิ่มจุด", segment: "ช่วง {n}/{total}", restartPause: "หยุดก่อนเริ่มใหม่" },
  vi: { language: "Ngôn ngữ", description: "So sánh chuyển động giảm tốc cho vị trí, tỷ lệ và xoay.", labView: "Chế độ phòng thử nghiệm", gallery: "Thư viện chuyển động", editor: "Trình sửa chuyển động", allTypes: "Tất cả EaseType", types: "loại", transform: "Vị trí", scale: "Tỷ lệ", rotation: "Xoay", families: "Nhóm", familyFilter: "Bộ lọc nhóm", channels: "Kênh", setup: "Thiết lập hoạt ảnh", setupHelp: "Chọn một thuộc tính, sau đó chọn đường cong.", propertyEdit: "Thuộc tính cần sửa", enabled: "Đã bật", family: "Nhóm", direction: "Hướng", points: "Điểm", reorderHelp: "Kéo các hàng để sắp xếp lại.", add: "Thêm", hint: "Giữ ít nhất 2 điểm. Chọn một điểm và nhấn Delete để xóa.", pause: "Tạm dừng", play: "Phát", restart: "Bắt đầu lại", undo: "Hoàn tác", redo: "Làm lại", addCenter: "Điểm ở giữa", timeline: "Dòng thời gian hoạt ảnh", viewer: "Khung hoạt ảnh 1600 × 900. Nhấp để thêm điểm và kéo các dấu để di chuyển.", footerMain: "Tọa độ 1600 × 900 · Nhấp vùng trống để thêm · Kéo dấu hoặc tay cầm", footerShift: "Giữ {key} để căn X hoặc Y với điểm khác", all: "Tất cả", showAll: "Hiện mọi nhóm", toggleFamily: "Bật/tắt {name}", enabledPoint: "Bật cho điểm {n}", startPoint: "Điểm bắt đầu", point: "Điểm {n}", start: "Bắt đầu", dragReorder: "Kéo điểm để sắp xếp lại", rotate: "Xoay °", fromPrevious: "Từ điểm trước ms", deletePoint: "Xóa điểm", dragRotate: "Kéo để xoay", dragScale: "Kéo để đổi tỷ lệ", clickAdd: "Nhấp để thêm điểm", segment: "đoạn {n}/{total}", restartPause: "tạm dừng trước khi lặp" },
  de: { language: "Sprache", description: "Vergleiche Easing für Position, Skalierung und Drehung.", labView: "Laboransicht", gallery: "Easing-Galerie", editor: "Bewegungseditor", allTypes: "Alle EaseTypes", types: "Typen", transform: "Position", scale: "Skalierung", rotation: "Drehung", families: "Familien", familyFilter: "Easing-Familienfilter", channels: "Kanäle", setup: "Animation einrichten", setupHelp: "Wähle eine Eigenschaft und dann ihre Kurve.", propertyEdit: "Zu bearbeitende Eigenschaft", enabled: "Aktiviert", family: "Familie", direction: "Richtung", points: "Punkte", reorderHelp: "Ziehe Zeilen, um sie neu anzuordnen.", add: "Hinzufügen", hint: "Behalte mindestens 2 Punkte. Wähle einen aus und drücke Delete, um ihn zu entfernen.", pause: "Pause", play: "Abspielen", restart: "Neu starten", undo: "Rückgängig", redo: "Wiederholen", addCenter: "Punkt in der Mitte", timeline: "Animationszeitleiste", viewer: "1600 × 900 Animationsfläche. Klicke zum Hinzufügen eines Punkts und ziehe Markierungen zum Verschieben.", footerMain: "1600 × 900 Koordinaten · Zum Hinzufügen in freie Fläche klicken · Markierung oder Griffe ziehen", footerShift: "Halte {key}, um X oder Y an einem anderen Punkt auszurichten", all: "Alle", showAll: "Alle Familien anzeigen", toggleFamily: "{name} umschalten", enabledPoint: "Für Punkt {n} aktiviert", startPoint: "Startpunkt", point: "Punkt {n}", start: "Start", dragReorder: "Punkt zum Neuordnen ziehen", rotate: "Drehung °", fromPrevious: "Seit vorherigem ms", deletePoint: "Punkt löschen", dragRotate: "Zum Drehen ziehen", dragScale: "Zum Skalieren ziehen", clickAdd: "Klicken, um Punkt hinzuzufügen", segment: "Abschnitt {n}/{total}", restartPause: "Pause vor Neustart" },
  id: { language: "Bahasa", description: "Bandingkan easing untuk posisi, skala, dan rotasi.", labView: "Tampilan lab", gallery: "Galeri easing", editor: "Editor gerakan", allTypes: "Semua EaseType", types: "jenis", transform: "Posisi", scale: "Skala", rotation: "Rotasi", families: "Keluarga", familyFilter: "Filter keluarga easing", channels: "Kanal", setup: "Pengaturan animasi", setupHelp: "Pilih properti, lalu pilih kurvanya.", propertyEdit: "Properti yang diedit", enabled: "Aktif", family: "Keluarga", direction: "Arah", points: "Titik", reorderHelp: "Seret baris untuk mengurutkan ulang.", add: "Tambah", hint: "Pertahankan minimal 2 titik. Pilih satu lalu tekan Delete untuk menghapusnya.", pause: "Jeda", play: "Putar", restart: "Mulai ulang", undo: "Urungkan", redo: "Ulangi", addCenter: "Titik di tengah", timeline: "Linimasa animasi", viewer: "Kanvas animasi 1600 × 900. Klik untuk menambah titik dan seret penanda untuk memindahkannya.", footerMain: "Koordinat 1600 × 900 · Klik ruang kosong untuk menambah · Seret penanda atau gagangnya", footerShift: "Tahan {key} untuk menyelaraskan X atau Y dengan titik lain", all: "Semua", showAll: "Tampilkan semua keluarga", toggleFamily: "Alihkan {name}", enabledPoint: "Aktif untuk titik {n}", startPoint: "Titik awal", point: "Titik {n}", start: "Awal", dragReorder: "Seret titik untuk mengurutkan ulang", rotate: "Putar °", fromPrevious: "Dari sebelumnya ms", deletePoint: "Hapus titik", dragRotate: "Seret untuk memutar", dragScale: "Seret untuk mengubah skala", clickAdd: "Klik untuk menambah titik", segment: "segmen {n}/{total}", restartPause: "jeda mulai ulang" },
  pt: { language: "Idioma", description: "Compare a suavização de posição, escala e rotação.", labView: "Vista do laboratório", gallery: "Galeria de suavizações", editor: "Editor de movimento", allTypes: "Todos os EaseType", types: "tipos", transform: "Posição", scale: "Escala", rotation: "Rotação", families: "Famílias", familyFilter: "Filtro de famílias", channels: "Canais", setup: "Configuração da animação", setupHelp: "Selecione uma propriedade e escolha sua curva.", propertyEdit: "Propriedade a editar", enabled: "Ativado", family: "Família", direction: "Direção", points: "Pontos", reorderHelp: "Arraste as linhas para reordenar.", add: "Adicionar", hint: "Mantenha pelo menos 2 pontos. Selecione um e pressione Delete para removê-lo.", pause: "Pausar", play: "Reproduzir", restart: "Reiniciar", undo: "Desfazer", redo: "Refazer", addCenter: "Ponto no centro", timeline: "Linha do tempo", viewer: "Tela de animação 1600 × 900. Clique para adicionar um ponto e arraste os marcadores para movê-los.", footerMain: "Coordenadas 1600 × 900 · Clique no espaço vazio para adicionar · Arraste um marcador ou suas alças", footerShift: "Segure {key} para alinhar X ou Y com outro ponto", all: "Todas", showAll: "Mostrar todas as famílias", toggleFamily: "Alternar {name}", enabledPoint: "Ativado para o ponto {n}", startPoint: "Ponto inicial", point: "Ponto {n}", start: "Início", dragReorder: "Arraste o ponto para reordenar", rotate: "Rotação °", fromPrevious: "Desde anterior ms", deletePoint: "Excluir ponto", dragRotate: "Arraste para girar", dragScale: "Arraste para redimensionar", clickAdd: "Clique para adicionar um ponto", segment: "segmento {n}/{total}", restartPause: "pausa de reinício" },
  tr: { language: "Dil", description: "Konum, ölçek ve döndürme için easing eğrilerini karşılaştırın.", labView: "Laboratuvar görünümü", gallery: "Easing galerisi", editor: "Hareket düzenleyici", allTypes: "Tüm EaseType'lar", types: "tür", transform: "Konum", scale: "Ölçek", rotation: "Döndürme", families: "Aileler", familyFilter: "Easing ailesi filtresi", channels: "Kanallar", setup: "Animasyon ayarı", setupHelp: "Bir özellik seçin, ardından eğrisini belirleyin.", propertyEdit: "Düzenlenecek özellik", enabled: "Etkin", family: "Aile", direction: "Yön", points: "Noktalar", reorderHelp: "Yeniden sıralamak için satırları sürükleyin.", add: "Ekle", hint: "En az 2 nokta bırakın. Birini seçip silmek için Delete tuşuna basın.", pause: "Duraklat", play: "Oynat", restart: "Yeniden başlat", undo: "Geri al", redo: "Yinele", addCenter: "Merkeze nokta", timeline: "Animasyon zaman çizelgesi", viewer: "1600 × 900 animasyon tuvali. Nokta eklemek için tıklayın, taşımak için işaretçileri sürükleyin.", footerMain: "1600 × 900 koordinat · Eklemek için boş alana tıklayın · İşaretçiyi veya tutamaçlarını sürükleyin", footerShift: "X veya Y'yi başka bir noktayla hizalamak için {key} tuşunu basılı tutun", all: "Tümü", showAll: "Tüm aileleri göster", toggleFamily: "{name} geçişi", enabledPoint: "Nokta {n} için etkin", startPoint: "Başlangıç noktası", point: "Nokta {n}", start: "Başlangıç", dragReorder: "Yeniden sıralamak için noktayı sürükleyin", rotate: "Döndür °", fromPrevious: "Öncekinden ms", deletePoint: "Noktayı sil", dragRotate: "Döndürmek için sürükleyin", dragScale: "Ölçeklemek için sürükleyin", clickAdd: "Nokta eklemek için tıklayın", segment: "bölüm {n}/{total}", restartPause: "yeniden başlatma arası" },
  it: { language: "Lingua", description: "Confronta l'easing per posizione, scala e rotazione.", labView: "Vista laboratorio", gallery: "Galleria easing", editor: "Editor del movimento", allTypes: "Tutti gli EaseType", types: "tipi", transform: "Posizione", scale: "Scala", rotation: "Rotazione", families: "Famiglie", familyFilter: "Filtro delle famiglie", channels: "Canali", setup: "Configurazione animazione", setupHelp: "Seleziona una proprietà, quindi scegli la sua curva.", propertyEdit: "Proprietà da modificare", enabled: "Attivo", family: "Famiglia", direction: "Direzione", points: "Punti", reorderHelp: "Trascina le righe per riordinarle.", add: "Aggiungi", hint: "Mantieni almeno 2 punti. Selezionane uno e premi Delete per rimuoverlo.", pause: "Pausa", play: "Riproduci", restart: "Riavvia", undo: "Annulla", redo: "Ripeti", addCenter: "Punto al centro", timeline: "Timeline animazione", viewer: "Area di animazione 1600 × 900. Fai clic per aggiungere un punto e trascina i marcatori per spostarli.", footerMain: "Coordinate 1600 × 900 · Clic sullo spazio vuoto per aggiungere · Trascina un marcatore o le sue maniglie", footerShift: "Tieni premuto {key} per allineare X o Y con un altro punto", all: "Tutte", showAll: "Mostra tutte le famiglie", toggleFamily: "Attiva/disattiva {name}", enabledPoint: "Attivo per il punto {n}", startPoint: "Punto iniziale", point: "Punto {n}", start: "Inizio", dragReorder: "Trascina il punto per riordinare", rotate: "Ruota °", fromPrevious: "Dal precedente ms", deletePoint: "Elimina punto", dragRotate: "Trascina per ruotare", dragScale: "Trascina per ridimensionare", clickAdd: "Fai clic per aggiungere un punto", segment: "segmento {n}/{total}", restartPause: "pausa prima del riavvio" },
};

function resolveLanguage() {
  try {
    const saved = localStorage.getItem(SHARED_LANG_KEY);
    if (MILIASTRA_LANGS.includes(saved)) return saved;
  } catch (error) {}
  const candidates = navigator.languages || [navigator.language || "en"];
  for (const candidate of candidates) {
    const code = String(candidate).toLowerCase();
    if (code.startsWith("zh")) return /hant|tw|hk|mo/.test(code) ? "zht" : "zhs";
    const short = code.slice(0, 2);
    if (MILIASTRA_LANGS.includes(short)) return short;
  }
  return "en";
}

let currentLanguage = resolveLanguage();
function t(key, values = {}) {
  let value = (I18N[currentLanguage] && I18N[currentLanguage][key]) || I18N.en[key] || key;
  return Object.entries(values).reduce((text, [name, replacement]) => text.replaceAll("{" + name + "}", replacement), value);
}

function saveLanguage(code) {
  try { localStorage.setItem(SHARED_LANG_KEY, code); } catch (error) {}
}

const E = [
  ["Linear", (t) => t],
  ["InSine", (t) => 1 - Math.cos((t * Math.PI) / 2)],
  ["OutSine", (t) => Math.sin((t * Math.PI) / 2)],
  ["InOutSine", (t) => -(Math.cos(Math.PI * t) - 1) / 2],
  ["InQuad", (t) => t * t],
  ["OutQuad", (t) => 1 - (1 - t) ** 2],
  ["InOutQuad", (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)],
  ["InCubic", (t) => t ** 3],
  ["OutCubic", (t) => 1 - (1 - t) ** 3],
  ["InOutCubic", (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2)],
  ["InQuart", (t) => t ** 4],
  ["OutQuart", (t) => 1 - (1 - t) ** 4],
  ["InOutQuart", (t) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2)],
  ["InQuint", (t) => t ** 5],
  ["OutQuint", (t) => 1 - (1 - t) ** 5],
  ["InOutQuint", (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2)],
  ["InExpo", (t) => (t === 0 ? 0 : 2 ** (10 * t - 10))],
  ["OutExpo", (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t))],
  ["InOutExpo", (t) => (t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? 2 ** (20 * t - 10) / 2 : (2 - 2 ** (-20 * t + 10)) / 2)],
  ["InCirc", (t) => 1 - Math.sqrt(1 - t * t)],
  ["OutCirc", (t) => Math.sqrt(1 - (t - 1) ** 2)],
  ["InOutCirc", (t) => (t < 0.5 ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2 : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) / 2)],
  ["InBack", (t) => 2.70158 * t ** 3 - 1.70158 * t ** 2],
  ["OutBack", (t) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2],
  [
    "InOutBack",
    (t) => {
      const c = 2.5949095;
      return t < 0.5 ? ((2 * t) ** 2 * ((c + 1) * 2 * t - c)) / 2 : ((2 * t - 2) ** 2 * ((c + 1) * (t * 2 - 2) + c) + 2) / 2;
    },
  ],
  ["InElastic", (t) => (t === 0 || t === 1 ? t : -(2 ** (10 * t - 10)) * Math.sin((t * 10 - 10.75) * ((2 * Math.PI) / 3)))],
  ["OutElastic", (t) => (t === 0 || t === 1 ? t : 2 ** (-10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1)],
  [
    "InOutElastic",
    (t) =>
      t === 0 || t === 1
        ? t
        : t < 0.5
          ? -(2 ** (20 * t - 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))) / 2
          : (2 ** (-20 * t + 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))) / 2 + 1,
  ],
  ["InBounce", (t) => 1 - bounce(1 - t)],
  ["OutBounce", bounce],
  ["InOutBounce", (t) => (t < 0.5 ? (1 - bounce(1 - 2 * t)) / 2 : (1 + bounce(2 * t - 1)) / 2)],
];

function bounce(t) {
  const n = 7.5625,
    d = 2.75;
  if (t < 1 / d) return n * t * t;
  if (t < 2 / d) {
    t -= 1.5 / d;
    return n * t * t + 0.75;
  }
  if (t < 2.5 / d) {
    t -= 2.25 / d;
    return n * t * t + 0.9375;
  }
  t -= 2.625 / d;
  return n * t * t + 0.984375;
}

const CANVAS_W = 1600,
  CANVAS_H = 900,
  $ = (id) => document.getElementById(id),
  clamp = (v, a, b) => Math.min(b, Math.max(a, v)),
  lerp = (a, b, t) => a + (b - a) * t,
  map = Object.fromEntries(E);
function direction(n) {
  if (n === "Linear") return "linear";
  if (n.startsWith("InOut")) return "inout";
  if (n.startsWith("In")) return "in";
  return "out";
}

function baseFamily(n) {
  return n === "Linear" ? "Linear" : n.replace(/^(InOut|In|Out)/, "");
}

const groupMap = {};
[
  ["linear", "Linear"],
  ["in", "Ease In"],
  ["out", "Ease Out"],
  ["inout", "Ease InOut"],
].forEach(([key, label]) => {
  const section = document.createElement("section");
  section.className = "ease-group";
  section.dataset.group = key;
  section.innerHTML = '<div class="ease-group-head"><h3>' + label + '</h3><span></span></div><div class="ease-group-grid"></div>';
  $("grid").append(section);
  groupMap[key] = section;
});

const tiles = E.map(([n], i) => {
  const a = document.createElement("article");
  a.className = "tile";
  a.dataset.family = baseFamily(n);
  a.innerHTML =
    '<div class="tile-top"><span class="tile-name">' +
    n +
    '</span><span class="tile-code">' +
    String(i + 1).padStart(2, "0") +
    '</span></div><div class="mini"><div class="base"></div><span class="point-line point-a"><b>A</b></span><span class="point-line point-b"><b>B</b></span><div class="object">EASE</div></div>';
  groupMap[direction(n)].lastChild.append(a);
  return a;
});

const familyNames = ["Linear", "Sine", "Quad", "Cubic", "Quart", "Quint", "Expo", "Circ", "Back", "Elastic", "Bounce"],
  selectedFamilies = new Set();
function applyOverviewFamily() {
  let total = 0;
  tiles.forEach((tile) => {
    tile.hidden = selectedFamilies.size > 0 && !selectedFamilies.has(tile.dataset.family);
    if (!tile.hidden) total++;
  });
  Object.values(groupMap).forEach((group) => {
    const count = [...group.querySelectorAll(".tile")].filter((tile) => !tile.hidden).length;
    group.hidden = count === 0;
    group.querySelector(".ease-group-head span").textContent = count + " " + t("types");
  });
  $("visibleCount").textContent = total;
  $("overviewFamilyFilter")
    .querySelectorAll("button")
    .forEach((button) => {
      const active = button.dataset.overviewFamily === "All" ? selectedFamilies.size === 0 : selectedFamilies.has(button.dataset.overviewFamily);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active);
    });
}

["All", ...familyNames].forEach((name) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = name === "All" ? t("all") : name;
  button.dataset.overviewFamily = name;
  button.title = name === "All" ? t("showAll") : t("toggleFamily", { name });
  button.onclick = () => {
    if (name === "All") selectedFamilies.clear();
    else if (selectedFamilies.has(name)) selectedFamilies.delete(name);
    else selectedFamilies.add(name);
    applyOverviewFamily();
  };
  $("overviewFamilyFilter").append(button);
});

applyOverviewFamily();
const envelopes = E.map(([, fn]) => {
    let min = 0,
      max = 1;
    for (let i = 0; i <= 400; i++) {
      const q = fn(i / 400);
      min = Math.min(min, q);
      max = Math.max(max, q);
    }
    return { min, max };
  }),
  sharedEnvelope = envelopes.reduce((all, env) => ({ min: Math.min(all.min, env.min), max: Math.max(all.max, env.max) }), { min: 0, max: 1 });
const overviewStart = performance.now();
function overview(now) {
  const p = Math.min(1, ((now - overviewStart) % 2400) / 1850),
    move = $("overviewTransform").checked,
    scale = $("overviewScale").checked,
    rotate = $("overviewRotation").checked;
  tiles.forEach((tile, i) => {
    if (tile.hidden) return;
    const stage = tile.lastChild,
      o = stage.lastChild,
      q = E[i][1](p),
      env = sharedEnvelope,
      safeLeft = 30,
      safeRight = stage.clientWidth - o.offsetWidth - 30,
      travel = (safeRight - safeLeft) / Math.max(0.001, env.max - env.min),
      a = safeLeft - env.min * travel,
      b = a + travel,
      center = (stage.clientWidth - o.offsetWidth) / 2,
      lines = stage.querySelectorAll(".point-line");
    o.style.left = (move ? lerp(a, b, q) : center) + "px";
    o.style.transform = "scale(" + (scale ? lerp(0.58, 1.36, q) : 1.08) + ") rotate(" + (rotate ? lerp(0, 360, q) : 0) + "deg)";
    o.textContent = rotate ? "EASE" : "";
    lines[0].style.left = a + o.offsetWidth / 2 + "px";
    lines[1].style.left = b + o.offsetWidth / 2 + "px";
    lines.forEach((line) => (line.style.display = move ? "block" : "none"));
  });
  requestAnimationFrame(overview);
}

requestAnimationFrame(overview);
const tabs = [$("overviewTab"), $("experimentTab")];
tabs.forEach(
  (tab) =>
    (tab.onclick = () => {
      const exp = tab === $("experimentTab");
      $("overviewPanel").hidden = exp;
      $("experimentPanel").hidden = !exp;
      tabs.forEach((x) => {
        const yes = x === tab;
        x.classList.toggle("active", yes);
        x.setAttribute("aria-selected", yes);
      });
      if (exp)
        requestAnimationFrame(() => {
          renderAll();
          restart();
        });
    }),
);

const channelDefaults = {
  transform: { enabled: true, family: "Cubic", direction: "InOut" },
  scale: { enabled: true, family: "Back", direction: "Out" },
  rotation: { enabled: true, family: "Sine", direction: "InOut" },
};

function makeChannels(source = channelDefaults) {
  return Object.fromEntries(Object.entries(source).map(([name, config]) => [name, { ...config }]));
}

let activeChannel = "transform";
const easeFamilies = ["Linear", "Sine", "Quad", "Cubic", "Quart", "Quint", "Expo", "Circ", "Back", "Elastic", "Bounce"],
  easeDirections = ["In", "Out", "InOut"];
easeFamilies.forEach((name) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "ease-choice";
  b.dataset.family = name;
  b.textContent = name;
  $("familyOptions").append(b);
});

easeDirections.forEach((name) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "ease-choice";
  b.dataset.direction = name;
  b.textContent = name;
  $("directionOptions").append(b);
});

function configEase(c) {
  return c.family === "Linear" ? "Linear" : c.direction + c.family;
}

function renderEaseEditor() {
  const p = points.find((p) => p.id === selected) || points[0],
    pointIndex = points.indexOf(p),
    hasIncoming = pointIndex > 0,
    c = p.channels[activeChannel];
  document.querySelectorAll(".property-tab").forEach((b) => {
    b.classList.toggle("active", b.dataset.channel === activeChannel);
    b.classList.toggle("off", hasIncoming && !p.channels[b.dataset.channel].enabled);
    b.setAttribute("aria-pressed", b.dataset.channel === activeChannel);
  });
  $("channelEnabled").checked = hasIncoming ? c.enabled : true;
  $("channelEnabled").disabled = !hasIncoming;
  $("channelEnabledLabel").textContent = hasIncoming ? t("enabledPoint", { n: pointIndex + 1 }) : t("startPoint");
  $("selectedEase").textContent = (hasIncoming ? t("point", { n: pointIndex + 1 }) + " · " : t("start") + " · ") + "EaseType." + configEase(c);
  document.querySelectorAll("[data-family]").forEach((b) => {
    b.classList.toggle("active", b.dataset.family === c.family);
    b.setAttribute("aria-pressed", b.dataset.family === c.family);
  });
  document.querySelectorAll("[data-direction]").forEach((b) => {
    const on = c.family !== "Linear" && b.dataset.direction === c.direction;
    b.disabled = c.family === "Linear";
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
}

document.querySelectorAll(".property-tab").forEach(
  (b) =>
    (b.onclick = () => {
      activeChannel = b.dataset.channel;
      syncHistoryContext();
      renderEaseEditor();
    }),
);

$("familyOptions").onclick = (e) => {
  const b = e.target.closest("[data-family]"),
    p = points.find((p) => p.id === selected);
  if (!b || !p) return;
  p.channels[activeChannel].family = b.dataset.family;
  commitHistory();
  renderEaseEditor();
  restartFromPreviousPoint();
};

$("directionOptions").onclick = (e) => {
  const b = e.target.closest("[data-direction]"),
    p = points.find((p) => p.id === selected);
  if (!b || !p) return;
  p.channels[activeChannel].direction = b.dataset.direction;
  commitHistory();
  renderEaseEditor();
  restartFromPreviousPoint();
};

$("channelEnabled").onchange = (e) => {
  const p = points.find((p) => p.id === selected),
    pointIndex = points.indexOf(p);
  if (!p || pointIndex === 0) return;
  p.channels[activeChannel].enabled = e.target.checked;
  commitHistory();
  renderEaseEditor();
  restartFromPreviousPoint();
};

let nextId = 3,
  points = [
    { id: 1, x: 100, y: 300, scale: 0.65, rotation: -35, channels: makeChannels() },
    { id: 2, x: 700, y: 300, scale: 1.35, rotation: 360, duration: 1200, channels: makeChannels() },
  ],
  selected = 1,
  rowDrag = null,
  pointDrag = null,
  gizmoDrag = null,
  start = performance.now(),
  paused = 0,
  playing = true,
  scrubbing = false,
  history = [],
  historyIndex = -1;
document.querySelector(".hint").textContent = t("hint");
function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function currentHistoryState() {
  return { points: cloneState(points), nextId, selected, activeChannel };
}

function updateHistoryButtons() {
  $("undo").disabled = historyIndex <= 0;
  $("redo").disabled = historyIndex >= history.length - 1;
}

function commitHistory() {
  const state = currentHistoryState(),
    current = history[historyIndex];
  if (current && JSON.stringify(current) === JSON.stringify(state)) {
    updateHistoryButtons();
    return;
  }
  history = history.slice(0, historyIndex + 1);
  history.push(state);
  if (history.length > 100) history.shift();
  historyIndex = history.length - 1;
  updateHistoryButtons();
}

function syncHistoryContext() {
  if (historyIndex < 0) return;
  history[historyIndex].selected = selected;
  history[historyIndex].activeChannel = activeChannel;
}

function restoreHistory(index) {
  if (index < 0 || index >= history.length) return;
  const state = history[index];
  historyIndex = index;
  points = cloneState(state.points);
  nextId = state.nextId;
  selected = points.some((p) => p.id === state.selected) ? state.selected : points.at(-1).id;
  activeChannel = state.activeChannel || activeChannel;
  rowDrag = pointDrag = gizmoDrag = null;
  renderAll();
  restart();
  updateHistoryButtons();
}

function undo() {
  restoreHistory(historyIndex - 1);
}

function redo() {
  restoreHistory(historyIndex + 1);
}

commitHistory();
function bounds() {
  return { w: CANVAS_W, h: CANVAS_H };
}

function norm(p) {
  return Object.assign({}, p, { x: clamp(p.x, 0, CANVAS_W), y: clamp(p.y, 0, CANVAS_H) });
}

function updateCanvasScale() {
  const viewer = $("viewer");
  if (viewer.clientWidth) $("canvas").style.setProperty("--canvas-scale", viewer.clientWidth / CANVAS_W);
}

function restart() {
  start = performance.now();
  paused = 0;
}

function restartFromPreviousPoint() {
  const index = points.findIndex((p) => p.id === selected);
  if (index > 0) seekToPoint(points[index - 1].id);
  else restart();
}

function setPlayback(next) {
  if (next === playing) return;
  if (next) start = performance.now() - paused;
  else paused = performance.now() - start;
  playing = next;
  $("play").textContent = playing ? "❚❚ " + t("pause") : "▶ " + t("play");
}

function addAt(x, y) {
  const prev = points.at(-1),
    p = norm({
      id: nextId++,
      x: Math.round(x),
      y: Math.round(y),
      scale: prev.scale,
      rotation: (Math.floor(prev.rotation / 360) + 1) * 360,
      duration: 800,
      channels: makeChannels(prev.channels),
    });
  points.push(p);
  selected = p.id;
  commitHistory();
  renderAll();
  restart();
}

function del(id) {
  if (points.length <= 2) return;
  const i = points.findIndex((p) => p.id === id);
  points.splice(i, 1);
  selected = points[Math.min(i, points.length - 1)].id;
  commitHistory();
  renderAll();
  restart();
}

function reorder(a, b) {
  if (a === b) return;
  const i = points.findIndex((p) => p.id === a),
    j = points.findIndex((p) => p.id === b);
  if (i < 0 || j < 0) return;
  const p = points.splice(i, 1)[0];
  points.splice(j, 0, p);
  commitHistory();
  renderAll();
  restart();
}

function focusPoint(p, row, list) {
  if (selected === p.id) return;
  selected = p.id;
  syncHistoryContext();
  list.querySelectorAll(".point-row").forEach((r) => r.classList.toggle("selected", r === row));
  renderMarkers();
  renderEaseEditor();
}

function renderList() {
  const list = $("pointList");
  list.innerHTML = "";
  points.forEach((p, i) => {
    const row = document.createElement("div");
    let dragAllowed = false;
    row.className = "point-row" + (p.id === selected ? " selected" : "");
    row.tabIndex = -1;
    row.innerHTML =
      '<span class="handle" title="' + t("dragReorder") + '">⠿</span><span class="index">' +
      (i + 1) +
      '</span><div class="point-fields">' +
      field("x", "X", Math.round(p.x)) +
      field("y", "Y", Math.round(p.y)) +
      field("scale", t("scale"), Number(p.scale.toFixed(2))) +
      field("rotation", t("rotate"), Math.round(p.rotation)) +
      (i ? field("duration", t("fromPrevious"), Math.round(pointDuration(p))) : "") +
      '</div><button class="button icon-btn danger" data-a="delete" aria-label="' + t("deletePoint") + '" title="' + t("deletePoint") + '" ' +
      (points.length <= 2 ? "disabled" : "") +
      ">🗑</button>";
    row.onpointerdown = (e) => {
      dragAllowed = !e.target.closest("input,button");
      if (!dragAllowed) return;
      row.focus({ preventScroll: true });
      focusPoint(p, row, list);
    };
    row.onclick = (e) => {
      if (e.target.closest("[data-a=delete]")) return;
      focusPoint(p, row, list);
    };
    row.querySelectorAll("input").forEach((input) => {
      input.onfocus = () => focusPoint(p, row, list);
      input.oninput = (e) => {
        if (e.target.value === "") return;
        const k = e.target.dataset.key,
          v = Number(e.target.value);
        if (!Number.isFinite(v)) return;
        p[k] = k === "scale" ? Math.max(0, v) : k === "duration" ? Math.max(50, v) : v;
        renderMarkers();
        restart();
      };
      input.onchange = () => {
        commitHistory();
        renderAll();
        restart();
      };
    });
    row.querySelector("[data-a=delete]").onclick = (e) => {
      e.stopPropagation();
      del(p.id);
    };
    row.draggable = true;
    row.ondragstart = (e) => {
      if (!dragAllowed) {
        e.preventDefault();
        return;
      }
      rowDrag = p.id;
      row.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(p.id));
    };
    row.ondragend = () => {
      rowDrag = null;
      row.classList.remove("dragging");
      list.querySelectorAll(".drag-over").forEach((r) => r.classList.remove("drag-over"));
    };
    row.ondragover = (e) => {
      if (rowDrag == null) return;
      e.preventDefault();
      row.classList.add("drag-over");
    };
    row.ondragleave = (e) => {
      if (!row.contains(e.relatedTarget)) row.classList.remove("drag-over");
    };
    row.ondrop = (e) => {
      if (rowDrag == null) return;
      e.preventDefault();
      row.classList.remove("drag-over");
      reorder(rowDrag, p.id);
    };
    list.append(row);
  });
}

function field(k, l, v) {
  return (
    '<div class="field"><label>' +
    l +
    '</label><input data-key="' +
    k +
    '" type="number" value="' +
    v +
    '" step="' +
    (k === "scale" ? ".05" : k === "duration" ? "50" : "1") +
    '"></div>'
  );
}

function renderMarkers() {
  const box = $("markers");
  box.innerHTML = "";
  points.forEach((p, i) => {
    const m = document.createElement("button");
    m.type = "button";
    m.className = "marker" + (p.id === selected ? " selected" : "");
    m.dataset.id = p.id;
    m.dataset.values = "s " + p.scale.toFixed(2) + " · r " + Math.round(p.rotation) + "°";
    m.style.left = p.x + "px";
    m.style.top = p.y + "px";
    m.textContent = i + 1;
    m.setAttribute("aria-label", t("point", { n: i + 1 }));
    m.onclick = (e) => {
      e.stopPropagation();
      selected = p.id;
      syncHistoryContext();
      renderAll();
    };
    m.onpointerdown = (e) => {
      e.stopPropagation();
      selected = p.id;
      syncHistoryContext();
      pointDrag = p.id;
      m.setPointerCapture(e.pointerId);
      renderList();
      m.classList.add("selected");
    };
    m.onpointermove = (e) => {
      if (pointDrag !== p.id) return;
      updatePoint(p, e, m);
    };
    m.onpointerup = (e) => {
      if (pointDrag !== p.id) return;
      updatePoint(p, e, m);
      pointDrag = null;
      commitHistory();
      guides();
      renderAll();
    };
    m.onpointercancel = () => {
      if (pointDrag === p.id) commitHistory();
      pointDrag = null;
      guides();
      renderAll();
    };
    box.append(m);
  });
  const p = points.find((p) => p.id === selected);
  if (p) {
    const g = document.createElement("div");
    g.className = "point-gizmo";
    g.style.left = p.x + "px";
    g.style.top = p.y + "px";
    g.style.setProperty("--point-rotation", p.rotation + "deg");
    g.innerHTML =
      '<span class="gizmo-axis"></span><button class="gizmo-handle gizmo-rotate" type="button" title="' + t("dragRotate") + '">R</button><button class="gizmo-handle gizmo-scale" type="button" title="' + t("dragScale") + '">S</button>';
    box.append(g);
    bindGizmo(g, p);
  }
  $("pathLine").setAttribute("points", points.map((p) => p.x + "," + p.y).join(" "));
}

function bindGizmo(g, p) {
  const rotate = g.querySelector(".gizmo-rotate"),
    scale = g.querySelector(".gizmo-scale");
  rotate.onpointerdown = (e) => {
    e.stopPropagation();
    rotate.setPointerCapture(e.pointerId);
    const c = coords(e);
    beginGizmoDrag({ type: "rotate", id: p.id, lastAngle: (Math.atan2(c.y - p.y, c.x - p.x) * 180) / Math.PI });
  };
  rotate.onpointermove = (e) => {
    if (!gizmoDrag || gizmoDrag.type !== "rotate" || gizmoDrag.id !== p.id) return;
    const c = coords(e),
      angle = (Math.atan2(c.y - p.y, c.x - p.x) * 180) / Math.PI,
      delta = ((angle - gizmoDrag.lastAngle + 540) % 360) - 180;
    p.rotation += delta;
    gizmoDrag.lastAngle = angle;
    g.style.setProperty("--point-rotation", p.rotation + "deg");
    liveGizmo(p);
  };
  scale.onpointerdown = (e) => {
    e.stopPropagation();
    scale.setPointerCapture(e.pointerId);
    const c = coords(e);
    beginGizmoDrag({ type: "scale", id: p.id, startDistance: Math.max(1, Math.hypot(c.x - p.x, c.y - p.y)), startScale: p.scale });
  };
  scale.onpointermove = (e) => {
    if (!gizmoDrag || gizmoDrag.type !== "scale" || gizmoDrag.id !== p.id) return;
    const c = coords(e);
    p.scale = Math.max(0.05, (gizmoDrag.startScale * Math.hypot(c.x - p.x, c.y - p.y)) / gizmoDrag.startDistance);
    liveGizmo(p);
  };
  [rotate, scale].forEach((handle) => {
    handle.onpointerup = finishGizmoDrag;
    handle.onpointercancel = finishGizmoDrag;
  });
}

function previewPoint(id) {
  const p = points.find((p) => p.id === id);
  if (!p) return;
  const o = $("outputObject");
  o.style.left = p.x + "px";
  o.style.top = p.y + "px";
  o.style.transform = "translate(-50%,-50%) scale(" + p.scale + ") rotate(" + p.rotation + "deg)";
}

function pointDuration(p) {
  return Math.max(50, Number(p.duration) || 800);
}

function pointTimeline(id) {
  const index = points.findIndex((p) => p.id === id);
  return points.slice(1, Math.max(1, index + 1)).reduce((total, p) => total + pointDuration(p), 0);
}

function beginGizmoDrag(state) {
  state.wasPlaying = playing;
  if (playing) setPlayback(false);
  seekToPoint(state.id);
  gizmoDrag = state;
  previewPoint(state.id);
}

function finishGizmoDrag() {
  if (!gizmoDrag) return;
  const state = gizmoDrag,
    resume = state.wasPlaying;
  if (playing) setPlayback(false);
  gizmoDrag = null;
  commitHistory();
  renderAll();
  seekToPoint(state.id);
  if (resume) setPlayback(true);
}

function liveGizmo(p) {
  const marker = document.querySelector('.marker[data-id="' + p.id + '"]');
  if (marker) marker.dataset.values = "s " + p.scale.toFixed(2) + " · r " + Math.round(p.rotation) + "°";
  previewPoint(p.id);
}

function renderAll() {
  updateCanvasScale();
  renderList();
  renderMarkers();
  renderEaseEditor();
}

function coords(e) {
  const viewer = $("viewer"),
    r = viewer.getBoundingClientRect(),
    x = ((e.clientX - r.left - viewer.clientLeft) / viewer.clientWidth) * CANVAS_W,
    y = ((e.clientY - r.top - viewer.clientTop) / viewer.clientHeight) * CANVAS_H;
  return { x: clamp(x, 0, CANVAS_W), y: clamp(y, 0, CANVAS_H) };
}

function snap(c, exclude) {
  const q = points.filter((p) => p.id !== exclude);
  if (!q.length) return Object.assign(c, { gx: null, gy: null });
  const px = q.reduce((a, p) => (Math.abs(p.x - c.x) < Math.abs(a.x - c.x) ? p : a)),
    py = q.reduce((a, p) => (Math.abs(p.y - c.y) < Math.abs(a.y - c.y) ? p : a));
  return Math.abs(px.x - c.x) <= Math.abs(py.y - c.y) ? { x: px.x, y: c.y, gx: px.x, gy: null } : { x: c.x, y: py.y, gx: null, gy: py.y };
}

function guides(x = null, y = null) {
  $("vGuide").style.display = x == null ? "none" : "block";
  $("hGuide").style.display = y == null ? "none" : "block";
  if (x != null) $("vGuide").style.left = x + "px";
  if (y != null) $("hGuide").style.top = y + "px";
}

function updatePoint(p, e, m) {
  let c = coords(e);
  if (e.shiftKey) c = snap(c, p.id);
  else c.gx = c.gy = null;
  Object.assign(p, norm(Object.assign({}, p, c)));
  m.style.left = p.x + "px";
  m.style.top = p.y + "px";
  m.dataset.values = "s " + p.scale.toFixed(2) + " · r " + Math.round(p.rotation) + "°";
  $("pathLine").setAttribute("points", points.map((x) => x.x + "," + x.y).join(" "));
  guides(c.gx, c.gy);
  restart();
}

$("viewer").onclick = (e) => {
  if (e.target.closest(".marker") || e.target.closest(".object") || e.target.closest(".point-gizmo")) return;
  let c = coords(e);
  if (e.shiftKey) c = snap(c);
  addAt(c.x, c.y);
  guides(c.gx, c.gy);
  setTimeout(() => guides(), 500);
};

$("addPoint").onclick = () => {
  const a = points.at(-1),
    bd = bounds();
  addAt(clamp(a.x + 70, 30, bd.w - 30), clamp(a.y + 55, 30, bd.h - 30));
};

$("addCenter").onclick = () => {
  const b = bounds();
  addAt(b.w / 2, b.h / 2);
};

document.addEventListener("keydown", (e) => {
  if (e.key !== "Delete" || e.target.matches('input,textarea,select,[contenteditable="true"]')) return;
  e.preventDefault();
  del(selected);
});

document.addEventListener("keydown", (e) => {
  if (!(e.ctrlKey || e.metaKey) || e.altKey || $("experimentPanel").hidden || e.target.matches('input,textarea,select,[contenteditable="true"]')) return;
  const key = e.key.toLowerCase();
  if (key === "z") {
    e.preventDefault();
    e.shiftKey ? redo() : undo();
  } else if (key === "y") {
    e.preventDefault();
    redo();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code !== "Space" || $("experimentPanel").hidden || e.repeat) return;
  e.preventDefault();
  setPlayback(!playing);
});

$("restart").onclick = restart;
$("play").onclick = () => setPlayback(!playing);
$("undo").onclick = undo;
$("redo").onclick = redo;

function channel(n, point) {
  const c = point.channels[n];
  return { on: c.enabled, fn: map[configEase(c)] || map.Linear };
}

function effectiveValue(pointIndex, channelName, key) {
  let value = points[0][key];
  for (let i = 1; i <= pointIndex; i++) if (points[i].channels[channelName].enabled) value = points[i][key];
  return value;
}

function timing() {
  const count = points.length - 1,
    durations = points.slice(1).map(pointDuration),
    motionTotal = durations.reduce((sum, value) => sum + value, 0),
    endPause = 450;
  return { count, durations, motionTotal, endPause, cycle: Math.max(50, motionTotal + endPause) };
}

function updateTimeline(elapsed, total) {
  const visible = clamp(elapsed, 0, total),
    value = clamp(visible / total, 0, 1);
  if (!scrubbing) $("timelineSlider").value = Math.round(value * 1000);
  $("timelineCurrent").textContent = (visible / 1000).toFixed(2) + "s";
  $("timelineTotal").textContent = (total / 1000).toFixed(2) + "s";
}

const timelineSlider = $("timelineSlider");

timelineSlider.onpointerdown = () => {
  scrubbing = true;
  if (playing) setPlayback(false);
};

timelineSlider.oninput = (e) => {
  if (playing) setPlayback(false);
  const info = timing();
  paused = (Number(e.target.value) / 1000) * info.motionTotal;
  start = performance.now() - paused;
  updateTimeline(paused, info.motionTotal);
};

timelineSlider.onpointerup = () => {
  scrubbing = false;
};

timelineSlider.onpointercancel = () => {
  scrubbing = false;
};

timelineSlider.onchange = () => {
  scrubbing = false;
};

function renderAtTime(elapsed, info = timing()) {
  const { count, durations, motionTotal, cycle } = info;
  elapsed = clamp(elapsed, 0, cycle);
  let seg = count - 1,
    local = 1;
  if (elapsed < motionTotal) {
    let cursor = 0;
    for (let i = 0; i < count; i++) {
      if (elapsed < cursor + durations[i]) {
        seg = i;
        local = (elapsed - cursor) / durations[i];
        break;
      }
      cursor += durations[i];
    }
  }
  const a = points[seg],
    b = points[seg + 1],
    tr = channel("transform", b),
    sc = channel("scale", b),
    ro = channel("rotation", b),
    startX = effectiveValue(seg, "transform", "x"),
    startY = effectiveValue(seg, "transform", "y"),
    startScale = effectiveValue(seg, "scale", "scale"),
    startRotation = effectiveValue(seg, "rotation", "rotation"),
    x = tr.on ? lerp(startX, b.x, tr.fn(local)) : startX,
    y = tr.on ? lerp(startY, b.y, tr.fn(local)) : startY,
    s = sc.on ? lerp(startScale, b.scale, sc.fn(local)) : startScale,
    r = ro.on ? lerp(startRotation, b.rotation, ro.fn(local)) : startRotation,
    o = $("outputObject");
  o.style.left = x + "px";
  o.style.top = y + "px";
  o.style.transform = "translate(-50%,-50%) scale(" + s + ") rotate(" + r + "deg)";
  $("readout").textContent =
    (Math.min(elapsed, motionTotal) / 1000).toFixed(2) + " s · " + (elapsed >= motionTotal ? t("restartPause") : t("segment", { n: seg + 1, total: count }));
  updateTimeline(elapsed, motionTotal);
}

function seekToPoint(id) {
  const info = timing();
  paused = clamp(pointTimeline(id), 0, info.motionTotal);
  start = performance.now() - paused;
  renderAtTime(paused, info);
}

function animate(now) {
  if (gizmoDrag) {
    requestAnimationFrame(animate);
    return;
  }
  if (!$("experimentPanel").hidden && points.length > 1) {
    const info = timing();
    let elapsed = playing ? now - start : paused;
    if (elapsed >= info.cycle) {
      if (playing) {
        start = now;
        elapsed = 0;
      } else elapsed = info.cycle;
    }
    renderAtTime(elapsed, info);
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
new ResizeObserver(() => {
  updateCanvasScale();
  renderMarkers();
}).observe($("viewer"));

function setOwnText(element, value) {
  [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).forEach((node) => node.remove());
  element.append(document.createTextNode(value));
}

function applyLanguage(code) {
  if (!MILIASTRA_LANGS.includes(code)) return;
  currentLanguage = code;
  document.documentElement.lang = code === "zhs" ? "zh-Hans" : code === "zht" ? "zh-Hant" : code;
  document.title = APP_NAMES[code];
  document.querySelector(".app-header h1").textContent = APP_NAMES[code];
  document.querySelector('meta[name="description"]').content = t("description");
  $("languageSelect").value = code;
  $("languageSelect").setAttribute("aria-label", t("language"));
  document.querySelector(".language-picker .sr-only").textContent = t("language");
  document.querySelector(".tabs").setAttribute("aria-label", t("labView"));
  $("overviewTab").textContent = t("gallery");
  $("experimentTab").textContent = t("editor");
  document.querySelector("#overviewPanel .head h2").textContent = t("allTypes");
  setOwnText(document.querySelector("#overviewPanel .count"), " " + t("types"));
  document.querySelectorAll(".overview-tools .toggle").forEach((label, index) => setOwnText(label, [t("transform"), t("scale"), t("rotation")][index]));
  document.querySelector(".filter-label").textContent = t("families");
  $("overviewFamilyFilter").setAttribute("aria-label", t("familyFilter"));
  document.querySelector(".eyebrow").textContent = t("channels");
  document.querySelector("#experimentPanel .section-title h2").textContent = t("setup");
  document.querySelector("#experimentPanel .section-title h2 + p").textContent = t("setupHelp");
  $("propertyTabs").setAttribute("aria-label", t("propertyEdit"));
  document.querySelectorAll(".property-tab").forEach((button, index) => setOwnText(button, [t("transform"), t("scale"), t("rotation")][index]));
  document.querySelectorAll(".ease-section > span").forEach((label, index) => (label.textContent = [t("family"), t("direction")][index]));
  document.querySelectorAll("#experimentPanel .section-title h3")[0].textContent = t("points");
  document.querySelectorAll("#experimentPanel .section-title h3 + p")[0].textContent = t("reorderHelp");
  $("addPoint").textContent = "＋ " + t("add");
  document.querySelector(".hint").textContent = t("hint");
  $("play").textContent = playing ? "❚❚ " + t("pause") : "▶ " + t("play");
  $("restart").textContent = "↺ " + t("restart");
  $("undo").textContent = "↶ " + t("undo");
  $("undo").title = t("undo") + " (Ctrl/Cmd+Z)";
  $("redo").textContent = "↷ " + t("redo");
  $("redo").title = t("redo") + " (Ctrl/Cmd+Shift+Z)";
  $("addCenter").textContent = "＋ " + t("addCenter");
  $("timelineSlider").setAttribute("aria-label", t("timeline"));
  $("viewer").setAttribute("aria-label", t("viewer"));
  $("viewer").dataset.addHint = t("clickAdd");
  const footer = document.querySelector(".footer");
  footer.firstElementChild.textContent = t("footerMain");
  footer.lastElementChild.innerHTML = t("footerShift", { key: "<kbd>Shift</kbd>" });
  document.querySelectorAll("#overviewFamilyFilter button").forEach((button) => {
    const name = button.dataset.overviewFamily;
    button.textContent = name === "All" ? t("all") : name;
    button.title = name === "All" ? t("showAll") : t("toggleFamily", { name });
  });
  applyOverviewFamily();
  renderAll();
}

const languageSelect = $("languageSelect");
MILIASTRA_LANGS.forEach((code) => {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = LANGUAGE_NAMES[code];
  languageSelect.append(option);
});
languageSelect.onchange = (event) => {
  const code = event.target.value;
  if (!MILIASTRA_LANGS.includes(code)) return;
  saveLanguage(code);
  applyLanguage(code);
};
window.addEventListener("storage", (event) => {
  if (event.key === SHARED_LANG_KEY && MILIASTRA_LANGS.includes(event.newValue)) applyLanguage(event.newValue);
});
applyLanguage(currentLanguage);
