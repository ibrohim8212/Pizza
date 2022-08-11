function getSelectValue() {
  let elBread = document.querySelector(".bread-size").value;
  let elTextBread = document.querySelector(".text-bread");

  elTextBread.textContent = elBread;
}

function onclick(e){
  let diameter = document.querySelector(".diameter");
  let size = e.target.value

  diameter.textContent = "Kattaligi:" + size;
}
for (let i = 0; i < formDiameter.size.length; i++) {
  formDiameter.size[i].addEventListener("click", onclick);
}

function myFunction() {
  let elcheckBox = document.querySelector(".tomato");
  let eltext = document.querySelector(".text");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function mySecondFunction() {
  let elcheckBox = document.querySelector(".meat");
  let eltext = document.querySelector(".text-meat");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function myThirdFunction() {
  let elcheckBox = document.querySelector(".gress");
  let eltext = document.querySelector(".text-gress");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function myFourFunction() {
  let elcheckBox = document.querySelector(".cucumber");
  let eltext = document.querySelector(".text-cucumber");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function myFiveFunction() {
  let elcheckBox = document.querySelector(".mushrums");
  let eltext = document.querySelector(".text-mushrums");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function mySixFunction() {
  let elcheckBox = document.querySelector(".qazi");
  let eltext = document.querySelector(".text-qazi");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function mySevenFunction() {
  let elcheckBox = document.querySelector(".spicy");
  let eltext = document.querySelector(".text-spicy");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}

function myEightFunction() {
  let elcheckBox = document.querySelector(".sosiges");
  let eltext = document.querySelector(".text-sosiges");
  if (elcheckBox.checked == true){
    eltext.style.display = "block";
  } else {
    eltext.style.display = "none";
  }
}