const money =2000;
function shop(m) {

    milk_cost =1000;
    if(m>=milk_cost){
        console.log("i can buy milk");
        m-=milk_cost;
    } else {
        console.log("i can not buy milk");
    }
    return m;
}

    console.log(shop(money));
