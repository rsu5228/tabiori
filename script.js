const defaultTrips = [
  {
    title: "DAY 1 — 9/5 SAT",
    items: [
      { time: "08:55", icon: "✈️", name: "成田発", detail: "仁川国際空港へ出発", tag: "FLIGHT" },
      { time: "11:25", icon: "🛬", name: "仁川T1着", detail: "11:25〜12:30\n入国審査など", tag: "ARRIVAL" },
      { time: "12:30", icon: "🚆", name: "AREX一般", detail: "仁川T1 → ソウル駅", tag: "MOVE" },
      { time: "13:30", icon: "🚇", name: "ソウル駅 → 明洞方面", detail: "地下鉄4号線で明洞駅へ", tag: "MOVE" },
      { time: "13:40", icon: "💱", name: "MONEY PLANET", detail: "13:40〜13:55\n両替", tag: "MONEY" },
      { time: "14:00", icon: "🏨", name: "相鉄フレッサイン ソウル明洞", detail: "ホテルへ荷物預け", tag: "HOTEL" },
      { time: "14:05", icon: "💳", name: "WOWPASSチャージ", detail: "ホテル内のWOWPASS機でチャージ", tag: "MONEY" },
      { time: "14:15", icon: "🥟", name: "明洞餃子", detail: "14:15〜15:15\nランチ", tag: "FOOD" },
      { time: "15:15", icon: "🛍️", name: "ミミライン＋明洞ショッピング", detail: "15:15〜17:00", tag: "SHOPPING" },
      { time: "17:30", icon: "🦀", name: "オダリチプ", detail: "予約済み", tag: "RESERVATION" },
      { time: "19:00", icon: "🌙", name: "明洞散策・ホテル", detail: "19:00〜\n自由時間", tag: "FREE TIME" }
    ]
  },
  {
    title: "DAY 2 — 9/6 SUN",
    items: [
      { time: "08:15", icon: "🚇", name: "ホテル出発", detail: "4号線 → 忠武路 → 3号線\n景福宮方面へ", tag: "MOVE" },
      { time: "08:40", icon: "👘", name: "インコリア韓服", detail: "08:40頃 到着", tag: "HANBOK" },
      { time: "09:00", icon: "👘", name: "韓服レンタル", detail: "レンタル開始", tag: "HANBOK" },
      { time: "09:15", icon: "🏯", name: "景福宮", detail: "09:15〜11:10\n韓服で観光", tag: "SIGHTSEEING" },
      { time: "11:10", icon: "🚶", name: "韓服店へ戻る", detail: "11:10〜11:30", tag: "MOVE" },
      { time: "11:30", icon: "👘", name: "韓服返却", detail: "レンタル終了", tag: "HANBOK" },
      { time: "11:30", icon: "🍲", name: "土俗村", detail: "11:30〜12:30\n参鶏湯ランチ", tag: "FOOD" },
      { time: "12:30", icon: "🚇", name: "景福宮駅 → 安国駅", detail: "3号線／梧琴方面\n1駅", tag: "MOVE" },
      { time: "12:50", icon: "🥐", name: "Artist Bakery", detail: "12:50〜13:40\n塩パンを9/7朝食用に購入", tag: "SHOPPING" },
      { time: "13:40", icon: "🧄", name: "Garlic Boy 安国店", detail: "13:40〜14:00\nパン購入", tag: "SHOPPING" },
      { time: "14:00", icon: "🚶", name: "安国 → イクソンドン", detail: "徒歩で移動\n14:00〜14:20", tag: "MOVE" },
      { time: "14:20", icon: "🏘️", name: "イクソンドン散策", detail: "14:20〜15:10", tag: "SIGHTSEEING" },
      { time: "15:10", icon: "🍵", name: "清水堂", detail: "15:10〜16:10", tag: "CAFE" },
      { time: "16:10", icon: "🌷", name: "イクソンドン散策・駅へ", detail: "16:10〜16:30", tag: "FREE TIME" },
      { time: "16:30", icon: "🚇", name: "鍾路3街駅 → 狎鴎亭", detail: "3号線／梧琴方面", tag: "MOVE" },
      { time: "17:00", icon: "🛍️", name: "狎鴎亭散策＋黒ゴマもち", detail: "17:00〜17:50\n黒ゴマもち購入", tag: "SHOPPING" },
      { time: "17:50", icon: "🚕", name: "タクシー", detail: "盤浦漢江公園へ", tag: "MOVE" },
      { time: "18:10", icon: "🌉", name: "盤浦漢江公園", detail: "18:10頃 到着\nパン・黒ゴマもち準備、散策", tag: "SIGHTSEEING" },
      { time: "19:30", icon: "⛲", name: "噴水ショー", detail: "19:30〜19:50\n※間に合わなければ20:00の回", tag: "EVENT" },
      { time: "19:50", icon: "🚌", name: "ホテルへ移動", detail: "740番バス → 漢江中学校\n→ 401または406番 → 明洞方面", tag: "MOVE" },
      { time: "20:30", icon: "🏨", name: "ホテル", detail: "20:30頃\n余裕があれば明洞で食べ歩き", tag: "FREE TIME" }
    ]
  },
  {
    title: "DAY 3 — 9/7 MON",
    items: [
      { time: "07:00", icon: "☀️", name: "起床", detail: "07:00〜07:30", tag: "MORNING" },
      { time: "07:30", icon: "🥐", name: "朝食", detail: "07:30〜08:00\nArtist Bakeryの塩パン", tag: "FOOD" },
      { time: "08:00", icon: "🧳", name: "荷造り・身支度", detail: "08:00〜08:30", tag: "PREPARE" },
      { time: "08:30", icon: "🏨", name: "チェックアウト", detail: "ホテルを出発", tag: "HOTEL" },
      { time: "08:40", icon: "🚇", name: "明洞駅 → ソウル駅", detail: "4号線で移動", tag: "MOVE" },
      { time: "09:00", icon: "🚆", name: "AREX一般", detail: "ソウル駅 → 仁川T1", tag: "MOVE" },
      { time: "10:00", icon: "🛫", name: "仁川空港T1着", detail: "チェックイン・荷物預け・保安検査", tag: "AIRPORT" },
      { time: "12:55", icon: "✈️", name: "仁川発", detail: "成田へ出発", tag: "FLIGHT" },
      { time: "15:30", icon: "🛬", name: "成田着", detail: "おつかれさまでした！", tag: "ARRIVAL" }
    ]
  }
];

