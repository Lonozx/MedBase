function getPics() {} //just for this demo
const imgs = document.querySelectorAll(".article-imgs .img-card");
const fullPage = document.querySelector("#fullpage");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
  });
});
