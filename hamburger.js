document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').onclick = function() {
        document.getElementById('navbar').classList.toggle('active');
    };
});