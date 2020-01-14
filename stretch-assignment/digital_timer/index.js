// const seconds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = seconds.length; i >= 0; i--) {
//   tens.textContent = seconds[i];

// }
// let mtens = document.getElementById("msTens");
// let mhundred = document.getElementById("msHundreds");
// let sones = document.getElementById("secondOnes");
// let stens = document.getElementById("secondTens");

// let start = Date.now();
// console.log(start);

// let interval = setInterval(() => {
//   let elapsed = Date.now() - start;
//   let tensOf = 0;
  
//   if (elapsed / 1000 < 10) {
//     mtens.textContent = elapsed;
//   }
//   else{
//     mtens.textContent = 0;
//   }

//   tensOf = tensOf++;
//   mhundred.textContent = tensOf;
  
// });

// function getTimeRemaining(endtime){
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor( (t/1000) % 60 );
//     var minutes = Math.floor( (t/1000/60) % 60 );
//     var hours = Math.floor( (t/(1000*60*60)) % 24 );
//     var days = Math.floor( t/(1000*60*60*24) );
//     return {
//       'total': t,
//       'days': days,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
//   }

const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

timer();

function timer () {
  init();
  
  function init () {
    let ms = 0;
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";
    
    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timerInterval); 
      }
      updateTimer(ms);
    }, 10);
  }
  
  function increment (string) {
    let number = Number(string) + 1;
    return number.toString();
  }

  function endTimer (intervalId) {
    clearInterval(intervalId);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }

  function updateTimer (ms) {
    if (ms === 10000) {
      secondTens.innerHTML = "1";
      secondOnes.innerHTML = "0";
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 1000 === 0) {
      secondOnes.innerHTML = increment(secondOnes.innerHTML);
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 100 === 0) {
      msHundreds.innerHTML = increment(msHundreds.innerHTML);
      msTens.innerHTML = "0";
    } else {
      msTens.innerHTML = increment(msTens.innerHTML);
    }
  }
}
