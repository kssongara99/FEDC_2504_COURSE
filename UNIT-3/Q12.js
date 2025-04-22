const greetuser = function () {
    const name = prompt("Please enter your name:");
    if(name){
        alert(`Hwllo, ${name}!`);
    }else{
        alert("Hello , Guest!");
    };
};
greetuser()