// toggle menu 
let menuItems=document.querySelector('#menu-item')

menuItems.style.maxHeight='0px'
function menutoggle(){
    if(menuItems.style.maxHeight=='0px'){
        menuItems.style.maxHeight='200px'
       menuItems.style.backgroundColor='#E3E6F3'
       
    }
    else{
        menuItems.style.maxHeight='0px'
    }
}




function addtocart(){
    alert("Added to cart")
    // window.location="cart.html";
    
  



}









// js for product gallery

let detailImg=document.querySelector(".detailimg")
let smallImg1=document.querySelector('.smallimg1')
let smallImg2=document.querySelector('.smallimg2')
let smallImg3=document.querySelector('.smallimg3')
let smallImg4=document.querySelector('.smallimg4')

smallImg1.onclick=function(){
    detailImg.src=smallImg1.src;
}
smallImg2.onclick=function(){
    detailImg.src=smallImg2.src;
}
smallImg3.onclick=function(){
    detailImg.src=smallImg3.src;
}
smallImg4.onclick=function(){
    detailImg.src=smallImg4.src;
}























// account js 

function f6(){
    document.querySelector('.formloginbox').style.transform='translateX(-310px)' 
    document.querySelector('.formloginbox1').style.transform='translateX(-310px)' 
   
  
}
function f5(){
    document.querySelector('.formloginbox').style.transform='translateX(0px)' 
    document.querySelector('.formloginbox1').style.transform='translateX(0px)' 
    
  
}



