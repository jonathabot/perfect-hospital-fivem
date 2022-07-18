"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function timer() {
  
}

cron = setInterval(() => { timer(); }, 10);

function returnData(input) {
  return input > 10 ? input : `0${input}`
}