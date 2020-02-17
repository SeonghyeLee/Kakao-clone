const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

// You're gonna need this

function getTime() {

// Don't delete this.
const xmasDay = new Date("2020-12-25:00:00:00+0900");
const todayDay = new Date();
const xmasDaySec = Date.parse(xmasDay);
const todayDaySec = Date.parse(todayDay);
const leftDaySec = xmasDaySec - todayDaySec;

// day
const leftDays = Math.floor(leftDaySec/86400000);

// hour
const leftDaySecForHour = leftDaySec - (leftDays*86400000);
const leftHours = Math.floor(leftDaySecForHour/3600000);

// minute
const leftDaySecForMin = leftDaySecForHour - (leftHours*3600000)
const leftMins = Math.floor(leftDaySecForMin/60000);

// second

const leftDaySecforSec = leftDaySecForMin - (leftMins*60000);
const leftSecs = Math.floor(leftDaySecforSec/1000);


clockTitle.innerText = `Time Until Christmas
${leftDays < 10 ? `0${leftDays}` : leftDays}d ${leftHours < 10 ? `0${leftHours}` : leftHours}h ${leftMins < 10 ? `0${leftMins}` : leftMins}m ${leftSecs < 10 ? `0${leftSecs}` : leftSecs}s `
}


function init() {
    getTime()
    setInterval(getTime, 1000);
}
init();




/*

일자를 초단위로 바꿔주기

x-mas: 1608822000000
today : 

Date.now()

1000*60*60*24=86400000 1 day
1000*60*60=3600000‬ 1 hour
1000*60=60000 1 minute
1000 1 second

*/