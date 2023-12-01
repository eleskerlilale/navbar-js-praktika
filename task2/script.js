const nav=document.querySelector("nav")
window.addEventListener("scroll", () => {
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        nav.style.backgroundColor="black"
    }else{
        nav.style.backgroundColor="rgb(0,0,0, 0.5)"
    }
})

const menuBtn=document.querySelector(".menu");
const   menuList=document.createElement("div");

menuList.classList.add("menu-list");
menuList.innerHTML=`
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Blog</p>
                    `
nav.append(menuList)
menuList.classList.add("active")

menuBtn.addEventListener("click" , () => {
    
    if(menuList.classList.value=="menu-list active"){
        menuList.style.top="-82px"
        menuList.style.transform="translateY(100%)"
        menuList.classList.remove("active")
    }
    else{
        menuList.style.top="-200px"
        menuList.style.transform="translateY(0%)"
        menuList.classList.add("active")

    }
})
