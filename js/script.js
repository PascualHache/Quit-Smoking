window.onload=iniciar;
function iniciar(){
  document.getElementById("icon1").addEventListener("mouseover", mouseOver);
  document.getElementById("icon1").addEventListener("mouseout", mouseOut);
  document.getElementById("icon2").addEventListener("mouseover", mouseOver);
  document.getElementById("icon2").addEventListener("mouseout", mouseOut);
  document.getElementById("icon3").addEventListener("mouseover", mouseOver);
  document.getElementById("icon3").addEventListener("mouseout", mouseOut);
  document.getElementById("icon4").addEventListener("mouseover", mouseOver);
  document.getElementById("icon4").addEventListener("mouseout", mouseOut);
  document.getElementById("icon5").addEventListener("mouseover", mouseOver);
  document.getElementById("icon5").addEventListener("mouseout", mouseOut);
}

function mouseOver() {
  var currentPos = getPosition(this.id);
  console.log(currentPos);
  getImgList(currentPos,"#c00");
}

function mouseOut() {
  getImgList(getPosition(this.id),"orange");
}

function getPosition(nameID){
  return nameID.charAt(4);
}

function getImgList(currentPos, cColor){
  imgArr = []
  for (var i = 0; i < currentPos; i++) {
    imgArr.push("icon"+(i+1));
    // console.log(imgArr);
    paintArr(imgArr, cColor);
  }
}

function paintArr(aImages, cColor){
  for (var i = 0; i < aImages.length; i++) {
    document.getElementById(aImages[i]).style.fill = cColor;
  }
}
