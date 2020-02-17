window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nabBar").className = "navbar navbar-wrapper navbar-fade navbar-faded";
    } else {
        document.getElementById("nabBar").className = "navbar navbar-wrapper navbar-fade is-transparent navbar-light";
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("backtotop").className = "visible";
    }else{
        document.getElementById("backtotop").className = "";
    }

}