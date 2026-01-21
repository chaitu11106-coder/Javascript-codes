//
let a=200;
if(true){
    let a =2;
    let c=7;
}
console.log(a)
/////SO HERE A PRINTS AS 200 
//IT DOESN'T TAKE A VALUE AS 2 BECAUSE IT IS DECLARED INSIDE SCOPE

function one(){
    const username="shri"

    function two(){
        const website="youtube";
        const teacher="chaiaur code";
    }
    console.log(website)
    two()

}
one()
// ++++++++++++++++++++++++++++++++++++++++

