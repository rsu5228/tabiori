const DEFAULT_ITINERARY = [
  {title:'DAY 1 — 9/5 SAT',items:[
    ['08:55','✈️','成田発','仁川国際空港へ出発'],['11:25','🛬','仁川T1着','11:25〜12:30\n入国審査など'],['12:30','🚆','AREX一般','仁川T1 → ソウル駅'],['13:30','🚇','ソウル駅 → 明洞方面','地下鉄4号線で明洞駅へ'],['13:40','💱','MONEY PLANET','13:40〜13:55\n両替'],['14:00','🏨','相鉄フレッサイン ソウル明洞','ホテルへ荷物預け'],['14:05','💳','WOWPASSチャージ','ホテル内のWOWPASS機でチャージ'],['14:15','🥟','明洞餃子','14:15〜15:15\nランチ'],['15:15','🛍️','ミミライン＋明洞ショッピング','15:15〜17:00'],['17:30','🦀','オダリチプ','予約済み'],['19:00','🌙','明洞散策・ホテル','19:00〜\n自由時間']]},
  {title:'DAY 2 — 9/6 SUN',items:[
    ['08:15','🚇','ホテル出発','4号線 → 忠武路 → 3号線\n景福宮方面へ'],['08:40','👘','インコリア韓服','08:40頃 到着'],['09:00','👘','韓服レンタル','レンタル開始'],['09:15','🏯','景福宮','09:15〜11:10\n韓服で観光'],['11:10','🚶','韓服店へ戻る','11:10〜11:30'],['11:30','👘','韓服返却','レンタル終了'],['11:30','🍲','土俗村','11:30〜12:30\n参鶏湯ランチ'],['12:30','🚇','景福宮駅 → 安国駅','3号線／梧琴方面\n1駅'],['12:50','🥐','Artist Bakery','12:50〜13:40\n塩パンを9/7朝食用に購入'],['13:40','🧄','Garlic Boy 安国店','13:40〜14:00\nパン購入'],['14:00','🚶','安国 → イクソンドン','徒歩で移動\n14:00〜14:20'],['14:20','🏘️','イクソンドン散策','14:20〜15:10'],['15:10','🍵','清水堂','15:10〜16:10'],['16:10','🌷','イクソンドン散策・駅へ','16:10〜16:30'],['16:30','🚇','鍾路3街駅 → 狎鴎亭','3号線／梧琴方面'],['17:00','🛍️','狎鴎亭散策＋黒ゴマもち','17:00〜17:50\n黒ゴマもち購入'],['17:50','🚕','タクシー','盤浦漢江公園へ'],['18:10','🌉','盤浦漢江公園','18:10頃 到着\nパン・黒ゴマもち準備、散策'],['19:30','⛲','噴水ショー','19:30〜19:50\n※間に合わなければ20:00の回'],['19:50','🚌','ホテルへ移動','740番バス → 漢江中学校\n→ 401または406番 → 明洞方面'],['20:30','🏨','ホテル','20:30頃\n余裕があれば明洞で食べ歩き']]},
  {title:'DAY 3 — 9/7 MON',items:[
    ['07:00','☀️','起床','07:00〜07:30'],['07:30','🥐','朝食','07:30〜08:00\nArtist Bakeryの塩パン'],['08:00','🧳','荷造り・身支度','08:00〜08:30'],['08:30','🏨','チェックアウト','ホテルを出発'],['08:40','🚇','明洞駅 → ソウル駅','4号線で移動'],['09:00','🚆','AREX一般','ソウル駅 → 仁川T1'],['10:00','🛫','仁川空港T1着','チェックイン・荷物預け・保安検査'],['12:55','✈️','仁川発','成田へ出発'],['15:30','🛬','成田着','おつかれさまでした！']]}
].map(d=>({title:d.title,items:d.items.map(x=>({time:x[0],icon:x[1],name:x[2],detail:x[3]}))}));
const TRIPS_KEY='tabiori_trips'; const ITIN_KEY='tabiori_itineraries_v081'; const OLD_KEY='tabiori-seoul-v0.2';
const clone=o=>JSON.parse(JSON.stringify(o));
let tripList=JSON.parse(localStorage.getItem(TRIPS_KEY)||'null');
if(!Array.isArray(tripList)||!tripList.length){tripList=[{id:'seoul-2026',title:'ソウル2泊3日',flag:'🇰🇷',startDate:'2026-09-05',endDate:'2026-09-07',hotel:'相鉄フレッサイン ソウル明洞'}];}
tripList=tripList.map(t=>{
  const destination=typeof t.destination==='string'?t.destination:'';
  let flag=t.flag||((destination.match(/^\s*(\p{Extended_Pictographic}(?:\uFE0F)?)/u)||[])[1]);
  // 既存データで国旗がすべて「✈️」になっていた場合も、韓国旅行は韓国国旗へ戻す。
  if(t.id==='seoul-2026' || destination.trim().startsWith('🇰🇷')) flag='🇰🇷';
  flag=flag||'';
  let start=t.startDate||'';let end=t.endDate||'';
  let weatherCity=t.weatherCity||'';
  if(!weatherCity && t.id==='seoul-2026') weatherCity='Seoul';
  if(!weatherCity && /台湾|Taiwan/i.test(String(t.title||''))) weatherCity='Taipei';
  // 日程未定は明示的な状態として保持する。既存データは日付があれば設定済み、両方空なら未定として移行。
  let dateMode=t.dateMode==='unset'?'unset':((t.dateMode==='set'||start||end)?'set':'unset');
  // 旧データの韓国旅行だけは、明示的に未定へ変更されていない場合に限り従来の日付を補完する。
  if(t.id==='seoul-2026' && t.dateMode!=='unset'){start=start||'2026-09-05';end=end||'2026-09-07';dateMode='set';}
  if(dateMode==='unset'){start='';end='';}
  return {...t,flag,startDate:start,endDate:end,dateMode,weatherCity};
});
localStorage.setItem(TRIPS_KEY,JSON.stringify(tripList));
let itineraries=JSON.parse(localStorage.getItem(ITIN_KEY)||'{}');
function normalize(days){
  if(!Array.isArray(days)) return [];
  return days.map((d,i)=>({
    title:d?.title||`DAY ${i+1}`,
    items:(Array.isArray(d?.items)?d.items.map(x=>({time:x?.time||'09:00',icon:x?.icon||'➕️',name:x?.name||'予定',detail:x?.detail||'',skipped:!!x?.skipped})):[])
      .sort((a,b)=>toMin(a.time)-toMin(b.time))
  }));
}
function hasPlans(days){return Array.isArray(days)&&days.some(d=>Array.isArray(d?.items)&&d.items.length>0);}
function saveItineraries(){localStorage.setItem(ITIN_KEY,JSON.stringify(itineraries));}
function getItinerary(id){
  let days=normalize(itineraries[id]);
  // 韓国旅行だけ、既存予定が無い場合に旧保存データ→初期予定の順で復元する。
  // 他の旅行には韓国の予定を流用しない。
  if(id==='seoul-2026' && !hasPlans(days)){
    let restored=null;
    try{
      const legacy=JSON.parse(localStorage.getItem(OLD_KEY)||'null');
      if(hasPlans(legacy)) restored=normalize(legacy);
    }catch(e){}
    days=restored&&hasPlans(restored)?restored:clone(DEFAULT_ITINERARY);
    itineraries[id]=days;
    saveItineraries();
  }else if(!Array.isArray(itineraries[id])){
    itineraries[id]=days;
    saveItineraries();
  }else{
    itineraries[id]=days;
  }
  return days;
}
Object.keys(itineraries).forEach(k=>{itineraries[k]=normalize(itineraries[k]);});
// 起動時に韓国旅行だけを復元。他の旅行は予定なしのまま維持する。
getItinerary('seoul-2026');
saveItineraries();
let currentTripId=null,selectedDay=0,detailIndex=null,timeIndex=null,editingTripId=null,editingTripDateMode='set',longPressTriggered=false,addPlanIcon='➕️',detailEditIcon='',weatherCityEditingTripId=null;
const $=id=>document.getElementById(id); const show=id=>$(id)?.classList.remove('hidden'); const hide=id=>$(id)?.classList.add('hidden'); const setText=(id,value)=>{const el=$(id);if(el)el.textContent=value;};
function saveAll(){localStorage.setItem(TRIPS_KEY,JSON.stringify(tripList));saveItineraries();}
function getTripDayCount(id){const t=tripList.find(x=>x.id===id);if(!t||!t.startDate||!t.endDate)return 1;const start=new Date(t.startDate+'T00:00:00');const end=new Date(t.endDate+'T00:00:00');const diff=Math.round((end-start)/86400000)+1;return Math.max(1,diff);}
function formatDayTabDate(startDate,index){if(!startDate)return '';const d=new Date(startDate+'T00:00:00');d.setDate(d.getDate()+index);const w=['SUN','MON','TUE','WED','THU','FRI','SAT'][d.getDay()];return `${d.getMonth()+1}/${d.getDate()} ${w}`;}
function ensureItems(id){const count=getTripDayCount(id);let days=Array.isArray(itineraries[id])?normalize(itineraries[id]):[];while(days.length<count)days.push({title:`DAY ${days.length+1}`,items:[]});if(days.length>count)days=days.slice(0,count);days=days.map((d,i)=>{const raw=String(d.title||'').trim();const m=raw.match(/^DAY\s*\d+\s*(—.*)?$/i);const suffix=m&&m[1]?` ${m[1].trim()}`:'';return {...d,title:`DAY ${i+1}${suffix}`};});itineraries[id]=days;saveItineraries();}
function formatDate(a,b){if(!a&&!b)return '日程未設定'; const f=s=>s?s.replace(/-/g,'.'):''; return b&&a?`${f(a)} — ${b.slice(0,4)===a.slice(0,4)?f(b).slice(5):f(b)}`:f(a||b);}
function renderTripList(){const box=$('tripCards');const sorted=[...tripList].sort((a,b)=>{const ad=a.startDate?Date.parse(a.startDate+'T00:00:00'):Number.NEGATIVE_INFINITY;const bd=b.startDate?Date.parse(b.startDate+'T00:00:00'):Number.NEGATIVE_INFINITY;return bd-ad;});box.innerHTML=sorted.map(t=>`<button type="button" class="trip-card" data-trip-id="${t.id}"><div class="trip-card-main"><div class="trip-card-title">${t.flag?esc(t.flag)+' ':''}${esc(t.title||'無題の旅行')}</div><div class="trip-card-date">${esc(formatDate(t.startDate,t.endDate))}</div>${t.hotel?`<div class="trip-card-hotel">${esc(t.hotel)}</div>`:''}</div><span class="trip-card-arrow">›</span></button>`).join('');}
function showList(){currentTripId=null;hide('tripDetailView');show('tripListView');closeAllModals();renderTripList();window.scrollTo(0,0);}
function openTrip(id){
  const t=tripList.find(x=>x.id===id);if(!t)return;
  currentTripId=id;
  const days=getItinerary(id);
  ensureItems(id);
  selectedDay=0;
  hide('tripListView');show('tripDetailView');render();window.scrollTo(0,0);
}
const WEATHER_CACHE_KEY='tabiori_weather_cache_v1';
const weatherCache=JSON.parse(localStorage.getItem(WEATHER_CACHE_KEY)||'{}');
function saveWeatherCache(){localStorage.setItem(WEATHER_CACHE_KEY,JSON.stringify(weatherCache));}
function weatherLabel(code){const c=Number(code);if(c===0)return ['☀️','快晴'];if(c<=3)return ['🌤️','晴れ・くもり'];if(c<=48)return ['🌫️','霧'];if(c<=67)return ['🌧️','雨'];if(c<=77)return ['🌨️','雪'];if(c<=82)return ['🌦️','にわか雨'];if(c<=86)return ['🌨️','雪・にわか雪'];return ['⛈️','雷雨'];}
async function getWeatherCoords(city){const raw=city.trim();const key='geo:'+raw.toLowerCase();if(weatherCache[key])return weatherCache[key];const queries=[raw,raw.replace(/[、,，].*$/,'').trim()];let x=null;for(const q of queries){if(!q)continue;const u='https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(q)+'&count=5&language=en&format=json';const r=await fetch(u);if(!r.ok)continue;const j=await r.json();x=j.results?.find(v=>v.feature_code?.startsWith('PPLC'))||j.results?.find(v=>v.feature_code?.startsWith('PPLA'))||j.results?.[0];if(x)break;}if(!x)throw new Error('city');const v={lat:x.latitude,lon:x.longitude,name:x.name||raw,timezone:x.timezone||'auto'};weatherCache[key]=v;saveWeatherCache();return v;}
function localDateKey(d=new Date()){const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
async function fetchWeather(city,date){
  const rawCity=(city||'').trim();
  const rawDate=(date||'').trim();
  if(!rawCity||!rawDate)return null;
  const cacheKey='weather:'+rawCity.toLowerCase()+':'+rawDate;
  if(weatherCache[cacheKey]&&weatherCache[cacheKey].code!=null)return weatherCache[cacheKey];
  const geo=await getWeatherCoords(rawCity);
  const todayKey=localDateKey();
  const targetMs=Date.parse(rawDate+'T00:00:00');
  const todayMs=Date.parse(todayKey+'T00:00:00');
  if(!Number.isFinite(targetMs)||!Number.isFinite(todayMs))return null;
  const daily='weather_code,temperature_2m_max,temperature_2m_min';
  const tz=encodeURIComponent(geo.timezone||'auto');
  let j=null,kind='';
  const pick=(candidate)=>{
    const times=candidate?.daily?.time;
    if(!Array.isArray(times))return null;
    const i=times.indexOf(rawDate);
    if(i<0)return null;
    const d=candidate.daily;
    const out={city:geo.name||rawCity,date:rawDate,kind,code:d.weather_code?.[i],max:d.temperature_2m_max?.[i],min:d.temperature_2m_min?.[i]};
    if(out.code==null&&out.max==null&&out.min==null)return null;
    return out;
  };
  const request=async(url,label)=>{
    try{
      const r=await fetch(url);
      if(!r.ok){console.warn('[Tabiori weather]',label,'HTTP',r.status);return null;}
      const candidate=await r.json();
      return candidate;
    }catch(e){console.warn('[Tabiori weather]',label,e);return null;}
  };
  if(rawDate<todayKey){
    kind='actual';
    const archiveUrl=`https://archive-api.open-meteo.com/v1/archive?latitude=${geo.lat}&longitude=${geo.lon}&start_date=${rawDate}&end_date=${rawDate}&daily=${daily}&timezone=${tz}`;
    j=await request(archiveUrl,'archive');
    let out=pick(j);
    if(!out){
      const historicalForecastUrl=`https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.lon}&start_date=${rawDate}&end_date=${rawDate}&daily=${daily}&timezone=${tz}`;
      j=await request(historicalForecastUrl,'historical-forecast');
      out=pick(j);
    }
    if(!out)return null;
    weatherCache[cacheKey]=out;saveWeatherCache();return out;
  }
  const diff=Math.round((targetMs-todayMs)/86400000);
  if(diff>16)return null;
  kind='forecast';
  const forecastUrl=`https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.lon}&start_date=${rawDate}&end_date=${rawDate}&daily=${daily}&timezone=${tz}`;
  j=await request(forecastUrl,'forecast');
  const out=pick(j);
  if(!out)return null;
  weatherCache[cacheKey]=out;saveWeatherCache();return out;
}
async function renderWeather(t,dayIndex){const el=$('weatherWidget');if(!el)return;const iconEl=el.querySelector('.weather-icon');const textEl=el.querySelector('.weather-text');const endIconEl=el.querySelector('.weather-end-icon');const city=(t.weatherCity||'').trim();const date=t.startDate?formatDateOnly(t.startDate,dayIndex):'';el.classList.remove('hidden');el.disabled=false;iconEl.textContent='☀️';textEl.textContent='天気不明';endIconEl.textContent='☔️';if(!city||!date)return;textEl.textContent='読み込み中…';try{const w=await fetchWeather(city,date);if(!w)return;const [icon]=weatherLabel(w.code);iconEl.textContent=icon;const max=Number.isFinite(Number(w.max))?`${Math.round(Number(w.max))}℃`:'--℃';const min=Number.isFinite(Number(w.min))?`${Math.round(Number(w.min))}℃`:'--℃';textEl.textContent=`${w.city} ${max}/${min}`;}catch(e){/* 不明表示のまま */}}
function render(){
  const t=tripList.find(x=>x.id===currentTripId);if(!t)return;
  setText('tripFlag',t.flag||''); setText('tripName',t.title||'旅行'); setText('tripDate',formatDate(t.startDate,t.endDate)); setText('tripBadge',t.hotel||'');
  const dayTabs=$('dayTabs');
  const dayCount=getTripDayCount(currentTripId);
  dayTabs.innerHTML=Array.from({length:dayCount},(_,i)=>`<button class="day-tab ${i===selectedDay?'active':''}" data-day="${i}"><span class="day-number">DAY ${i+1}</span></button>`).join('');
  renderWeather(t, selectedDay);
  const days=getItinerary(currentTripId);
  if(selectedDay>=dayCount)selectedDay=dayCount-1;
  const d=days[selectedDay]||{title:`DAY ${selectedDay+1}`,items:[]};
  const dayDate=formatDayTabDate(t.startDate,selectedDay);$('dayHeading').innerHTML=`<span class="day-heading-number">DAY ${selectedDay+1}</span>${dayDate?`<span class="day-heading-date">${esc(dayDate)}</span>`:''}`;renderNext(d.items);renderTimeline(d.items);
}
function renderNext(items){const active=items.filter(x=>!x.skipped);const card=$('nextCard');if(!active.length){card.innerHTML='<p class="next-note">この日の予定はありません。</p>';return;}let item=active[0];const now=new Date();const t=tripList.find(x=>x.id===currentTripId);const date=t?.startDate?new Date(t.startDate+'T00:00:00'):null;if(date&&date.getFullYear()===now.getFullYear()&&date.getMonth()===now.getMonth()&&now.getDate()===date.getDate()+selectedDay){const mins=now.getHours()*60+now.getMinutes();item=active.find(x=>toMin(x.time)>=mins)||active[active.length-1];}card.innerHTML=`<div class="next-top"><div class="icon-bubble">${esc(item.icon)}</div><div><p class="next-time">${esc(item.time)}</p><h3 class="next-name">${esc(item.name)}</h3><p class="next-note">${esc(item.detail).replace(/\n/g,'<br>')}</p></div></div>`;}
function renderTimeline(items){const tl=$('timeline');tl.innerHTML=items.map((x,i)=>`<article class="timeline-item"><div class="time" data-time-index="${i}" role="button" tabindex="0">${esc(x.time)}</div><div class="plan-card ${x.skipped?'skipped':''}" data-detail-index="${i}" role="button" tabindex="0"><div class="plan-header"><div class="plan-icon">${esc(x.icon)}</div><div><h3 class="plan-name">${esc(x.name)}${x.skipped?'<span class="skip-label">SKIPPED</span>':''}</h3><p class="plan-detail">${esc(x.detail).replace(/\n/g,'<br>')}</p></div></div></div></article>`).join('')+`<button type="button" id="addPlanButton" class="add-plan-button">＋ 予定を追加</button>`;}
function openDetail(i){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[i];if(!x)return;detailIndex=i;detailEditIcon=x.icon||'➕️';$('detailEditTitle').value=x.name||'';$('detailEditTime').value=x.time||'';$('detailEditMemo').value=x.detail||'';document.querySelectorAll('[data-detail-icon]').forEach(b=>b.classList.toggle('is-selected',b.dataset.detailIcon===detailEditIcon));show('detailBackdrop');lock();}
function openTimeEdit(i){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[i];if(!x)return;timeIndex=i;$('timeEditName').textContent=x.name;$('timeEditInput').value=x.time;show('timeEditBackdrop');lock();}
function openAdd(){ addPlanIcon='➕️';$('addPlanName').value='';$('addPlanTime').value='';$('addPlanDetail').value='';document.querySelectorAll('[data-add-icon]').forEach(b=>b.classList.toggle('is-selected',b.dataset.addIcon===addPlanIcon));show('addPlanBackdrop');lock();}
function applyTripDateEditMode(){const unset=editingTripDateMode==='unset';const start=$('tripEditStart');const end=$('tripEditEnd');const button=$('tripDateUnsetButton');const row=document.querySelector('.date-range-row');if(start)start.disabled=unset;if(end)end.disabled=unset;if(button){button.textContent='未定';button.classList.toggle('is-selected',unset);}if(row)row.classList.toggle('is-unset',unset);}
function openTripEdit(id){const t=tripList.find(x=>x.id===id);if(!t)return;editingTripId=id;editingTripDateMode=t.dateMode==='unset'||(!t.startDate&&!t.endDate)?'unset':'set';$('tripEditTitle').value=t.title||'';$('tripEditFlag').value=t.flag||'';$('tripEditStart').value=t.startDate||'';$('tripEditEnd').value=t.endDate||'';$('tripEditHotel').value=t.hotel||'';applyTripDateEditMode();show('tripEditBackdrop');lock();}
function openWeatherCity(){if(!currentTripId)return;const t=tripList.find(x=>x.id===currentTripId);if(!t)return;weatherCityEditingTripId=currentTripId;$('weatherCityInput').value=t.weatherCity||'';show('weatherCityBackdrop');lock();}
function closeAllModals(){document.querySelectorAll('.modal-backdrop').forEach(x=>x.classList.add('hidden'));document.body.style.overflow='';}
function lock(){document.body.style.overflow='hidden';}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toMin(s){const [h,m]=s.split(':').map(Number);return h*60+m;}
function makeId(){return 'trip-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7);}
function bind(){
 document.body.addEventListener('click',e=>{
   const card=e.target.closest('.trip-card'); if(card){if(longPressTriggered){longPressTriggered=false;return;}openTrip(card.dataset.tripId);return;}
   const day=e.target.closest('.day-tab');if(day){selectedDay=Number(day.dataset.day);render();window.scrollTo({top:0,behavior:'smooth'});return;}
   if(e.target.closest('#backToTrips')){showList();return;}
   if(e.target.closest('#weatherWidget')){openWeatherCity();return;}
   const time=e.target.closest('.timeline-item > .time');if(time){openTimeEdit(Number(time.dataset.timeIndex));return;} const plan=e.target.closest('.plan-card');if(plan){openDetail(Number(plan.dataset.detailIndex));return;}
   if(e.target.closest('#todayButton')){const t=tripList.find(x=>x.id===currentTripId);const now=new Date();if(t?.startDate){const d=new Date(t.startDate+'T00:00:00');const n=Math.round((new Date(now.getFullYear(),now.getMonth(),now.getDate())-d)/86400000);if(n>=0&&n<3){selectedDay=n;render();}}return;}
   if(e.target.closest('#closeDetail')){closeAllModals();return;} const detailIconChoice=e.target.closest('[data-detail-icon]');if(detailIconChoice){if(detailIconChoice.dataset.detailIcon==='➕️'){const custom=prompt('表示したい絵文字を入力してください。','');if(custom!==null&&custom.trim()){detailEditIcon=custom.trim();document.querySelectorAll('[data-detail-icon]').forEach(b=>b.classList.toggle('is-selected',b.dataset.detailIcon===detailEditIcon));}}else{detailEditIcon=detailIconChoice.dataset.detailIcon;document.querySelectorAll('[data-detail-icon]').forEach(b=>b.classList.toggle('is-selected',b===detailIconChoice));}return;} if(e.target.closest('#saveDetail')){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[detailIndex];if(!x)return;x.name=$('detailEditTitle').value.trim()||'予定';x.time=$('detailEditTime').value||x.time||'09:00';x.icon=detailEditIcon||x.icon||'➕️';x.detail=$('detailEditMemo').value;delete x.tag;days[selectedDay].items.sort((a,b)=>toMin(a.time)-toMin(b.time));itineraries[currentTripId]=normalize(days);saveAll();closeAllModals();render();return;} if(e.target.closest('#deleteDetailPlan')){const days=getItinerary(currentTripId);if(!days[selectedDay]?.items?.[detailIndex])return;days[selectedDay].items.splice(detailIndex,1);saveAll();closeAllModals();render();return;}
   if(e.target.closest('#closeTimeEdit')){closeAllModals();return;}if(e.target.closest('#saveTimeEdit')){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[timeIndex];if(!x)return;x.time=$('timeEditInput').value||x.time;itineraries[currentTripId]=normalize(days);saveAll();closeAllModals();render();return;}
   if(e.target.closest('#addPlanButton')){openAdd();return;}const iconChoice=e.target.closest('[data-add-icon]');if(iconChoice){if(iconChoice.dataset.addIcon==='➕️'){const custom=prompt('表示したい絵文字を入力してください。','');if(custom!==null&&custom.trim()){addPlanIcon=custom.trim();document.querySelectorAll('[data-add-icon]').forEach(b=>b.classList.toggle('is-selected',b===iconChoice));}}else{addPlanIcon=iconChoice.dataset.addIcon;document.querySelectorAll('[data-add-icon]').forEach(b=>b.classList.toggle('is-selected',b===iconChoice));}return;}if(e.target.closest('#closeAddPlan')||e.target.closest('#cancelAddPlan')){closeAllModals();return;}if(e.target.closest('#saveAddPlan')){if(!currentTripId)return;let days=getItinerary(currentTripId);if(!Array.isArray(days)||!days.length){ensureItems(currentTripId);days=getItinerary(currentTripId);}if(!days[selectedDay]){days[selectedDay]={title:`DAY ${selectedDay+1}`,items:[]};}if(!Array.isArray(days[selectedDay].items))days[selectedDay].items=[];const name=$('addPlanName').value.trim();if(!name)return alert('予定名を入力してください。');days[selectedDay].items.push({time:$('addPlanTime').value||'09:00',icon:addPlanIcon||'➕️',name,detail:$('addPlanDetail').value||''});days[selectedDay].items.sort((a,b)=>toMin(a.time)-toMin(b.time));itineraries[currentTripId]=normalize(days);saveAll();closeAllModals();render();return;}
   if(e.target.closest('#addTripButton')){const id=makeId();tripList.push({id,title:'新しい旅行',flag:'',startDate:null,endDate:null,dateMode:'unset',weatherCity:'',hotel:''});ensureItems(id);saveAll();renderTripList();openTripEdit(id);return;}
   if(e.target.closest('#closeWeatherCity')){closeAllModals();return;}if(e.target.closest('#saveWeatherCity')){const t=tripList.find(x=>x.id===weatherCityEditingTripId);if(!t)return;t.weatherCity=$('weatherCityInput').value.trim();saveAll();closeAllModals();if(currentTripId===t.id)render();return;}
   if(e.target.closest('#closeTripEdit')){closeAllModals();return;}if(e.target.closest('#tripDateUnsetButton')){if(editingTripDateMode==='unset'){editingTripDateMode='set';}else{editingTripDateMode='unset';$('tripEditStart').value='';$('tripEditEnd').value='';}applyTripDateEditMode();return;}if(e.target.closest('#saveTrip')){const t=tripList.find(x=>x.id===editingTripId);if(!t)return;t.title=$('tripEditTitle').value.trim()||'無題の旅行';t.flag=$('tripEditFlag').value.trim();if(editingTripDateMode==='unset'){t.dateMode='unset';t.startDate=null;t.endDate=null;}else{const start=$('tripEditStart').value;const end=$('tripEditEnd').value;if(!start||!end)return alert('旅行日を設定する場合は、開始日と終了日の両方を入力してください。');if(end<start)return alert('終了日は開始日以降の日付を選択してください。');t.dateMode='set';t.startDate=start;t.endDate=end;}t.hotel=$('tripEditHotel').value.trim();saveAll();closeAllModals();renderTripList();if(currentTripId===t.id)render();return;}if(e.target.closest('#deleteTrip')){const idx=tripList.findIndex(x=>x.id===editingTripId);if(idx<0)return;const id=editingTripId;tripList.splice(idx,1);delete itineraries[id];saveAll();closeAllModals();showList();return;}
 });
 document.body.addEventListener('pointerdown',e=>{const card=e.target.closest('.trip-card');if(!card)return;longPressTriggered=false;card._lp=setTimeout(()=>{longPressTriggered=true;openTripEdit(card.dataset.tripId);},650);});
 ['pointerup','pointercancel','pointerleave'].forEach(ev=>document.body.addEventListener(ev,e=>{const card=e.target.closest?.('.trip-card');if(card&&card._lp){clearTimeout(card._lp);card._lp=null;}}));
}
bind();
// Always start on the travel list. The itinerary is intentionally not rendered until a trip card is tapped.
showList();
