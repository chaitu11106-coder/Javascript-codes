const coding=["js","c","java"];
const values=coding.forEach((item)=>{
    return item
})
console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9]
const newNums=myNums.filter((num)=>num>4)
console.log(newNums);
//DISPLAYS OUTPUT AS 5,6,7,8,9\

const myNumbers=[1,2,3,4,5,6,7,8,9];
newNumber=myNumbers.map((num)=>num+10)
console.log(newNumber);
//gives 11,12,13 till 19