const STORAGE_KEY = "tabiori-seoul-v0.2";
function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function loadTrips(){ try { const saved=localStorage.getItem(STORAGE_KEY); return saved ? JSON.parse(saved) : clone(defaultTrips); } catch(e){ return clone(defaultTrips); } }
let trips = loadTrips();
let editingTrips = null;
let selectedDay = 0;

function timeToMinutes(value) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function getActiveItem(items) {
  items = items.filter(item => !item.skipped);
  if (!items.length) return { item: null, status: "予定なし" };
  const now = new Date();
  const selectedDate = new Date(2026, 8, 5 + selectedDay);
  const isToday =
    now.getFullYear() === selectedDate.getFullYear() &&
    now.getMonth() === selectedDate.getMonth() &&
    now.getDate() === selectedDate.getDate();

  if (!isToday) return { item: items[0], status: "次の予定" };

  const current = now.getHours() * 60 + now.getMinutes();
  const next = items.find(item => timeToMinutes(item.time) >= current);

  if (next) return { item: next, status: "次の予定" };

  return { item: items[items.length - 1], status: "DAY COMPLETED 🎉" };
}

function renderNext() {
  const { item, status } = getActiveItem(trips[selectedDay].items);
  const nextCard = document.getElementById("nextCard");
  if (!item) { nextCard.innerHTML = `<p class="next-note">この日の予定はすべてスキップされています。</p>`; return; }

  nextCard.innerHTML = `
    <div class="next-top">
      <div class="icon-bubble">${item.icon}</div>
      <div>
        <p class="next-time">${item.time}</p>
        <h3 class="next-name">${item.name}</h3>
        <p class="next-note">${item.detail.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
    <span class="status-pill">${status}</span>
  `;
}

