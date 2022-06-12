let hamburger = document.querySelector(".header_hamburger"),
    bar = document.querySelector(".hamburger_bar:nth-child(3)"),
    modal = document.querySelector(".modal_window"),
    footer = document.querySelector(".footer_main"),
    mainContent = document.querySelector(".main_content_wrapper");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    if(hamburger.classList.contains("active")){
        addStyle();
        showModal()
        footer.style.display ="none"
        mainContent.style.display = "none"
    }else{
        hideModal()
        removeStyle()
        footer.style.display ="block"
        mainContent.style.display = "block"
    }
})

function addStyle(){
    bar.style.width = "25px";
}
function removeStyle(){
    bar.style.width = "15px"
}

function showModal(){
    modal.classList.remove("hide")
    modal.classList.add("show")
}
function hideModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}
//SLIDER

let slides = document.querySelectorAll(".main_content_slider"),
    sliderBtns = document.querySelectorAll(".main_slider_button");


function hideSlides(){
    slides.forEach(item => {
        item.classList.remove('show', 'fade');
        item.classList.add("hide")
    
    })
    sliderBtns.forEach(item => {
        item.classList.remove("active")
    })
}

function showSlides(i = 0){
    slides[i].classList.remove("hide");
    slides[i].classList.add('show', 'fade');
    sliderBtns[i].classList.add("active");
}
hideSlides();

showSlides()

sliderBtns.forEach(item => {item.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('main_slider_button')) {
        sliderBtns.forEach((item, i) => {
            if (target == item) {
                hideSlides();
                showSlides(i);
            }
        });
    }
})})