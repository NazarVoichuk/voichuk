document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = 'none';
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('contactModal').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
