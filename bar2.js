var flag = 0;

function toggleSidebar(ref) {
    ref.classList.toggle('active');
    if (ref.classList.toggle('active')){
        document.getElementById("sidebar").style.width = "200px";
        document.getElementById("mainSidenav").style.marginLeft = "200px";
    }
    else{
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("mainSidenav").style.marginLeft= "0";
    }
  }

/* var flag = 0;

function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("mainSidenav").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainSidenav").style.marginLeft= "0";
}

function pressBoton(){
    if (flag === 0)
    {
        openNav();
        flag = 1;
    }else{
        closeNav();
        flag = 0;
    }
} */