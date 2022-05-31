let totalCount = document.querySelector("#totalCount");
let storedCount = localStorage.getItem("storedCount");
let count = 0;
let pData = document.querySelector("#pData");
let storedPercent = localStorage.getItem("storedPercent");

if(storedCount){
    count = storedCount;
    totalCount.innerHTML = storedCount;
    pData.innerHTML = storedPercent;
}else {
    totalCount.innerHTML = count;
    pData.innerHTML = 0 ;
}
function add() {
   
    count++ ;
    localStorage.setItem("storedCount", count);
    localStorage.getItem("storedCount");

    totalCount.innerHTML = count;
    percent(count);

}

 function percent(number){
     let percentData = number/1000 * 100;
     let data =  percentData.toFixed(1);
     pData.innerHTML = data;
     localStorage.setItem("storedPercent", data);
 }

function reduce() {
   
    count-- ;
    localStorage.setItem("storedCount", count);
    localStorage.getItem("storedCount");

    totalCount.innerHTML = count;
    percent(count);

}

function del() {
    localStorage.clear();
    window.location.reload(true);
}

