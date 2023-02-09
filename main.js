let colorSelector = document.getElementsByClassName("color-selector")
let mainImg = document.getElementById("main-img")
colorSelector[0].onclick = function(){
    mainImg.src = colorSelector[0].src  
    colorSelector[0].classList.add("active")
    colorSelector[1].classList.remove("active")
}
colorSelector[1].onclick = function(){
    mainImg.src = colorSelector[1].src  
    colorSelector[1].classList.add("active")
    colorSelector[0].classList.remove("active")
}
mainImg.onmouseover = function(){
    if (colorSelector[1].classList.contains("active")){
        mainImg.src = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png"
    } else if (colorSelector[0].classList.contains("active")){
        mainImg.src = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/900c2ac8-8a3e-45f7-aac7-c92ccce8505a/air-force-1-07-shoes-WrLlWX.png"
    }
}
mainImg.onmouseout = function(){
    if (colorSelector[1].classList.contains("active")){
        mainImg.src = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"
    } else if (colorSelector[0].classList.contains("active")){
        mainImg.src = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-shoes-WrLlWX.png"
    }
}

