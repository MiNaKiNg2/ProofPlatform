// دالة لتبديل ظهور قائمة السايد منيو عند الضغط على زرار 3 شرط
function toggleSideMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('show');
}

// إغلاق السايد منيو عند الضغط خارجها
document.addEventListener('click', function (e) {
    const menu = document.getElementById('sideMenu');
    const btn = document.getElementById('menuBtn');
    if (menu && menu.classList.contains('show') && !menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove('show');
    }
});

// ربط زرار 3 شرط بدالة التبديل
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
    menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleSideMenu();
    });
}

// زرار المود (تغيير ألوان الخلفية والنص)
const modeSwitch = document.getElementById('modeSwitch');
let dark = false;
if (modeSwitch) {
    modeSwitch.addEventListener('click', function () {
        dark = !dark;
        if (dark) {
            document.body.style.background = "#00010D";
            document.querySelector('.navbar-ein').style.background = "#2D0140";
            document.querySelector('.main-footer').style.background = "#2D0140";
        } else {
            document.body.style.background = "#FAF7FF";
            document.querySelector('.navbar-ein').style.background = "#F3EAFA";
            document.querySelector('.main-footer').style.background = "#2D0140";
        }
    });
}

// انيميشن ظهور الرموز الرياضية عند الاسكرول
function showMathSymbolsOnScroll() {
    const symbols = document.querySelectorAll('.math-symbol');
    const trigger = window.innerHeight * 0.85;
    symbols.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) {
            setTimeout(() => el.classList.add('show'), 90 * i);
        }
    });
}
window.addEventListener('scroll', showMathSymbolsOnScroll);
window.addEventListener('DOMContentLoaded', showMathSymbolsOnScroll);
function goToHome() {
    window.location.href = "home.html";
}

function goToRegister() {
    window.location.href = "register.html";
}

function goToLogin() {
    window.location.href = "login.html";
}
