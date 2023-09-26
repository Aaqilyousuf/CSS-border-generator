document.addEventListener("DOMContentLoaded",()=>{

    const allborder=document.getElementById("all");
    const all_value=document.getElementById("all_value");
    const code=document.getElementById("code");
    const container=document.querySelector(".container");
    const button=document.getElementById("Btncpy");
    const border_styleElement=document.getElementById("Border_style");
    const border=document.getElementById("Border");
    const border_value=document.getElementById("Border_value");
    var all_radius=10;
    var border_style="solid";
    var border_px=3;
    var coding="text";
    function allBorderupdate(){
        all_radius = allborder.value;
        all_value.innerText=all_radius+"px";
        coding=`
        border-radius: ${all_radius}px;
        border: ${border_px}px ${border_style} red;
        ` 
        code.value=coding;
        container.style.cssText=coding;
        border_px=border.value;
        border_px=border.value;
        border_value.innerText=border_px+"px";
  }
    allborder.addEventListener("mousemove",allBorderupdate);
    allborder.addEventListener("change",allBorderupdate);
    button.addEventListener('click',()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied")
    });
    allBorderupdate();
    border_styleElement.addEventListener('change',function(){
        border_style=this.value;
        allBorderupdate();        
    })
    border.addEventListener("mousemove",allBorderupdate);
    border.addEventListener("change",allBorderupdate);
})
