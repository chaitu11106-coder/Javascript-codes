//object  literals
const Jsuser={
    name: "shri",
    age:21,
    email:"chaitu@gmail.com"

};
console.log(Jsuser.name);
console.log(Jsuser.age);
Object.freeze(Jsuser);
//THIS WILL FREEZE OBJ AND NEXT INP OF EMAIL is not considered

Jsuser.email="kshb@.coom";

