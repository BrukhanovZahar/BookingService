document.addEventListener('DOMContentLoaded', function() {
    fetch('/auth/auth-status')
        .then(response => response.json())
        .then(data => {
            const loginLink = document.querySelector('.header .links a.login');
            const logoutLink = document.querySelector('.header .links a.logout');
            const authLink = document.querySelector('.cta-button');

            if (data.isAuthenticated) {
                if (loginLink) loginLink.style.display = 'none';
                if (logoutLink) logoutLink.style.display = 'inline-block';
                if (authLink) authLink.style.display = 'none'
            } else {
                if (loginLink) loginLink.style.display = 'inline-block';
                if (logoutLink) logoutLink.style.display = 'none';
                if (authLink) authLink.style.display = 'inline-block'
            }
        })
        .catch(error => console.error('Ошибка при проверке аутентификации:', error));
});