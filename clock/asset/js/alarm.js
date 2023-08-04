const setHours = document.getElementById('set__hours'); // hour select의 공간

let startHour = 1; // 시작 시
let endHour = 12; // 마지막 시


// 반복문을 이용해서 1시~ 12시까지 추가하고, 12시에는 seleted 속성을 추가
for(let i = startHour; i<=endHour; i++){
    let setHoursOption = document.createElement('option'); 
    setHoursOption.value = `${i}`;
    setHoursOption.textContent = `${i}`;
    setHours.appendChild(setHoursOption);
    if(i === endHour){
        setHoursOption.selected = true;
    }
}

const setMinutes = document.getElementById('set__minutes'); // minutes select의 공간

let startMin = 0;
let tenMin = 10;
let endMin = 59;

// 반복문을 이용해서 00분~ 59분까지 추가하고, 00분에는 seleted 속성을 추가
for(let i = startMin; i<endMin; i++){
        let setMinOption = document.createElement('option');
        setMinOption.value = `${i < tenMin? '0'+i : i}`;
        setMinOption.textContent =`${i < tenMin? '0'+i : i}`;
        setMinutes.appendChild(setMinOption);
        if(i === startMin){
            setMinOption.selected = true;
        }
}

const alarmSetBtn = document.getElementById('alarm__btn'), // 알람 설정 버튼
cancleAlarmBtn = document.getElementById('cancle__btn'), // 알람 생성 취소 버튼
createAlarmBtn = document.getElementById('create__btn'), // 알람 생성 버튼
alarmSet = document.getElementById('alarm__set'); // 알람 설정 창

alarmSetBtn.addEventListener('click',function(){
  alarmSet.style.display = 'inline-block';
})
cancleAlarmBtn.addEventListener('click',function(){
  alarmSet.style.display = 'none';
})
createAlarmBtn.addEventListener('click',function(){
  alarmSet.style.display = 'none';
})