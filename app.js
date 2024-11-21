// دالة لبدء التطبيق وإخفاء شاشة البداية
function startApp() {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    checkNotificationTime();
}

// دالة لعرض نافذة الإرشادات
function showGuidelines() {
    document.getElementById('guidelines').style.display = 'block';
}

// دالة لإغلاق نافذة الإرشادات
function closeGuidelines() {
    document.getElementById('guidelines').style.display = 'none';
}

// دالة لعرض الإشعار
function showNotification(message) {
    document.getElementById('notification-message').textContent = message;
    document.getElementById('notification-popup').style.display = 'flex';
}

// دالة لإغلاق الإشعار
function closeNotification() {
    document.getElementById('notification-popup').style.display = 'none';
}

// التحقق من الوقت الحالي لتحديد الإشعارات
function checkNotificationTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // وقت الحضور (7:30 صباحاً)
    if (currentHour === 7 && currentMinute === 15) {
        showNotification('اقترب موعد الحضور! يرجى التجهز.');
    } else if (currentHour === 7 && currentMinute === 30) {
        showNotification('حان الآن موعد الحضور!');
    }

    // وقت الانصراف (2:00 مساءً)
    if (currentHour === 13 && currentMinute === 45) {
        showNotification('اقترب موعد الانصراف! استعد للرحيل.');
    } else if (currentHour === 14 && currentMinute === 0) {
        showNotification('حان الآن موعد الانصراف!');
    }

    // تحقق كل دقيقة
    setTimeout(checkNotificationTime, 60000);
}
