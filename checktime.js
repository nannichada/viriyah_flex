var newDate = new Date();
var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
console.log(myDate)
//console.log(w1)
//console.log(w2)
let test1 = new Date("2023-03-02T16:30:00.000Z")
let test2 = new Date("2022-04-27T08:35:56.871Z")

//console.log((test1 - test2) / (1000 * 3600 * 24));

var w1 = new Date("2023-03-02 16:30:00");
var w2 = new Date("2022-04-26 10:06:40");
let date_sum = (w1 - w2) / (1000 * 3600 * 24);
console.log(date_sum);
console.log(date_sum);

let test = new Date();
console.log(test);


//Motor ก่อนวันหมดอายุมากกว่า 60 วัน || AnH ยังไม่ใกล้หมดอายุ
//Motor ก่อนวันหมดอายุภายใน 60 วัน || AnH ก่อนวันหมดอายุภายใน 30 วัน
//Motor เลยวันหมดอายุแล้ว แต่ ไม่เกิน 180 วัน || AnH หลังวันหมดอายุ 30 วัน
//Motor หมดอายุเกินกำหนด 180 วัน || AnH เลยวันหมดอายุมากกว่า 30 วัน

if (date_sum > 60) {
    console.log("flex1");
} else if (date_sum <= 60 && date_sum >= 0) {
    console.log("flex2");
} else if (date_sum < 0 && date_sum >= -180) {
    console.log("flex3");
} else if (date_sum < -180) {
    console.log("flex4");
}

