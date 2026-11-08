// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

// write your code here
let timer=6;

function timerFun(){
    if(timer==0){
        console.log("Time's up!")
        return
    }
    timer--;
    setTimeout(() => {
      console.log(timer.toString())
      timerFun()  
    }, 1000);
}
timerFun()
