const btn=document.querySelector(".btn");
btn.addEventListener("click",getImg);



async function getImg(){
    const img_show=document.querySelector(".img_show");
    img_show.innerHTML=``;
    const data=await fetch("https://foodish-api.herokuapp.com/api/");
    const img=await data.json();
    const imgEl=img.image;

    const imgShow=document.createElement("img");
    imgShow.setAttribute("src",`${imgEl}`)
    imgShow.classList.add("show");
    img_show.append(imgShow);
}
getImg();