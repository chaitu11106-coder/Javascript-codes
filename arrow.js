//this and arrow function

const user={
    username:"shri",
    price:99999999,

    welcomemsg:function(){
        console.log((`${this.username},welcomes you`));
        
    }
}//HERE THIS KEYWORD TAKES INPUT FROM WHOLE SCOPE

user.welcomemsg()

function chai(){
    console.log(this);
    
}
chai()
//////++++++++++++++++++++THIS FUNCTION ENDS HERE
//ARROW FUNCTION
//SYNTAX:
() => {}
