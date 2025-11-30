const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
  logregBox.classList.remove('active');
});

// --- LOGIN & REGISTER LOGIC ---
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

// Simpan data register ke localStorage
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  // Simpan user ke localStorage
  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Registrasi berhasil! Silakan login.');
  logregBox.classList.remove('active'); // balik ke login
});

// Cek login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    alert('Login berhasil!');
    // Redirect ke dashboard
    window.location.href = '/dashboard-page/dashboard.html';
  } else {
    alert('Email atau password salah!');
  }
});