// دالة لتبديل ظهور الزرارين عند الضغط على زرار 3 شرط
function toggleSideMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('show');
}

// اقفل السلايدر لو ضغطت برة
document.addEventListener('click', function (e) {
    const menu = document.getElementById('sideMenu');
    const btn = document.getElementById('menuBtn');
    if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove('show');
    }
});

// ربط الزرار بالدالة
document.getElementById('menuBtn').onclick = function (e) {
    e.stopPropagation();
    toggleSideMenu();
};
function goToHome() {
    window.location.href = "home.html";
}

function toggleLoginMode() {
    const checkbox = document.getElementById("showCode");
    const normalFields = document.getElementById("normalLoginFields");
    const codeFields = document.getElementById("codeLoginFields");

    if (checkbox.checked) {
        normalFields.style.display = "none";
        codeFields.style.display = "block";
    } else {
        normalFields.style.display = "block";
        codeFields.style.display = "none";
    }
}
function handleLogin() {
    const useCode = document.getElementById("showCode").checked;

    if (useCode) {
        // ✅ تسجيل الدخول بالكود
        const codePhone = document.getElementById("codePhone").value.trim();
        const code = document.getElementById("code").value.trim();
        const confirmCode = document.getElementById("confirmCode").value.trim();

        if (codePhone === "" || code === "" || confirmCode === "") {
            alert("من فضلك املأ كل الحقول الخاصة بالكود");
            return false;
        }

        if (!/^\d{11}$/.test(codePhone)) {
            alert("رقم الهاتف يجب أن يكون مكونًا من 11 رقمًا");
            return false;
        }

        if (code !== confirmCode) {
            alert("الكود وتأكيد الكود غير متطابقين");
            return false;
        }

        // ✅ نجاح تسجيل الدخول بالكود
        alert("تم تسجيل الدخول بالكود بنجاح ✅");

        // 🟣 توجيه إلى صفحة مختلفة لتسجيل الدخول بالكود
        const redirectPage = "verify-code.html"; // ✏ غيّر دي للصفحة اللي انت عايزها
        setTimeout(() => {
            window.location.href = redirectPage;
        }, 500);

        return false;

    } else {
        // ✅ تسجيل الدخول بكلمة المرور
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();

        if (phone === "" || password === "") {
            alert("من فضلك أدخل رقم الهاتف وكلمة المرور");
            return false;
        }

        if (!/^\d{11}$/.test(phone)) {
            alert("رقم الهاتف يجب أن يحتوي على 11 رقمًا");
            return false;
        }

        // ✅ نجاح تسجيل الدخول بكلمة المرور
        alert("تم تسجيل الدخول بنجاح ✅");

        // 🟢 توجيه إلى الصفحة الأساسية بعد تسجيل الدخول العادي
        const redirectPage = "home.html"; // ✏ غيّر دي للصفحة اللي انت عايزها
        setTimeout(() => {
            window.location.href = redirectPage;
        }, 500);

        return false;
    }
}
