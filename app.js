// script.js

// دالة لفتح القائمة الجانبية
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

// دالة لإغلاق القائمة الجانبية
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// دالة لإظهار الإشعار المنبثق داخل الصفحة
function showNotification(message) {
    const notification = document.getElementById('busNotification');
    notification.innerHTML = `<p>${message}</p>`;
    notification.style.display = 'block';

    // إخفاء الإشعار بعد 5 ثوانٍ
    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000);
}

// دالة لتحديد الوقت الحالي ومقارنته مع مواعيد الحافلات
function checkBusTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const timeInMinutes = hours * 60 + minutes;

    // مواعيد الحافلات (7:00 - 2:30 و 7:30 - 3:00)
    const firstBusStart = 7 * 60; // 7:00 صباحًا
    const firstBusEnd = 14 * 60 + 30; // 2:30 ظهرًا
    const secondBusStart = 7 * 60 + 30; // 7:30 صباحًا
    const secondBusEnd = 15 * 60; // 3:00 ظهرًا

    // تحقق من الوقت الحالي ومقارنته مع أوقات الحافلات
    if (timeInMinutes >= firstBusStart && timeInMinutes <= firstBusEnd) {
        showNotification("أنت في وقت الحافلة الأولى (7:00 صباحًا - 2:30 ظهرًا)");
    } else if (timeInMinutes >= secondBusStart && timeInMinutes <= secondBusEnd) {
        showNotification("أنت في وقت الحافلة الثانية (7:30 صباحًا - 3:00 ظهرًا)");
    } else {
        showNotification("لا يوجد حافلات حالياً.");
    }
}

// وضع الظلام (الوضع الليلي) عند التفاعل مع الزر
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}lert("متصفحك لا يدعم ميزة الموقع الجغرافي.");
    }
}

// إعداد التطبيق عند اختيار دور المستخدم
function setupRole(role) {
    userRole = role;
    document.getElementById("role-status").textContent =
        userRole === "student" ? "طالب" : "سائق";
    document.getElementById("role-selection").style.display = "none";
    document.getElementById("map-container").style.display = "block";
    getUserLocation(); // بدء الحصول على الموقع
}

// أحداث الأزرار
document.getElementById("student-role").addEventListener("click", () => {
    setupRole("student");
});

document.getElementById("driver-role").addEventListener("click", () => {
    setupRole("driver");
});