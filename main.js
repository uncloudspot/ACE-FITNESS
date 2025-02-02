
 const popup = document.getElementById('maintenance-popup');

// Add event listener to the document
document.addEventListener('click', function(event) {
  // Show the popup
  popup.style.display = 'block';
});

// Add event listener to the popup
popup.addEventListener('click', function(event) {
  // Hide the popup
  popup.style.display = 'none';
});
