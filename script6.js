 var random = Math.floor(Math.random()*100);
 var userinput = prompt("mujhe ekk number do");
 var num=[];
 for(let i=0;i<10;i++) {
    if (i===random) {
        console.log("returning at",random);
        break;
    }
    else if (i==userinput){
        console.log("ignored",i);
        continue;
    }
    else {
        console.push(i);
    }
 }
 console.log(num);