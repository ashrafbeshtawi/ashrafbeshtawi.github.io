const portfolio_items=document.querySelectorAll(".portfolio-item-wrapper");


portfolio_items.forEach(element => {
    element.setAttribute("style","cursor: pointer;");
    element.addEventListener("click",()=>{
        window.location.href=element.getAttribute("href");
    })
    
});