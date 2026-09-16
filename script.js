const trips = [
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

let selectedDay = 0;

function timeToMinutes(value) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function getActiveItem(items) {
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
  document.getElementById("dayHeading").textContent = day.title;

  document.getElementById("timeline").innerHTML = day.items.map(item => `
    <article class="timeline-item">
      <div class="time">${item.time}</div>
      <div class="plan-card">
        <div class="plan-header">
          <div class="plan-icon">${item.icon}</div>
          <div>
            <h3 class="plan-name">${item.name}</h3>
            <p class="plan-detail">${item.detail}</p>
            <span class="tag">${item.tag}</span>
          </div>
        </div>
      </div>
    </article>
  `).join("");
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
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("todayButton").addEventListener("click", () => {
  const now = new Date();
  if (now.getFullYear() === 2026 && now.getMonth() === 8 && now.getDate() >= 5 && now.getDate() <= 7) {
    selectedDay = now.getDate() - 5;
    render();
  }
});

render();


/* ===== v0.7.9 stable trip screens + schedule details ===== */
(function(){
  const TRIP_KEY="tabiori_trips";
  let trips=[];
  try{trips=JSON.parse(localStorage.getItem(TRIP_KEY)||"[]");}catch(e){}
  if(!Array.isArray(trips)||!trips.length){
    trips=[{id:"seoul-2026",title:"ソウル2泊3日",date:"9/5〜9/7",destination:"🇰🇷",hotel:"相鉄フレッサイン ソウル明洞"}];
    localStorage.setItem(TRIP_KEY,JSON.stringify(trips));
  }

  function $(s){return document.querySelector(s);}
  function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

  function renderTrips(){
    const list=$("#tripListView"), detail=$("#tripDetailView");
    if(list) list.classList.remove("hidden");
    if(detail) detail.classList.add("hidden");
    const box=$("#tripCards");
    if(!box)return;
    box.innerHTML=trips.map(t=>`
      <button type="button" class="trip-card" data-trip-open="${esc(t.id)}">
        <span class="trip-card-main">
          <span class="trip-card-title">${esc(t.destination||"")} ${esc(t.title||"")}</span>
          <span class="trip-card-date">${esc(t.date||"")}</span>
          ${t.hotel?`<span class="trip-card-hotel">${esc(t.hotel)}</span>`:""}
        </span><span class="trip-card-arrow">›</span>
      </button>`).join("");
  }

  function openTrip(id){
    const trip=trips.find(t=>String(t.id)===String(id));
    if(!trip)return;
    localStorage.setItem("tabiori_current_trip",trip.id);
    const list=$("#tripListView"),detail=$("#tripDetailView");
    if(list)list.classList.add("hidden");
    if(detail)detail.classList.remove("hidden");
    try{
      if(typeof selectedDay!=="undefined")selectedDay=0;
      if(typeof render==="function")render();
    }catch(e){console.warn("Tabiori render:",e);}
    // render() may rebuild children, but must not restore the list.
    if(list)list.classList.add("hidden");
    if(detail)detail.classList.remove("hidden");
  }

  function bind(){
    const list=$("#tripListView");
    if(list&&!list.dataset.v079){
      list.dataset.v079="1";
      list.addEventListener("click",e=>{
        const b=e.target.closest("[data-trip-open]");
        if(b){e.preventDefault();e.stopPropagation();openTrip(b.dataset.tripOpen);}
      });
    }

    const back=$("#backToTrips");
    if(back&&!back.dataset.v079){
      back.dataset.v079="1";
      back.addEventListener("click",e=>{e.preventDefault();renderTrips();});
    }

    const detail=$("#tripDetailView");
    if(detail&&!detail.dataset.card079){
      detail.dataset.card079="1";
      detail.addEventListener("click",e=>{
        const card=e.target.closest(".schedule-card,[data-schedule-id],[data-event-id],[data-schedule]");
        if(!card||!detail.contains(card))return;
        if(e.target.closest("button,input,textarea,select,a,[data-no-card-click]"))return;
        const id=card.dataset.scheduleId||card.dataset.eventId||card.dataset.schedule||card.dataset.id||"";
        // Prefer the app's actual detail handler if one exists.
        for(const name of ["openScheduleDetail","showScheduleDetail","openDetail","showDetail","openEventDetail"]){
          if(typeof window[name]==="function"){
            try{window[name](id,card);return;}catch(err){}
          }
        }
        // Fallback: use an existing detail modal in the DOM.
        const modal=document.querySelector(".schedule-detail-modal,.detail-modal,#scheduleDetailModal,#detailModal");
        if(modal)modal.classList.remove("hidden");
      },false);
    }
  }

  function boot(){
    // Ensure the list is the only visible top-level screen at startup.
    const list=$("#tripListView"),detail=$("#tripDetailView");
    if(list)list.classList.remove("hidden");
    if(detail)detail.classList.add("hidden");
    renderTrips();
    bind();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});
  else boot();
})();
