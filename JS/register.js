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


document.getElementById("registerForm").addEventListener("submit", handleRegister);

function handleRegister(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const requiredFields = [
        "firstName", "secondName", "thirdName", "lastName",
        "phone", "fatherPhone", "school", "email",
        "password", "confirmPassword", "governorate",
        "gender", "grade", "section",
    ];

    for (let i = 0; i < requiredFields.length; i++) {
        const field = document.getElementById(requiredFields[i]);
        if (!field) continue;

        const value = field.value.trim();

        // في حالة select لازم نتأكد إن مش القيمة الافتراضية مثلاً ""
        if (field.tagName === "SELECT" && value === "") {
            alert("من فضلك اختر " + field.name || field.id);
            field.focus();
            return;
        }

        // تحقق عادي لباقي الحقول النصية
        if (value === "") {
            alert("من فضلك املأ كل الحقول");
            field.focus();
            return;
        }
    }

    // التحقق من رقم الهاتف ورقم الأب
    const phoneFields = ["phone", "fatherPhone"];
    for (let i = 0; i < phoneFields.length; i++) {
        const phoneValue = document.getElementById(phoneFields[i]).value.trim();
        if (!/^\d{11}$/.test(phoneValue)) {
            alert("رقم الهاتف يجب أن يكون 11 رقمًا ويتكون من أرقام فقط");
            document.getElementById(phoneFields[i]).focus();
            return;
        }
    }

    // التحقق من صحة البريد الإلكتروني
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("من فضلك أدخل بريد إلكتروني صالح");
        document.getElementById("email").focus();
        return;
    }

    // التحقق من كلمة السر
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("كلمة السر وتأكيدها غير متطابقين");
        document.getElementById("confirmPassword").focus();
        return;
    }

    // ✅ لو كله تمام
    alert("تم إنشاء الحساب بنجاح ✅");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
    const gradeSelect = document.getElementById("grade");
    const sectionSelect = document.getElementById("section");

    gradeSelect.addEventListener("change", function () {
        const grade = this.value;
        sectionSelect.innerHTML = ""; // مسح القديم

        let options = [];

        if (grade === "1") {
            options = ["عام"];
        } else if (grade === "2") {
            options = ["علمي", "أدبي"];
        } else if (grade === "3") {
            options = ["علمي رياضة", "أدبي"];
        }

        if (options.length > 0) {
            sectionSelect.disabled = false;
            sectionSelect.innerHTML = `<option value="">اختر الشعبة</option>`;
            options.forEach((opt) => {
                sectionSelect.innerHTML += `<option value="${opt}">${opt}</option>`;
            });
        } else {
            sectionSelect.disabled = true;
            sectionSelect.innerHTML = `<option value="">اختر الصف أولًا</option>`;
        }
    });
});

