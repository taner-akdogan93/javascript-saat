
let person = window.prompt("Lütfen isminizi giriniz: ");
if (person != null){
    document.querySelector("#myName").innerHTML = person;
}

function showTime(){
    const today = new Date();
    let weekdays = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let saat = today.getHours();
    let dk = today.getMinutes();
    let sny = today.getSeconds();
    let gun = weekdays[today.getDay()];

    dk = checkTime(dk);
    sny = checkTime(sny);
    document.querySelector("#myClock").innerHTML = saat + ":" + dk + ":" + sny + ":" + " " + gun;
    setTimeout(showTime,1000);
}

function checkTime(i){
    if(i<10) {i="0" + i};
    return i;
}
showTime()