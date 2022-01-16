

function zoom() {
  const butn = document.getElementById("submit") ;
  butn.style.backgroundColor = "black";
  butn.style.transform = "scale(50)";
  butn.textContent = "";
  
}

function save() {
  window.localStorage.setItem("team1", document.getElementById("team1").value);
  window.localStorage.setItem("team2", document.getElementById("team2").value);
  window.localStorage.setItem(
    "nscore",
    document.getElementById("nscore").value
  );
}

setInterval(function(){
  const title = document.getElementById("submit");
  if(title.style.transform == "scale(50)"){
    window.location.href = "main.html";
  }
},2000)