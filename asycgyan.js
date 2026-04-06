console.log('Hello');
//executes immideately
setTimeout(function(){
    console.log('I am from settimeout');
},4000);
//executes after 4 seconds as it is asynchoronus but will not block next code

console.log('Hello baby');