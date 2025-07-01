document.addEventListener('DOMContentLoaded', function () {
    // تهيئة الثيم
    initTheme();

    //  مبدل الثيم
    addEventListeners();

    // تحميل البيانات
    loadDashboardData();
});

// تهيئة الثيم
function initTheme() {
    let savedTheme = localStorage.getItem('theme');
    let themeToggle = document.getElementById('input');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark');
        themeToggle.checked = false;
    }
}

// مبدل الثيم
function addEventListeners() {
    let themeToggle = document.getElementById('input');
    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });

    // جعل الرابط الي انت فيه active وتحته خط
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));

            this.classList.add('active');

        });
    });
}