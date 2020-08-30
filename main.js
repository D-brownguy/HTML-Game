var start = document.getElementById("Click");
var player = document.getElementById("player")
var obs = document.getElementById("obstacle")

function Start(){
  start.classList.remove("click");
  start.classList.add("hidden");
  player.classList.add("player");
  obs.classList.add("obstacle");
  setTimeout(function obsnim(){
    obs.classList.add("obsanim");
  },1000);

}

function Jump(){

  player.classList.add("playeranim");
  setTimeout(function rest(){
    player.classList.remove("playeranim");
  }, 1000);

}

var check = setInterval(function checkcollision()
    {

      var playerposition = parseInt((window.getComputedStyle(player).getPropertyValue("top")));
      var obstacleposition = parseInt((window.getComputedStyle(obs).getPropertyValue("left")));
        if(obstacleposition<585 && obstacleposition > 385 && playerposition >270 && playerposition<350)
          {
            obs.style.animation = "none";
            alert("You Lost");
          }
    },10  );
