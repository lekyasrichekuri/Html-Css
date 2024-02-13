var sb_var=true;
function openSidebar(){
    document.getElementById("left-container").style.width="18%";
    document.getElementById("right-container").style.width="82%";
    const sb=document.querySelector(".left-container");
    sb.style.display="block";
    const icons=document.querySelector("#left-container2");
    icons.style.display="none";
    rotateImage();
}
let rotateImage=()=>{
    let handle_icon=document.querySelector('.handle');
    if (sb_var){
        handle_icon.style.rotate="180deg";
        handle_icon.style.marginLeft="-13.5%";
        handle_icon.style.marginTop="0.5%";
        document.getElementById("handle").width="30rem";
    }
    else{
        handle_icon.style.rotate="0deg";
        handle_icon.style.marginLeft="0%";
        handle_icon.style.marginTop="1.3%";
    }
}
function closeSidebar(){
    const sb=document.querySelector(".left-container");
    document.getElementById("left-container").style.width="0%";
    sb.style.display="none";
    const icons=document.querySelector("#left-container2");
    document.getElementById("left-container2").style.width="4%";
    icons.style.display="block";
    document.getElementById("right-container").style.width="96%";
    rotateImage();
}
function SideBar() {
    if (sb_var == false) {
        openSidebar()
    } else {
        closeSidebar()
    }
    sb_var = !sb_var
}