var w1 = new Date("2019-08-22 12:30:30");
var w2 = new Date("2019-09-22 12:30:31");
console.log((w2 - w1) / (1000 * 60 * 60 * 24)); // ได้ 31

//23-07-2022 16:30:00
//let end_date = msg._conversation.context.data.pol_end_date

let newDate = new Date().toISOString().slice(0,10); 
let year = new Date().toISOString().slice(0,4);
let from = year + "/04/01";
let to = year + "/10/31";
let date_check = new Date(newDate).toISOString();
let date_from = new Date(from).toISOString();
let date_to   = new Date(to).toISOString();

console.log(date_to);