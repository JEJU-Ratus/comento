const setDivision = document.getElementById('set__division'), // 오전 오후 구분
setHours = document.getElementById('set__hours'); // hour select의 공간

let startHour = 1; // 시작 시
let endHour = 12; // 마지막 시
let tenOClock = 10;

// 반복문을 이용해서 1시~ 12시까지 추가하고, 12시에는 seleted 속성을 추가
for(let i = startHour; i<=endHour; i++){
    let setHoursOption = document.createElement('option'); 
    setHoursOption.value = `${i < tenOClock? '0'+i : i}`;
    setHoursOption.textContent = `${i < tenOClock? '0'+i : i}`;
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
alarmSet = document.getElementById('alarm__set'), // 알람 설정 창
alarmList = document.getElementById('alarm__list'), // 알람 설정 리스트
maxChild = 3;

// 알람 설정 버튼을 눌렀을 때 알람 설정 창이 보이게
alarmSetBtn.addEventListener('click',function(){
  alarmSet.style.display = 'inline-block';
})
// 알람 설정 창에서 취소 버튼을 누르면 알람 설정 창이 사라지게
cancleAlarmBtn.addEventListener('click',function(){
  alarmSet.style.display = 'none';
})

// 알람 설정 창에서 생성 버튼을 누르면 알람 설정 창이 사라지며 리스트에 항목 추가
createAlarmBtn.addEventListener('click',function(){
  // 각 변수에 오전/오후,시,분의 value값을 저장
  let divisionOption = setDivision.options[setDivision.selectedIndex].value, // 오전,오후
  hoursOption = setHours.options[setHours.selectedIndex].value, // 시
  minutesOption = setMinutes.options[setMinutes.selectedIndex].value; // 분

  alarmSet.style.display = 'none'; // 알람 설정 창 숨기기
  let newList = document.createElement('li');
  newList.textContent = `${divisionOption} ${hoursOption}시 ${minutesOption}분`;
  // 리스트에 넣을 각 항목 삭제버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", function(){
    newList.remove(); // 삭제 버튼을 클릭하면 해당 리스트 항목 삭제
  });
  newList.appendChild(deleteBtn); // 자식 요소로 삭제 버튼 추가

  if(alarmList.children.length < maxChild){
  alarmList.appendChild(newList); 
  }
  else{
    alarmSet.style.display = 'inline-block';  // 알림 설정 창 보이게
    modalBackground.style.display = 'block'; // 모달 배경 창 on 함으로 다른거 클릭 방지
    modalError.style.display = 'block'; // 모달 에러창 띄우기
  }
})
// 모달창
const modalClose = document.getElementById('modal__close'), // 모달 창 닫기 버튼
modalError = document.getElementById('modal__error'), // 모달 창
modalBackground = document.getElementById('modal__background'); // 모달 창 배경

modalClose.addEventListener('click',function(){
    modalBackground.style.display = 'none'; // 모달 배경 창 off
    modalError.style.display = 'none'; // 모달 에러 창 off
})