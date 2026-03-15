const powerUp="??"
let marioStatus=''
if(powerUp==="mushroom"){
    marioStatus = "Mario becomes Super!";
}else if (powerUp==="flower"){
    marioStatus = "Mario can shoot fireballs!";
}else if (powerUp==="star"){
    marioStatus = "Mario is invincible!";
}else if (powerUp==="none"){
    marioStatus = "Mario is normal";
}else{
    marioStatus = "Unknown power-up";
}
console.log(marioStatus)