function createCharacters(){
    let characters = [
        {name: 'a',level: 1, health: 100},
        {name: 'b',level: 5, health: 500},
        {name: 'c',level: 10, health: 1000},
    ]
    let charactersPowerUp = characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));
    console.log("Sau khi Power Up:");
    console.log(charactersPowerUp);
    const possibleWinners= charactersPowerUp.filter(character => character.health > 1000);
    console.log("Possible Winners:")
    console.log(possibleWinners);
}


let characters = [
        {name: 'a', score: 100},
        {name: 'b', score: 500},
        {name: 'c', score: 1000},
        {name: 'd', score: 2500},
        {name: 'e', score: 30},
    ]
function printLeaderboard(players){
        players.sort((a,b) => b.score - a.score);
        console.log(`🥇 ${players[0].name} - ${players[0].score}`);
        console.log(`🥈 ${players[1].name} - ${players[1].score}`);
        console.log(`🥉 ${players[2].name} - ${players[2].score}`);
}

printLeaderboard(characters);