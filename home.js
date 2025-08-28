  // DOM Elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginLink = document.getElementById('loginLink');
    const closeModal = document.getElementById('closeModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const disabledLinks = document.querySelectorAll('.disabled-link');

    // Check if user is logged in
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Function to update UI based on login status
    function updateUI() {
      if (isLoggedIn) {
        disabledLinks.forEach(link => {
          link.classList.remove('disabled-link');
          link.onclick = null;
        });
        loginLink.textContent = 'Logout';
        loginLink.href = '#';
        loginLink.onclick = logout;
      } else {
        disabledLinks.forEach(link => {
          link.classList.add('disabled-link');
          link.onclick = preventAccess;
        });
        loginLink.textContent = 'Login';
        loginLink.href = '#';
        loginLink.onclick = showLoginModal;
      }
    }

    // Show login modal
    function showLoginModal(e) {
      e.preventDefault();
      loginModal.style.display = 'flex';
    }

    // Show signup modal
    function showSignupModal(e) {
      e.preventDefault();
      loginModal.style.display = 'none';
      signupModal.style.display = 'flex';
    }

    // Close modals
    function closeModals() {
      loginModal.style.display = 'none';
      signupModal.style.display = 'none';
    }

    // Prevent access to disabled links
    function preventAccess(e) {
      e.preventDefault();
      alert('Please login to access this feature.');
      showLoginModal(e);
    }

    // Login function
    function login(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Simple validation
      if (email && password) {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        closeModals();
        updateUI();
        alert('Login successful!');
      } else {
        alert('Please enter valid credentials.');
      }
    }

    // Signup function
    function signup(e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      // Simple validation
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      
      if (name && email && password) {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
        closeModals();
        updateUI();
        alert('Account created successfully! You are now logged in.');
      } else {
        alert('Please fill all fields.');
      }
    }

    // Logout function
    function logout(e) {
      e.preventDefault();
      isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      updateUI();
      alert('You have been logged out.');
    }

    // Toggle dark/light mode
    function toggleMode() {
      document.body.classList.toggle('dark-mode');
      const modeToggle = document.querySelector('.mode-toggle');
      if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        modeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    }

    // Toggle mobile menu
    function toggleMenu() {
      navLinks.classList.toggle('active');
    }

    // Event Listeners
    loginLink.addEventListener('click', isLoggedIn ? logout : showLoginModal);
    closeModal.addEventListener('click', closeModals);
    closeSignupModal.addEventListener('click', closeModals);
    showSignup.addEventListener('click', showSignupModal);
    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      signupModal.style.display = 'none';
      loginModal.style.display = 'flex';
    });
    loginForm.addEventListener('submit', login);
    signupForm.addEventListener('submit', signup);
    hamburger.addEventListener('click', toggleMenu);
    window.addEventListener('click', (e) => {
      if (e.target === loginModal || e.target === signupModal) {
        closeModals();
      }
    });

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      // Check saved theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.mode-toggle').textContent = '☀️';
      }
      
      // Check login status
      updateUI();
      
      // If not logged in, show login modal after a delay
      if (!isLoggedIn) {
        setTimeout(() => {
          loginModal.style.display = 'flex';
        }, 1000);
      }
    });