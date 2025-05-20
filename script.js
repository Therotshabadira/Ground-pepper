// Toggle mobile navigation
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sticky header on scroll
window.onscroll = function() {stickyHeader()};
var header = document.getElementById("myTopnav");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
}

// Form validation for contact page
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', function(e) {
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
      let valid = true;
      
      if (name.trim() === '') {
          alert('Please enter your name');
          valid = false;
      }
      
      if (email.trim() === '' || !email.includes('@')) {
          alert('Please enter a valid email address');
          valid = false;
      }
      
      if (message.trim() === '') {
          alert('Please enter your message');
          valid = false;
      }
      
      if (!valid) {
          e.preventDefault();
      }
  });
}
// Food Showcase Filtering
document.addEventListener('DOMContentLoaded', function() {
  // Filter gallery items
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              
              // Add active class to clicked button
              this.classList.add('active');
              
              const filterValue = this.getAttribute('data-filter');
              
              galleryItems.forEach(item => {
                  if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              });
          });
      });
  }
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          // Simple validation
          if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
              alert('Please fill in all required fields');
              return;
          }
          
          if (!email.includes('@')) {
              alert('Please enter a valid email address');
              return;
          }
          
          // In a real application, you would send the form data to a server here
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
      });
  }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.body.style.overflow = "hidden";
    } else {
        x.className = "topnav";
        document.body.style.overflow = "auto";
    }
}

// Close menu when clicking a link
document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 576px) {
            document.getElementById("myTopnav").className = "topnav";
            document.body.style.overflow = "auto";
        }
    });
});

// Window resize handler
window.addEventListener('resize', function() {
    if (window.innerWidth > 576px) {
        var x = document.getElementById("myTopnav");
        x.className = "topnav";
        document.body.style.overflow = "auto";
    }
});


// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('#navbarMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Close menu when link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) { // Bootstrap's lg breakpoint
                const bsCollapse = new bootstrap.Collapse(navbarMenu);
                bsCollapse.hide();
            }
        });
    });
});