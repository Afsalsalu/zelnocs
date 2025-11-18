document.addEventListener('DOMContentLoaded', () => {
    // Get modal and its elements
    const modal = document.getElementById('popupModal');
    const modalImg = document.getElementById('popupImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.querySelector('.close');

    // Add click event to each review image
    document.querySelectorAll('.review-img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.textContent = img.alt || 'Image Preview';
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});












document.addEventListener('DOMContentLoaded', function () {
    const videoTrigger = document.getElementById('video-trigger');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const videoFrame = document.getElementById('video-frame');

    // Open modal when clicking the link
    videoTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function () {
        closeModal();
    });

    // Close modal when clicking outside the content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        stopVideo();
    }

    // Stop video playback by resetting iframe src
    function stopVideo() {
        const src = videoFrame.src;
        videoFrame.src = '';
        videoFrame.src = src;
    }
});
