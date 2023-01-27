let mainImg=document.getElementById("mainImg");
let smallImg=document.getElementsByClassName("small-img");


smallImg[0].onclick=function() {
    mainImg.src=smallImg[0].src;
    for (let i = 0; i < smallImg.length; i++) {
        if (smallImg[i].classList.contains("active-2")) {
            smallImg[i].classList.remove('active-2');
        }
        
    }
    smallImg[0].classList.add('active-2');
}
smallImg[1].onclick=function() {
    mainImg.src=smallImg[1].src;
    for (let i = 0; i < smallImg.length; i++) {
        if (smallImg[i].classList.contains("active-2")) {
            smallImg[i].classList.remove('active-2');
        }
        
    }
    smallImg[1].classList.add('active-2');
}
smallImg[2].onclick=function() {
    mainImg.src=smallImg[2].src;

    for (let i = 0; i < smallImg.length; i++) {
        if (smallImg[i].classList.contains("active-2")) {
            smallImg[i].classList.remove('active-2');
        }
        
    }
    smallImg[2].classList.add('active-2');
}
smallImg[3].onclick=function() {
    mainImg.src=smallImg[3].src;
    for (let i = 0; i < smallImg.length; i++) {
        if (smallImg[i].classList.contains("active-2")) {
            smallImg[i].classList.remove('active-2');
        }
        
    }
    smallImg[3].classList.add('active-2');
}