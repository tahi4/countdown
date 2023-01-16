const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10 , 22, 23, 0)
// let futureDate = new Date(2022, 5, 25,11, 30, 0)
console.log(futureDate)


const year = futureDate.getFullYear()
const date = futureDate.getDate()
const month = months[futureDate.getMonth()]
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const day = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes} `

const futureTime = futureDate.getTime()

function getRemainingTime(){
 const today = new Date().getTime()
 //presents total time in miliseconds

 let t = futureTime - today

 let oneDay = 24*60*60*1000
 let oneHour = 60*60*1000
 let oneMinute = 60*1000

let days = Math.floor(t/oneDay)
const hours = Math.floor((t % oneDay )/ oneHour) // % represents the remaining from the last division
const minutes = Math.floor((t % oneHour)/ oneMinute)
const seconds = Math.floor((t%oneMinute)/ 1000)

const values = [days, hours, minutes, seconds]
function format(item){
    if(item < 10){
         return item.innerHTML = `0${item}`
    } else{
        return item
    }
}
 items.forEach(function(item, index){
    item.innerHTML = format(values[index]) //orderly go throughs all them and sets individual date and tme

 }) 



 let countdown = setInterval(getRemainingTime, 1000) //for some reason includinvg the () in function dont work here
// 1000 means 1000ms which is 1 sec, so the timr refreshes every sec
 if (t < 0){
    clearInterval(countdown)
    // after date has passed, countdown will stop
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;

}

}

getRemainingTime()




