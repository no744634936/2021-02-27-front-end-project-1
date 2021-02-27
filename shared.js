//let backdrop=document.getElementsByClassName("backdrop")[0];
let backdrop=document.querySelector(".backdrop");
let selectPlanButtons=document.querySelectorAll(".plan button");
let modal=document.querySelector(".modal");
let modalNoButton=document.querySelector(".modal__action--negative")
let toggleButton=document.querySelector(".toggle-button")
let mobileNav=document.querySelector(".mobile-nav")


for (let i = 0; i < selectPlanButtons.length; i++) {
     selectPlanButtons[i].addEventListener("click",openModal);
}

if(modalNoButton){
    modal.addEventListener("click",closeModal)
}


function openModal() {

    // modal.style.display="block";
    // backdrop.style.display="block";
    if(modal){
        modal.classList.add("open")
    }
    backdrop.classList.add("open")
}

function closeModal() {
    // modal.style.display="none";
    // backdrop.style.display="none";
    if(modal){
        modal.classList.remove("open")
    }
    
    backdrop.classList.remove("open")
}

toggleButton.addEventListener("click",function () {
    // mobileNav.style.display="block";
    // backdrop.style.display="block";
    mobileNav.classList.add("open")
    backdrop.classList.add("open")
})

backdrop.addEventListener("click",function () {
    // mobileNav.style.display="none";
    mobileNav.classList.remove("open")
    closeModal();
})