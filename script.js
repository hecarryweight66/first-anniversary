const
start=document.getElementById("startBtn");
start.onclick=function(){
    window.location.href="pages/intro.html";
}
function createHeart(){
    const
    heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(3+Math.random()*5)+"s";
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
},7000);
}
setInterval(createHeart,300);
