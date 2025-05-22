document.addEventListener('DOMContentLoaded', function () {
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile menu toggle
    const topnav = document.getElementById("myTopnav");
    if (topnav) {
        const menuIcon = document.querySelector('.topnav .icon');
        if (menuIcon) {
            menuIcon.addEventListener('click', function () {
                topnav.classList.toggle("responsive");
                document.body.style.overflow = topnav.classList.contains("responsive") ? "hidden" : "auto";
            });
        }

        // Close menu on link click (for mobile)
        document.querySelectorAll('.topnav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 576) {
                    topnav.className = "topnav";
                    document.body.style.overflow = "auto";
                }
            });
        });

        // Reset nav on window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth > 576) {
                topnav.className = "topnav";
                document.body.style.overflow = "auto";
            }
        });

        // Sticky header
        const sticky = topnav.offsetTop;
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > sticky) {
                topnav.classList.add("sticky");
            } else {
                topnav.classList.remove("sticky");
            }
        });
    }

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let valid = true;

            if (name === '') {
                alert('Please enter your name');
                valid = false;
            }

            if (email === '' || !email.includes('@')) {
                alert('Please enter a valid email address');
                valid = false;
            }

            if (message === '') {
                alert('Please enter your message');
                valid = false;
            }

            if (!valid) e.preventDefault();
        });
    }

    // Food Showcase Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
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

    // Bootstrap navbar collapse (if used)
    const bootstrapToggler = document.querySelector('.navbar-toggler');
    const bootstrapMenu = document.querySelector('#navbarMenu');

    if (bootstrapToggler && bootstrapMenu && typeof bootstrap !== 'undefined') {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(bootstrapMenu) || new bootstrap.Collapse(bootstrapMenu);
                    bsCollapse.hide();
                }
            });
        });
    }
});
