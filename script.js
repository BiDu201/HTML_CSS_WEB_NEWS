const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

//darkmode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

/*Nut back ve dau trang*/
$(document).ready(function(){
        $(window).scroll(function(){ /*khi sroll cần làm gì*/
            if ($(this).scrollTop()){ /*nếu sroll top khác 0*/
                $('#backtop').fadeIn(); /*hiện*/
            }else{
                $('#backtop').fadeOut();     /*hiện ra*/           }
            });
            $('#backtop').click(function(){ /*khi click chuột vào*/
                $('html, body').animate({
                    scrollTop: 0 /*sroll top đến vị trí 0 đầu trang*/
                }, 500); /*0.5s*/
            });
        });

/*menu*/
const menu = document.querySelector('.menu');
const toggle_menu = document.querySelector('.toggle_menu'); 
toggle_menu.onclick = function(){ /*khi click vào*/
    menu.classList.toggle('hide');
}

/*Login*/
const login = document.querySelector('.login');
const toggle_login = document.querySelector('.toggle_login'); 
toggle_login.onclick = function(){
    login.classList.toggle('show');
}

/*chuyen slide*/
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);