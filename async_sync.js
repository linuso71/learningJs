function findsum(n){
    let ans = 0;
    for (let i =0 ;i<n;i++){
        ans +=i;
    }
    return ans;
}

function findsumTill100(){
    console.log(findsum(1000))
}
function syncSleep(){
    let a=0;
    for(let i =0;i<10000000000;i++){
        a++;
    }
}
findsumTill100();
syncSleep();
// setTimeout(findsumTill100,10000)
console.log("hello world")