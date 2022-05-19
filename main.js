let next = document.getElementById("next");
let pre = document.getElementById("pre");
let myNumber = document.querySelectorAll(".myNumber");

let parentNumber = document.querySelector(".navCenter");

let arrImg = [
  `<img  src="img/1.png" class="img-slider zind dynamik" alt=""/>`,
  `<img  src="img/2.png" class="img-slider dynamik" alt="" />`,
  `<img  src="img/3.png" class="img-slider dynamik" alt="" />`,
  `<img  src="img/4.png" class="img-slider dynamik" alt="" />`,
  `<img  src="img/5.png" class="img-slider dynamik" alt="" />`,
];

let i = 0;
sliderContiner.innerHTML += arrImg[i];
sliderContiner.innerHTML += `
<p style="z-index: 10" class="active-num ">slide # ${i + 1} of ${
  arrImg.length
}</p>`;

pre.setAttribute("disabled", "");

next.addEventListener("click", (eo) => {
  i++;
  pre.removeAttribute("disabled");
  if (arrImg.length == i + 1) {
    next.setAttribute("disabled", "");
  } else {
    next.removeAttribute("disabled");
  }
  sliderContiner.innerHTML += arrImg[i];
  sliderContiner.innerHTML += `
  <p style="z-index: 10" class="active-num ">slide # ${i + 1} of ${
    arrImg.length
  }</p>`;
  parentNumber
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentNumber.getElementsByTagName("button")[i].classList.add("active-num");
});

pre.addEventListener("click", (eo) => {
  i--;
  if (arrImg.length - arrImg.length) {
    pre.setAttribute("disabled", "");
    next.removeAttribute("disabled");
  } else if (i == 0) {
    pre.setAttribute("disabled", "");

    next.removeAttribute("disabled");
  } else {
    next.removeAttribute("disabled");
  }
  sliderContiner.innerHTML += arrImg[i];
  sliderContiner.innerHTML += `
    <p style="z-index: 10" class="active-num ">slide # ${i + 1} of ${
    arrImg.length
  }</p>`;
  parentNumber
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentNumber.getElementsByTagName("button")[i].classList.add("active-num");
});







// change class active 

myNumber.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    i = index;
    sliderContiner.innerHTML += arrImg[index];

    sliderContiner.innerHTML += `
    <p style="z-index: 10" class="active-num dynamik">slide # ${index + 1} of ${
      arrImg.length
    }</p>`;

    if (index < 1) {

      pre.setAttribute("disabled", "");

    }else{
      
      pre.removeAttribute("disabled");
    }

    if (index == arrImg.length - 1) {
      next.setAttribute("disabled", "");
    } else {
      next.removeAttribute("disabled");
    }
    parentNumber
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    item.classList.add("active-num");
  });
});
