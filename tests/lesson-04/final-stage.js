let pairs=[]
let numberOfPairs=0
let compared
for(let i=1; i<=100; i++){
    for(let j=i+1; j<=100; j++){ 
        if((i+j)%17==0){
            pairs.push([i, j]);
            numberOfPairs++
        }
    }
}
for(let pair of pairs){
    console.log(pair);
}
console.log(`Tổng cộng có ${numberOfPairs} cặp chia hết cho 17`);