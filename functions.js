//FUNCTIONS IN JS


function saymyname(){//function declared and defined
    console.log("s")
console.log("h")
console.log("r")
console.log("i")
}

saymyname()//its the execution
//SO WHENEVER WE WRITE THE ABOVE STATEMENT OUR FUNCTION GETS EXECUTED

function loginname(loginnname){
    if(loginnname===undefined){
        console.log("pls enter a valid name");
        return 
    }
  console.log(`${loginnname}just logged in`);
    
}
console.log(loginname());
