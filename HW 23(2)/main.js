function viewDiv(){
    document.getElementById("game_clicker").style.display = "block";
    document.getElementById("start_btn").style.display = "none";
  };

  let click = 0;
  let outOfTime = false;
  function clicker() {
    if (!outOfTime) {
        click++;
        document.getElementById("score").innerHTML = click;
    }
    
  }
  let time = 30;
  let timer = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = time + "s";
    if (time == 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's up!";
        outOfTime = true;
    }
    
  },1000);
  function hideDiv() {
    if (time == 0) {
        document.getElementById("game_clicker").style.display = "none";
        document.getElementById("start_btn").style.display = "block";
    }
    
  }