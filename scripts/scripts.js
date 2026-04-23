// function getPics() {} //just for this demo
// const imgs = document.querySelectorAll(".article-imgs .img-card");
// const fullPage = document.querySelector("#fullpage");

// imgs.forEach((img) => {
//   img.addEventListener("click", function () {
//     fullPage.style.backgroundImage = "url(" + img.src + ")";
//     fullPage.style.display = "block";
//   });
// });

const modal = document.querySelector(".modalWindow");
const image = document.querySelector("#card1");
const image0 = document.querySelector("#card2");
const image1 = document.querySelector("#card3");
const imageID = document.querySelector("#imageID");
// const main = document.querySelector(".article-wrap");
image.addEventListener("click", function (e) {
  const trigger = e.target.closest(".modalTrigger");
  console.log("Check upon it");
  if (!trigger) return;
  imageID.src = trigger.dataset.full || trigger.src;
  console.log("Check upon it");
  if (modal.classList.contains("modal")) {
    modal.classList.remove("modal");
    // main.classList.remove("blur");
  } else modal.classList.add("modal");
  // main.classList.add("blur");
  console.log("It is");
});
if (!image0) {
  console.log("no image 2");
} else {
  image0.addEventListener("click", function (e) {
    const trigger = e.target.closest(".modalTrigger");
    console.log("Check upon it");
    if (!trigger) return;
    imageID.src = trigger.dataset.full || trigger.src;
    console.log("Check upon it");
    if (modal.classList.contains("modal")) {
      modal.classList.remove("modal");
      // main.classList.remove("blur");
    } else modal.classList.add("modal");
    // main.classList.add("blur");
    console.log("It is");
  });
}
image1.addEventListener("click", () => {
  if (modal.classList.contains("modal")) {
    modal.classList.remove("modal");
    // main.classList.remove("blur");
  }
});

// image2.addEventListener("click", function () {
//   if (modal0.classList.contains("modal")) {
//     modal0.classList.remove("modal");
//   }
// });
// modal.addEventListener("click");
// function modalDef() {
//   if (image.classList.contains("modal")) {
//     image.classList.remove("modal");
//     console.log("It not");
//   }
// }
// image.addEventListener("click", modalDef());
