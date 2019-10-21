
// Menu start

var navMenuIconlink = document.querySelectorAll('.nav-menu-icon__link');
var headerFullMenu = document.querySelector('.header-full-menu');

navMenuIconlink[1].onclick = function(){

    if(headerFullMenu.classList[2] == 'close-menu'){
        headerFullMenu.classList.remove('close-menu');
    }
    
}

navMenuIconlink[0].onclick = function(){

    if(headerFullMenu.classList[2] != 'close-menu'){
        headerFullMenu.classList.add('close-menu');
    }
    
}

// Menu end