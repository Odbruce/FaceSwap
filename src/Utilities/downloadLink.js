import React from 'react'

const downloadLink = (canvas) => {
  let link = document.createElement("a");
    link.addEventListener("click",function(e){
        link.href = canvas.toDataURL();
        link.download = "memed";
    },false);
    return link.click();
}

export default downloadLink