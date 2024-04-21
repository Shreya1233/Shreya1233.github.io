=function showImage(imageId) {
  // Hide all images first
  document.querySelectorAll('.hover-image').forEach(function (img) {
    img.style.display = 'none';
  });

  // Find the hovered dot position
  const dot = event.currentTarget;
  const dotRect = dot.getBoundingClientRect();

  // Get the image container and set the correct image to display
  const hoverImage = document.getElementById(imageId);
  hoverImage.style.display = 'block';
  hoverImage.style.left = dotRect.left + (dotRect.width / 2) + 'px'; // Center it horizontally
  hoverImage.style.top = (dotRect.top - hoverImage.offsetHeight) + 'px'; // Position it above the dot
}

function goToPage(page) {
  window.location.href = page; // Redirects to the given page within your website
}

// Add an event listener to hide the image when the mouse leaves the dot area
document.querySelectorAll('.dot').forEach(function (dot) {
  dot.addEventListener('mouseleave', function () {
    document.querySelectorAll('.hover-image').forEach(function (img) {
      img.style.display = 'none';
    });
  });
});
