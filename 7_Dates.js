//Dates
let myDate= new Date()
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());

console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(typeof myDate);

//one more way
let mycreateddate= new Date("2025-01-20");
console.log(mycreateddate);

//Timestamp

let myTimestamp=Date.now();
console.log(Math.floor(Date.now()/1000));//gives precisely in milliseconds