function renderTimeline() {
  const day = trips[selectedDay];
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = day.items.map((item, index) => `
    <article class="timeline-item">
      <div class="time" data-time-index="${index}" role="button" tabindex="0"
           aria-label="${item.name}の時間を変更">${item.time}</div>
      <div class="plan-card ${item.skipped ? "skipped" : ""}" data-detail-index="${index}" role="button" tabindex="0" aria-label="${item.name}の詳細を表示">
        <div class="plan-header">
          <div class="plan-icon">${item.icon}</div>
          <div>
            <h3 class="plan-name">${item.name}${item.skipped ? '<span class="skip-label">SKIPPED</span>' : ""}</h3>
            <p class="plan-detail">${item.detail}</p>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Keep the add button outside the cards.
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.id = "addPlanButton";
  addButton.className = "add-plan-button";
  addButton.textContent = "＋ 予定を追加";
  timeline.appendChild(addButton);
}


function render() {
  document.querySelectorAll(".day-tab").forEach((button, index) => {
    button.classList.toggle("active", index === selectedDay);
  });
  renderNext();
  renderTimeline();
}

document.querySelectorAll(".day-tab").forEach(button => {
  button.addEventListener("click", () => {
    selectedDay = Number(button.dataset.day);

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("todayButton").addEventListener("click", () => {
  const now = new Date();
  if (now.getFullYear() === 2026 && now.getMonth() === 8 && now.getDate() >= 5 && now.getDate() <= 7) {
    selectedDay = now.getDate() - 5;

  }
});


const fixedNames = ["オダリチプ","韓服レンタル","韓服返却","噴水ショー","チェックアウト","仁川発","成田着"];
function updateCurrentTime(){ const now=new Date(); document.getElementById("currentTime").textContent=now.toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit",hour12:false}); }
function isFixed(item){ return fixedNames.includes(item.name); }
function openAdjust(){ editingTrips=clone(trips); updateCurrentTime(); renderAdjustList(); document.getElementById("modalBackdrop").classList.remove("hidden"); document.body.style.overflow="hidden"; }
function closeAdjust(){ document.getElementById("modalBackdrop").classList.add("hidden"); document.body.style.overflow=""; editingTrips=null; }
function renderAdjustList(){
 const items=editingTrips[selectedDay].items; const list=document.getElementById("adjustList");
 list.innerHTML=items.map((item,i)=>{ const fixed=isFixed(item); return `<article class="adjust-item ${item.skipped?"is-skipped":""}"><div class="adjust-row"><div class="adjust-icon">${item.icon}</div><div class="adjust-main"><h3 class="adjust-name">${item.name}</h3><p class="adjust-detail">${item.detail}</p><div class="time-editor"><input type="time" value="${item.time}" data-index="${i}" ${fixed?"disabled":""}></div>${fixed?'<div class="fixed-note">🔒 固定予定（予約・飛行機など）</div>':''}<div class="adjust-controls"><button class="small-button up" data-index="${i}" ${i===0?"disabled":""}>↑ 上へ</button><button class="small-button down" data-index="${i}" ${i===items.length-1?"disabled":""}>↓ 下へ</button>${!fixed?`<button class="small-button ${item.skipped?"skip-active":""} skip" data-index="${i}">${item.skipped?"↩ 戻す":"⏭ スキップ"}</button>`:""}</div></div></div></article>`; }).join("");
 list.querySelectorAll('input[type="time"]').forEach(el=>el.addEventListener("change",e=>{ editingTrips[selectedDay].items[Number(e.target.dataset.index)].time=e.target.value; }));
 list.querySelectorAll(".up").forEach(b=>b.addEventListener("click",()=>moveItem(Number(b.dataset.index),-1)));
 list.querySelectorAll(".down").forEach(b=>b.addEventListener("click",()=>moveItem(Number(b.dataset.index),1)));
 list.querySelectorAll(".skip").forEach(b=>b.addEventListener("click",()=>{ const item=editingTrips[selectedDay].items[Number(b.dataset.index)]; item.skipped=!item.skipped; renderAdjustList(); }));
}
function moveItem(i,d){ const a=editingTrips[selectedDay].items,j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];renderAdjustList(); }
function saveAdjust(){ trips=clone(editingTrips); localStorage.setItem(STORAGE_KEY,JSON.stringify(trips)); closeAdjust(); render(); }
function resetSchedule(){ if(!confirm("この旅行のスケジュール調整をすべて元の予定に戻しますか？"))return; trips=clone(defaultTrips); localStorage.removeItem(STORAGE_KEY); editingTrips=clone(trips); renderAdjustList(); render(); }
document.getElementById("openAdjust").addEventListener("click",openAdjust);
document.getElementById("closeAdjust").addEventListener("click",closeAdjust);
document.getElementById("refreshTime").addEventListener("click",updateCurrentTime);
document.getElementById("saveSchedule").addEventListener("click",saveAdjust);
document.getElementById("resetSchedule").addEventListener("click",resetSchedule);
document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeAdjust();});


/* ===== v0.6.4: stable interactive features ===== */
let timeEditDayIndex = null;
let timeEditItemIndex = null;
let addPlanDayIndex = null;
let detailDayIndex = null;
let detailItemIndex = null;

function saveTrips(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(trips)); }
function showModal(id){ document.getElementById(id)?.classList.remove("hidden"); }
function hideModal(id){ document.getElementById(id)?.classList.add("hidden"); }

function openTimeEdit(day,index){
  const item=trips[day]?.items?.[index]; if(!item)return;
  timeEditDayIndex=day; timeEditItemIndex=index;
  document.getElementById("timeEditName").textContent=item.name||"予定";
  document.getElementById("timeEditInput").value=item.time||"";
  showModal("timeEditBackdrop");
}
function closeTimeEdit(){ hideModal("timeEditBackdrop"); timeEditDayIndex=null; timeEditItemIndex=null; }
function saveTimeEdit(){
  if(timeEditDayIndex===null||timeEditItemIndex===null)return;
  const v=document.getElementById("timeEditInput")?.value; if(!v)return;
  const day=timeEditDayIndex,item=trips[day]?.items?.[timeEditItemIndex]; if(!item)return;
  item.time=v; trips[day].items.sort((a,b)=>(a.time||"").localeCompare(b.time||"")); saveTrips();
  closeTimeEdit(); selectedDay=day; render();
}

function openAddPlan(){
  addPlanDayIndex=selectedDay;
  document.getElementById("addPlanName").value="";
  document.getElementById("addPlanTime").value="";
  document.getElementById("addPlanDetail").value="";
  showModal("addPlanBackdrop");
}
function closeAddPlan(){hideModal("addPlanBackdrop");addPlanDayIndex=null;}
function saveAddPlan(){
  if(addPlanDayIndex===null)return;
  const name=document.getElementById("addPlanName")?.value.trim();
  const time=document.getElementById("addPlanTime")?.value;
  const detail=document.getElementById("addPlanDetail")?.value.trim()||"";
  if(!name||!time)return;
  const day=trips[addPlanDayIndex]; if(!day)return;
  day.items.push({time,name,detail,location:"",tag:"CUSTOM",icon:"📍",skipped:false});
  day.items.sort((a,b)=>(a.time||"").localeCompare(b.time||"")); saveTrips();
  const d=addPlanDayIndex; closeAddPlan(); selectedDay=d; render();
}

function openDetail(day,index){
  const item=trips[day]?.items?.[index]; if(!item)return;
  detailDayIndex=day; detailItemIndex=index;
  document.getElementById("detailEditTitle").value=item.name||"";
  document.getElementById("detailEditLocation").value=item.location||"";
  document.getElementById("detailEditMemo").value=item.detail||"";
  showModal("detailBackdrop");
}
function closeDetail(){hideModal("detailBackdrop");detailDayIndex=null;detailItemIndex=null;}
function saveDetail(){
  if(detailDayIndex===null||detailItemIndex===null)return;
  const item=trips[detailDayIndex]?.items?.[detailItemIndex]; if(!item)return;
  const title=document.getElementById("detailEditTitle")?.value.trim(); if(!title)return;
  item.name=title;
  item.location=document.getElementById("detailEditLocation")?.value.trim()||"";
  item.detail=document.getElementById("detailEditMemo")?.value.trim()||"";
  saveTrips(); const d=detailDayIndex; closeDetail(); selectedDay=d; render();
}
function deleteDetailPlan(){
  if(detailDayIndex===null||detailItemIndex===null)return;
  const item=trips[detailDayIndex]?.items?.[detailItemIndex]; if(!item)return;
  if(!confirm(`「${item.name}」を削除しますか？`))return;
  const d=detailDayIndex; trips[d].items.splice(detailItemIndex,1); saveTrips(); closeDetail(); selectedDay=d; render();
}

function bindInteractions(){
  // One body-level delegated listener means it survives every render().
  document.body.addEventListener("click",function(e){
    const time=e.target.closest?.("#timeline .timeline-item > .time");
    if(time){openTimeEdit(selectedDay,Number(time.dataset.timeIndex));return;}
    const add=e.target.closest?.("#addPlanButton"); if(add){openAddPlan();return;}
    const card=e.target.closest?.("#timeline .plan-card");
    if(card){openDetail(selectedDay,Number(card.dataset.detailIndex));return;}
    if(e.target.closest?.("#closeTimeEdit")){closeTimeEdit();return;}
    if(e.target.closest?.("#saveTimeEdit")){saveTimeEdit();return;}
    if(e.target.closest?.("#closeAddPlan")||e.target.closest?.("#cancelAddPlan")){closeAddPlan();return;}
    if(e.target.closest?.("#saveAddPlan")){saveAddPlan();return;}
    if(e.target.closest?.("#closeDetail")){closeDetail();return;}
    if(e.target.closest?.("#saveDetail")){saveDetail();return;}
    if(e.target.closest?.("#saveDetailPlan")){saveDetail();return;}
    if(e.target.closest?.("#deleteDetailPlan")){deleteDetailPlan();return;}
  });
  document.body.addEventListener("keydown",function(e){
    const t=e.target.closest?.("#timeline .timeline-item > .time");
    if(t&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openTimeEdit(selectedDay,Number(t.dataset.timeIndex));}
  });
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",bindInteractions,{once:true}); else bindInteractions();


/* ===== v0.7.2 trip manager ===== */
let tripList = JSON.parse(localStorage.getItem("tabiori_trips") || "null");
if (!Array.isArray(tripList) || !tripList.length) {
  tripList = [{
    id: "seoul-2026",
    title: "ソウル2泊3日",
    date: "9/5〜9/7",
    destination: "🇰🇷 ソウル",
    hotel: "相鉄フレッサイン ソウル明洞"
  }];
  localStorage.setItem("tabiori_trips", JSON.stringify(tripList));
}
let currentTripId = localStorage.getItem("tabiori_current_trip") || tripList[0].id;

function escapeHtml(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[c]));
}

function showTripList() {
  document.getElementById("tripListView")?.classList.remove("hidden");
  document.getElementById("tripDetailView")?.classList.add("hidden");
  renderTripList();
}

function openTrip(id) {
  const trip = tripList.find(t => String(t.id) === String(id));
  if (!trip) return;

  currentTripId = trip.id;
  localStorage.setItem("tabiori_current_trip", trip.id);
  selectedDay = 0;

  const listView = document.getElementById("tripListView");
  const detailView = document.getElementById("tripDetailView");
  if (listView) listView.classList.add("hidden");
  if (detailView) detailView.classList.remove("hidden");

  render();

  // render() may update itinerary content. Keep the trip screen visible.
  document.getElementById("tripListView")?.classList.add("hidden");
  document.getElementById("tripDetailView")?.classList.remove("hidden");
}

function renderTripList() {
  const box = document.getElementById("tripCards");
  if (!box) return;

  box.innerHTML = tripList.map(trip => `
    <div class="trip-card-wrap">
      <button type="button"
        class="trip-card"
        data-trip-id="${escapeHtml(trip.id)}"
        aria-label="${escapeHtml(trip.title || "旅行")}">
        <div class="trip-card-main">
          <div class="trip-card-title">${escapeHtml(trip.destination || "")} ${escapeHtml(trip.title || "")}</div>
          <div class="trip-card-date">${escapeHtml(trip.date || "")}</div>
          ${trip.hotel ? `<div class="trip-card-hotel">${escapeHtml(trip.hotel)}</div>` : ""}
        </div>
        <span class="trip-card-arrow">›</span>
      </button>
    </div>
  `).join("");
}

function addTrip() {
  const id = "trip-" + Date.now();
  tripList.push({
    id,
    title: "新しい旅行",
    date: "",
    destination: "🇯🇵",
    hotel: ""
  });
  localStorage.setItem("tabiori_trips", JSON.stringify(tripList));
  renderTripList();
  openTrip(id);
  // Immediately open the same unified editor for the newly-created trip.
  setTimeout(() => openTripEditor(id), 0);
}

function openTripEditor(id) {
  const trip = tripList.find(t => String(t.id) === String(id));
  if (!trip) return;

  const backdrop = document.getElementById("tripEditBackdrop");
  if (!backdrop) return;

  document.getElementById("tripEditTitle").value = trip.title || "";
  document.getElementById("tripEditDestination").value = trip.destination || "";
  document.getElementById("tripEditDate").value = trip.date || "";
  document.getElementById("tripEditHotel").value = trip.hotel || "";

  backdrop.dataset.tripId = trip.id;
  backdrop.classList.remove("hidden");
}

function closeTripEditor() {
  document.getElementById("tripEditBackdrop")?.classList.add("hidden");
}

function saveTripEditor() {
  const backdrop = document.getElementById("tripEditBackdrop");
  const id = backdrop?.dataset.tripId;
  const trip = tripList.find(t => String(t.id) === String(id));
  if (!trip) return;

  trip.title = document.getElementById("tripEditTitle")?.value.trim() || "無題の旅行";
  trip.destination = document.getElementById("tripEditDestination")?.value.trim() || "";
  trip.date = document.getElementById("tripEditDate")?.value.trim() || "";
  trip.hotel = document.getElementById("tripEditHotel")?.value.trim() || "";

  localStorage.setItem("tabiori_trips", JSON.stringify(tripList));
  closeTripEditor();
  renderTripList();
}

function bindTripManagerV072() {
  const cards = document.getElementById("tripCards");

  if (cards && !cards.dataset.bound072) {
    cards.dataset.bound072 = "1";

    let longPressTimer = null;
    let suppressClickUntil = 0;

    cards.addEventListener("click", e => {
      const card = e.target.closest(".trip-card");
      if (!card) return;

      if (Date.now() < suppressClickUntil) return;

      const id = card.getAttribute("data-trip-id");
      if (id) openTrip(id);
    });

    cards.addEventListener("pointerdown", e => {
      const card = e.target.closest(".trip-card");
      if (!card) return;

      clearTimeout(longPressTimer);
      longPressTimer = setTimeout(() => {
        suppressClickUntil = Date.now() + 900;
        openTripEditor(card.getAttribute("data-trip-id"));
      }, 650);
    });

    ["pointerup", "pointercancel", "pointerleave"].forEach(type => {
      cards.addEventListener(type, () => clearTimeout(longPressTimer));
    });

    cards.addEventListener("contextmenu", e => {
      const card = e.target.closest(".trip-card");
      if (!card) return;
      e.preventDefault();
      suppressClickUntil = Date.now() + 900;
      openTripEditor(card.getAttribute("data-trip-id"));
    });
  }

  const addButton = document.getElementById("addTripButton");
  if (addButton && !addButton.dataset.bound072) {
    addButton.dataset.bound072 = "1";
    addButton.addEventListener("click", addTrip);
  }

  const backButton = document.getElementById("backToTrips");
  if (backButton && !backButton.dataset.bound072) {
    backButton.dataset.bound072 = "1";
    backButton.addEventListener("click", showTripList);
  }

  document.getElementById("closeTripEditor")?.addEventListener("click", closeTripEditor);
  document.getElementById("cancelTripEditor")?.addEventListener("click", closeTripEditor);
  document.getElementById("saveTripEditor")?.addEventListener("click", saveTripEditor);

  document.getElementById("tripEditBackdrop")?.addEventListener("click", e => {
    if (e.target.id === "tripEditBackdrop") closeTripEditor();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    bindTripManagerV072();
    showTripList();
  }, {once:true});
} else {
  bindTripManagerV072();
  showTripList();
}
