window.onload=iniciar;

var clickedByUser = false;

function iniciar(){
  for (var i = 1; i < 6; i++) {
    document.getElementById("icon"+(i)).addEventListener("mouseover", mouseOver);
    document.getElementById("icon"+(i)).addEventListener("mouseout", mouseOut);
    document.getElementById("icon"+(i)).addEventListener("click", clickOnIcon);
  }
}

function mouseOver() {
  if(clickedByUser==false){
    paintArr(getImgList(this.id),"orange");
  } else{
    paintArr(getImgList(this.id),"green");
  }
}

function mouseOut() {
  if(clickedByUser==false){
    paintArr(getImgList(this.id),"#f7d674");
  }
}

function getPosition(nameID){
  return nameID.charAt(4);
}

function getImgList(currentPos){
  var imgArr = []
    for (var i = 0; i < getPosition(currentPos); i++) {
      imgArr.push("icon"+(i+1));
    }
  return imgArr;
}

function paintArr(aImages, cColor){
  for (var i = 0; i < aImages.length; i++) {
    document.getElementById(aImages[i]).style.fill = cColor;
  }
}

function clickOnIcon(){
  clearIcons()
  paintArr(getImgList(this.id),"green");
}

function clearIcons(){
  paintArr(getImgList("icon5"),"#f7d674");
}

document.addEventListener("click", (evt) => {
  const flyoutElement1 = document.getElementById("icon1");
  const flyoutElement2 = document.getElementById("icon2");
  const flyoutElement3 = document.getElementById("icon3");
  const flyoutElement4 = document.getElementById("icon4");
  const flyoutElement5 = document.getElementById("icon5");
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == flyoutElement1 || targetElement == flyoutElement2 || targetElement == flyoutElement3 || targetElement == flyoutElement4 || targetElement == flyoutElement5) {
      clickedByUser = true;
      return;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);
  clickedByUser = false;
  clearIcons();
});
