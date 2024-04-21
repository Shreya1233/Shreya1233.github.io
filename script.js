// script.js
function showImage(imageId) {
  // Hide all images first
  document.querySelectorAll('.hover-image').forEach(function (img) {
    img.style.display = 'none';
  });
  // Show the correct image
  document.getElementById(imageId).style.display = 'block';
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
