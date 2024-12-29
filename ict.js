document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const hiddenItems = document.querySelectorAll('.art-item.hidden');

    seeMoreBtn.addEventListener('click', function() {
        hiddenItems.forEach(function(item) {
            item.classList.remove('hidden');
        });
        seeMoreBtn.style.display = 'none'; // Hide the button after clicking
    });
});
