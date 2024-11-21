document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-1');
  const video = document.getElementById('modalVideo');

  modal.addEventListener('hidden.bs.modal', () => {
    if (video) {
      video.pause(); 
      video.currentTime = 0; 
    }
  });
});


document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the offset
      const offset = -100; // Adjust this value for your desired top spacing
      const targetPosition = targetElement.offsetTop - offset;

      // Smooth scroll to the position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});