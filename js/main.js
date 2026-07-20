document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // التحقق من صحة البريد الإلكتروني
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('الرجاء إدخال بريد إلكتروني صحيح يحوي علامة @');
                event.preventDefault();
                return;
            }

            // التحقق من طول كلمة المرور (6 خانات على الأقل)
            if (password.length < 6) {
                alert('كلمة المرور يجب أن تكون 6 أحرف أو أرقام على الأقل');
                event.preventDefault();
                return;
            }
        });
    }
});
