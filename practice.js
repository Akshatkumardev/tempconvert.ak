
document.getElementById("submit").onclick = function(){
  let temp;
  if(document.getElementById("cbutton").checked){
    temp = document.getElementById("input").value;
    temp = Number(temp)
    tmep = tocelsius(temp);
    temp = document.getElementById("templabel").innerHTML = tmep +"°c";
  }
  else if(document.getElementById("fbutton").checked){
    temp = document.getElementById("input").value;
    temp = Number(temp)
    tmep = tofahrenheit(temp);
    temp = document.getElementById("templabel").innerHTML = tmep +"°F";
  }
  else{
    document.getElementById("templabel").innerHTML = "select a unit";
  }
}


function tocelsius(temp){
  return (temp - 32)*(5/9);
}
function tofahrenheit(temp){
  return temp *9/5 + 32;
}