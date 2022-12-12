import React from 'react'

const drawEmojis = (ctx,style) => {
    console.log(style.length);
    for(let i = 0; i < style.length;i++){
        const image = new Image();
    const {backgroundImage:url,top:y,left:x,width,height} = style[i];
    const src = url.slice(4,url.length-1);
    image.src = src;
    image.setAttribute("crossOrigin","Anonymous");
        image.onload = function (){
            ctx.drawImage(image,(x.slice(0,x.length-1)/100)*400,(y.slice(0,y.length-1)/100)*300,width,height);
        }
        // console.log((x.slice(0,x.length-1)/100)*400,(y.slice(0,y.length-1)/100)*300);
        console.log(image.crossOrigin);
    }
    return;
}

export default drawEmojis