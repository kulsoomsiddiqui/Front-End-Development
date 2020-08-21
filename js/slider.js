
function toggleClass(){
    let menu = document.querySelector("#navbar");
    menu.classList.toggle("toggleCls")
}



let slideIndex = 0;

const showSlides = () => {
  const slide = document.getElementsByClassName("myslide");
    for(let i=0;i<slide.length;i++){
        slide[i].style.display = "none"
    }
    slideIndex++;
    
    if(slideIndex > slide.length){
        slideIndex =1;
    }
    slide[slideIndex-1].style.display="block";

    setTimeout(showSlides, 3000);
};
showSlides();
