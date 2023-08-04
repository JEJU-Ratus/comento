//  배터리 부분
const battery = document.getElementById('battery'), // 배터리 잔량 표기
clock = document.getElementById('clock'); // 시계 레이아웃

let fullBtPercent = 100, // 배터리 총량
btPercent = 0; // 배터리 잔량이 0일때

battery.textContent = `${fullBtPercent}%`; // 배터리 잔량 표기부분에 퍼센트 수치 집어넣기

// 1초마다 배터리 잔량 감소하는 함수
let btInterval = setInterval(batteryPercent,1000);

function batteryPercent(){
    if(fullBtPercent > btPercent){
        fullBtPercent--;
        battery.textContent = `${fullBtPercent}%`; // 배터리 잔량 표기부분에 퍼센트 수치 집어넣기
    }
    else{
        clock.style.backgroundColor = 'black';
        clearInterval(btInterval);
        clearInterval(timeInterval);
    }
}


// 시계 부분
const time = document.getElementById('time'); // 시계 노출 위치
getTime(); // 처음 웹 페이지를 켰을 때 현재 시간을 불러온다.

let timeInterval = setInterval(getTime,1000); // 초마다 현재 시간을 불러옴 

function getTime(){
    let todayDate = new Date(), // 현재시간을 불러옴
    year = todayDate.getFullYear(), // 현재 시간에서 연도를 저장
    month = todayDate.getMonth()+1, // 현재 시간에서 월을 저장 0~11 이라 +1
    date = todayDate.getDate(), // 현재 시간에서 일을 저장
    hour = todayDate.getHours(), // 현재 시간에서 시각을 저장
    minutes = todayDate.getMinutes(), // 현재 시간에서 분을 저장
    seconds = todayDate.getSeconds(); // 현재 시간에서 초를 저장

    //오늘의 날짜와 현재 시간을 표시 10보다 작은 수는 앞에 0이 붙도록 하였다.
    time.textContent = `${year}-${month > 10 ? month : '0'+ month}-${date < 10 ? '0'+ date : date}  ${hour < 10 ? '0'+ hour : hour}:${minutes < 10 ? '0'+ minutes : minutes}:${seconds < 10 ? '0'+ seconds : seconds}`;  
}

