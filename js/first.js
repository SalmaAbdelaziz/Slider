var imgs =Array.from(document.getElementsByClassName("img-item"));
var lightBoxContainer =document.querySelector(".lightbox-container");
var close=document.getElementById("close");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var currentImageIndex=0;


for(var i=0;i<imgs.length ;i++)
{
    imgs[i].addEventListener("click" ,showLightBox)
}

function showLightBox(e)
{
    //lightBoxContainer.style.display="flex";

    lightBoxContainer.style.transform = "scale(1,1)";
    var imgSrc=e.target.src;
    currentImageIndex=imgs.indexOf(e.target);
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";
}
close.addEventListener("click" ,hideLightBox)

function hideLightBox()
{
    lightBoxContainer.style.transform="scale(0,0)";
}
next.addEventListener("click" ,goNext);
function goNext()
{
    currentImageIndex++;
    if(currentImageIndex ==imgs.length)
    {
        currentImageIndex = 0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+imgs[currentImageIndex].src+")"
}

prev.addEventListener("click" ,goPrev);
function goPrev()
{
    currentImageIndex--;
    if(currentImageIndex <0)
    {
        currentImageIndex = imgs.length-1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+imgs[currentImageIndex].src+")"
}

// with keyboard

document.addEventListener("keydown" ,function(e){

    if(e.keyCode == 39)
    {
        goNext();
    }
    else if(e.keyCode == 37)
    {
        goPrev();
    }
    else if(e.keyCode == 27)
    {
        hideLightBox();
    }
})