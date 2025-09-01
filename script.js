let fontSize=document.getElementById("fontsize");
let fontColor=document.getElementById("fontcolor");
let saveButton=document.getElementById("save");


function isCookie(name){
    let cookies=document.cookie;
    let cookieArray=cookies.split("; ");
    for(let i=0;i<cookieArray.length;i++){
        let [key,value]=cookieArray[i].split("=");
        if(key===name){
            return value;
        }
    }
    return null;
}

if(isCookie("fontsize")){
    let fontValue=isCookie("fontsize")
    // let text=document.getElementsByTagName("p");
    // for(let i=0;i<text.length;i++){
    //     text[i].style.fontSize=`${fontValue}`
    // }
   document.body.style.fontSize=`${fontValue}`
}
if(isCookie("fontcolor")){
    let fontColorValue=isCookie("fontcolor");
    // console.log(fontColorValue)
    // let text=document.getElementsByTagName("p");
    // for(let i=0;i<text.length;i++){
    //     text[i].style.color=`${fontColorValue}`
    // }
   document.body.style.color=`${fontColorValue}`

}


function setFontSizeColor(event){
    event.preventDefault()
    console.log(fontSize.value)
    console.log(fontColor.value)
    let fontSizeValue=fontSize.value+"px";
    let fontColorValue=fontColor.value;
    document.cookie=`fontsize=${fontSizeValue}`
    document.cookie=`fontcolor=${fontColorValue}`
}

saveButton.addEventListener("click",setFontSizeColor)