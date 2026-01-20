//ARRAYS
const Myarr=[2,4,6,8];
console.log(Myarr[2]);

///ARRAY METHODS----->>>>>
Myarr.push(10);
console.log(Myarr);

//SLICE,SPLICE
console.log("A", Myarr);
const narr=Myarr.slice(1,2);
console.log(narr);///////OUTPUT GIVES AT [4]

console.log("B",Myarr);
const marr=Myarr.splice(1,2);
console.log(marr);//OUTPUT GIVES AS [4,6]

//SLICE :Does NOT change the original array
/*SPLICE:CHANGES the original array,
Removes elements starting from start*/



