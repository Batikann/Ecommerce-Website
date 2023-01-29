let gallery = document.querySelectorAll(".small-img");
let previewBox = document.querySelector(".preview-box");
let closeBtn = document.getElementById("closeIcon");
let previewImg = document.getElementById("previewBox-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let shadow=document.querySelector(".shadow");


window.onload = () => {
  console.log(mainImg.src);
  for (let i = 0; i < gallery.length; i++) {
    let newIndex = i;
    let clickImgIndex;
    mainImg.onclick = () => {
      clickImgIndex = newIndex;
      function preview() {
        let selectedImgUrl = gallery[newIndex].src;
        previewImg.src = selectedImgUrl;
      }
      preview();
      if (newIndex <= 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length-1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--;

        if (newIndex == 0) {
          prevBtn.style.display = "none";
          preview();
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };

      nextBtn.onclick = () => {
        newIndex++;

        if (newIndex >= gallery.length-1) {
          nextBtn.style.display = "none";
          preview();
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };
      previewBox.classList.add("show");
      shadow.style.display="block"
      document.querySelector("body").style.overflow="hidden";
    };
    closeBtn.onclick = () => {
      newIndex = clickImgIndex;
      nextBtn.style.display = "block";
      prevBtn.style.display = "block";
      previewBox.classList.remove("show");
      shadow.style.display="none";
      document.querySelector("body").style.overflow="auto";
    };
  }
};
