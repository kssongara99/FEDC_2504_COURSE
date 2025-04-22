function sumNumbers(...args){
    let number = [];
    for(let i=0;i<args.length;i++){
        let num;
        while(true){
            num=parseFloat(prompt(`enter number ${i+1}:`));
            if(!isNaN(num)){
                number.push(num);
            }else{
                alert("Invalid input . Please enter a number.");
            }
        }
    }
    let sum =0;
    for(let num of number){
        sum+=num;
    }
    return sum;
}
let result = sumNumbers(1,2,3);
alert(`The sum is: ${result}`);