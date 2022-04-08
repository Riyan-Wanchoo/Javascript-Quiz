let arrayques = [
   {
      "ques": "1. What does HTML stand for?",
      "op1": "Hyper Text Markup Language",
      "op2": "Hyper Text Preprocessor",
      "op3": "Hyper Text Multiple Language",
      "op4": "Hyper Tool Multi Language"
   },
   {
      "ques": "2. What does CSS stand for?",
      "op1": "Casual Styling Sheet",
      "op2": "Cascading Steal Sheet",
      "op3": "Cascading Style Sheet",
      "op4": "Callblock Style Sheet"
   },
   {
      "ques": "3. What does PHP stand for?",
      "op1": "Pre-Html Processor",
      "op2": "Html Preprocessor",
      "op3": "Hypertext Preprocessor",
      "op4": "Para-Html Preprocessor"
   },
   {
      "ques": "4. What does SQL stand for?",
      "op1": "Sequaled Query Lib",
      "op2": "Structured Query Library",
      "op3": "Structured Query Language",
      "op4": "Sequal Query Language"
   },
   {
      "ques": "5. What is Kotlin Language used for?",
      "op1": "Web development(frontend)",
      "op2": "Web development(Backend)",
      "op3": "IOS App Development",
      "op4": "Android App Development"
   },
]

var currentQues = 1
var currentScore = 0
var timer

function start() {
   document.getElementsByClassName('start_btn')[0].style.display = "none"
   document.getElementsByClassName('rules')[0].style.display = "block"
}

function exitQ_click() {
   document.getElementsByClassName('start_btn')[0].style.display = "block"
   document.getElementsByClassName('rules')[0].style.display = "none"
}

function continue_click() {
   var timeinit = 16
   document.getElementsByClassName('rules')[0].style.display = "none"
   document.getElementsByClassName('quiz_area')[0].style.display = "block"

   timer = setInterval(() => {
      timeinit = timeinit - 1
      document.getElementsByClassName('secs_left')[0].innerHTML = timeinit

      if (timeinit == 0) {
         clearInterval(timer)
         document.getElementsByClassName('hider')[0].style.display = "block"
         document.getElementsByClassName('tick')[0].style.display = "block"
         document.getElementsByClassName('option')[0].style.backgroundColor = "#62ff40"
      }
   }, 1000);
}

function option_click(index) {
   document.getElementById('next').style.display = 'block'
   if (currentQues == 1 && index == 1) {
      document.getElementsByClassName('tick')[0].style.display = "block"
      document.getElementsByClassName('option')[0].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore + 1
   }
   else if (currentQues == 1 && index != 1) {
      document.getElementsByClassName('tick')[0].style.display = "block"
      document.getElementsByClassName('cross')[index - 1].style.display = "block"
      document.getElementsByClassName('option')[0].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore
   }
   else if (currentQues == 2 && index == 3) {
      document.getElementsByClassName('tick')[2].style.display = "block"
      document.getElementsByClassName('option')[2].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore + 1
   }
   else if (currentQues == 2 && index != 3) {
      document.getElementsByClassName('tick')[2].style.display = "block"
      document.getElementsByClassName('cross')[index - 1].style.display = "block"
      document.getElementsByClassName('option')[2].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore
   }
   else if (currentQues == 3 && index == 3) {
      document.getElementsByClassName('tick')[2].style.display = "block"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('option')[2].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore + 1
   }
   else if (currentQues == 3 && index != 3) {
      document.getElementsByClassName('tick')[2].style.display = "block"
      document.getElementsByClassName('cross')[index - 1].style.display = "block"
      document.getElementsByClassName('option')[2].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore
   }
   else if (currentQues == 4 && index == 2) {
      document.getElementsByClassName('tick')[1].style.display = "block"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('option')[1].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore + 1
   }
   else if (currentQues == 4 && index != 2) {
      document.getElementsByClassName('tick')[1].style.display = "block"
      document.getElementsByClassName('cross')[index - 1].style.display = "block"
      document.getElementsByClassName('option')[1].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore
   }
   else if (currentQues == 5 && index == 4) {
      document.getElementsByClassName('tick')[3].style.display = "block"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('option')[3].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore + 1
   }
   else if (currentQues == 5 && index != 4) {
      document.getElementsByClassName('tick')[3].style.display = "block"
      document.getElementsByClassName('cross')[index - 1].style.display = "block"
      document.getElementsByClassName('option')[3].style.backgroundColor = "#62ff40"
      document.getElementsByClassName('option')[index - 1].style.backgroundColor = "rgb(243 135 135)"
      document.getElementsByClassName('hider')[0].style.display = "block"
      clearInterval(timer)
      document.getElementsByClassName('secs_left')[0].innerHTML = 15
      document.getElementsByClassName('visual_time')[0].classList.remove("animation")
      currentScore = currentScore
   }
}
function Next() {
   if (currentQues == 5) {
      document.getElementsByClassName('quiz_area')[0].style.display = "none"
      document.getElementById('congrats').style.display = "flex"
      document.getElementById('result').innerText = "You got " + currentScore + " out of 5 correct"
   }
   else {
      document.getElementById('next').style.display = 'none'
      currentQues = currentQues + 1
      document.getElementsByClassName('question')[0].innerHTML = arrayques[currentQues - 1].ques
      document.getElementsByClassName('option')[0].innerHTML = arrayques[currentQues - 1].op1 + `<div class="tick" id="1">&#10003</div><div class="cross">&#10060;</div></div>`
      document.getElementsByClassName('option')[1].innerHTML = arrayques[currentQues - 1].op2 + `<div class="tick" id="2">&#10003</div><div class="cross">&#10060;</div></div>`
      document.getElementsByClassName('option')[2].innerHTML = arrayques[currentQues - 1].op3 + `<div class="tick" id="3">&#10003</div><div class="cross">&#10060;</div></div>`
      document.getElementsByClassName('option')[3].innerHTML = arrayques[currentQues - 1].op4 + `<div class="tick" id="4">&#10003</div><div class="cross">&#10060;</div></div>`

      document.getElementById('one').style.backgroundColor = "aliceblue"
      document.getElementById('two').style.backgroundColor = "aliceblue"
      document.getElementById('three').style.backgroundColor = "aliceblue"
      document.getElementById('four').style.backgroundColor = "aliceblue"
      document.getElementsByClassName('hider')[0].style.display = "none"
      document.getElementsByClassName('visual_time')[0].classList.add("animation")

      let timeinit = 15
      timer = setInterval(() => {
         timeinit = timeinit - 1
         document.getElementsByClassName('secs_left')[0].innerHTML = timeinit

         if (timeinit == 0) {
            clearInterval(timer)
            document.getElementsByClassName('hider')[0].style.display = "block"
            document.getElementsByClassName('tick')[0].style.display = "block"
            document.getElementsByClassName('option')[0].style.backgroundColor = "#62ff40"
         }
      }, 1000);

      document.getElementsByClassName('current_question')[0].innerHTML = currentQues + " of 5 Questions"
   }
}