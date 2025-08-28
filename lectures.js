 // Theme Toggle Functionality
    const themeButton = document.getElementById('themeButton');
    const logo = document.getElementById('logo');
    
    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        themeButton.innerHTML = '<i class="fas fa-sun"></i>';
        logo.src = 'https://via.placeholder.com/150x50/4cc9f0/121212?text=SEMS';
        localStorage.setItem('theme', 'dark');
      } else {
        themeButton.innerHTML = '<i class="fas fa-moon"></i>';
        logo.src = 'https://via.placeholder.com/150x50/4361ee/ffffff?text=SEMS';
        localStorage.setItem('theme', 'light');
      }
    }
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeButton.innerHTML = '<i class="fas fa-sun"></i>';
      logo.src = 'https://via.placeholder.com/150x50/4cc9f0/121212?text=SEMS';
    }
    
    themeButton.addEventListener('click', toggleTheme);
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Filter Functionality
    const semesterFilter = document.getElementById('semester');
    const subjectFilter = document.getElementById('subject');
    const typeFilter = document.getElementById('type');
    const searchInput = document.getElementById('searchInput');
    
    const allContent = [
      ...document.querySelectorAll('.video-card, .note-card, .assignment-item')
    ];
    
    function filterContent() {
      const semesterValue = semesterFilter.value;
      const subjectValue = subjectFilter.value;
      const typeValue = typeFilter.value;
      const searchValue = searchInput.value.toLowerCase();
      
      allContent.forEach(item => {
        const itemSemester = item.getAttribute('data-semester');
        const itemSubject = item.getAttribute('data-subject');
        const itemType = item.getAttribute('data-type');
        const itemText = item.textContent.toLowerCase();
        
        const semesterMatch = semesterValue === 'all' || itemSemester === semesterValue;
        const subjectMatch = subjectValue === 'all' || itemSubject === subjectValue;
        const typeMatch = typeValue === 'all' || itemType === typeValue;
        const searchMatch = itemText.includes(searchValue);
        
        if (semesterMatch && subjectMatch && typeMatch && searchMatch) {
          item.style.display = '';
          item.style.animation = 'fadeIn 0.5s ease';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    semesterFilter.addEventListener('change', filterContent);
    subjectFilter.addEventListener('change', filterContent);
    typeFilter.addEventListener('change', filterContent);
    searchInput.addEventListener('input', filterContent);
    
    // Simulate loading animation
    document.addEventListener('DOMContentLoaded', function() {
      const contentElements = document.querySelectorAll('.video-card, .note-card, .assignment-item');
      
      contentElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
      });
    });