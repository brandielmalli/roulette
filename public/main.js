var house=0,
    player=0;
document.getElementById("black").onclick=playerBetsBlack;
function playerBetsBlack(){
    var color = getRandomColor();
    checkWhoWon(color,"black");
}

document.getElementById("red").onclick=playerBetsRed;
function playerBetsRed(){
    var color = getRandomColor();
    checkWhoWon(color,"red");
}
document.getElementById("green").onclick=playerBetsGreen;
function playerBetsGreen(){
    var color = getRandomColor();
    checkWhoWon(color,"green");
}

function getRandomColor(){
    var randomNumber=Math.random();
    var choice="black";
    if(randomNumber<.5){
        choice="black";
    }
    else if(randomNumber<.9){
        choice="red";
    }
    else {
        choice="green";
    }
    return choice;
}

function checkWhoWon(choice,playerBets){
       if(choice==playerBets){
         increasePlayerMoney();
    }
    else{
        decreasePlayerMoney();
    }
}
<<<<<<< HEAD
function decreasePlayerMoney(){
  let bet = parseFloat(document.getElementById('bet').value)
    displayCompleteMessage("You Lose !");
  fetch('messages', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'bet': bet
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
}
function increasePlayerMoney(){
  let bet = parseFloat(document.getElementById('bet').value)
    displayCompleteMessage("Winner Winner !");
  fetch('messages', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'msg': msg,
      'thumbUp':thumbUp
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
=======
const playerWin = () =>{
    let bet = parseFloat(document.getElementById('bet').value)
    let user = document.getElementById('name').value
    fetch('users', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'user': user,
            'bet': bet
        })
    })
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
}
const playerLose = () =>{
    let bet = parseFloat(document.getElementById('bet').value)
    let user = document.getElementById('name').value
    fetch('users', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'user': user,
            'bet': bet
        })
    })
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
}
function decreasePlayerMoney(){
    displayCompleteMessage("You Lose !");
    var timeoutId = setTimeout(playerLose,5000)
}
function increasePlayerMoney(){
    displayCompleteMessage("You Win !");
    var timeoutId = setTimeout(playerWin,5000)
}
function displayCompleteMessage(msg){
    document.getElementById("msg").innerHTML=msg;
>>>>>>> 82a7eb86e710f7a21b45b7597e42952f12d606c1
}
