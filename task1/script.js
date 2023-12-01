const menuBtn=document.querySelector(".menu")
const menuList=document.createElement("div")
    menuList.classList.add("menu-list")
    menuList.innerHTML=`<div class="close" ><i class="bi bi-x-lg"></i></div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Travel</p>`
document.body.append(menuList)

menuBtn.addEventListener("click", () => {
    menuList.style.transform="translateX(0%)";
    menuList.style.opacity="1";
    const closeBtn=document.querySelector(".close");  
    closeBtn.addEventListener("click", () => {
        // menuList.style.left="100%"
        menuList.style.transform="translateX(100%)";
    })
})