// const elements = document.querySelector('#btn')
// elements.addEventListener('click', function(event) {
//   if (alphabet.childNodes[1].innerHTML === 'a버튼') {
//     console.log(alphabet.childNodes[1].innerHTML = 'a');
//   } else {
//     console.log(alphabet.childNodes[1].innerHTML = 'btn');
//   };
// })

// const alphabet = document.querySelector('.abc');
// // console.dir(alphabet);

const btn = document.querySelector('.drag');
const box = document.querySelector('.inner');
const bigBox = document.querySelector('.base');

btn.addEventListener('mousedown', turnOn);

// 마우스를 클릭했을때
function turnOn(){ 
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', turnOff);
}

// 마우스를 움직였을때 위치값 정하기
function move(e) {
  e.preventDefault(); //이벤트에 대한 웹브라우저의 기본동작 취소하기
  // console.dir(bigBox)
  if (e.clientY <= (bigBox.offsetHeight /2)){
    box.style.top = e.clientY + 'px';
  }
}

// 마우스를 움직이다가 기준 위치값에 도달했을때
function autoMove(e) {
  if ( e.clientY > bigBox.offsetHeight /4) {
    box.style.top = (bigBox.offsetHeight /2) +'px';
  } else {
    box.style.top = 0 + 'px';
  } 
}

// 마우스를 뗐을때
function turnOff(e) {
  document.removeEventListener('mousemove', move);
  document.removeEventListener('mouseup', turnOff);
  autoMove(e);
}









