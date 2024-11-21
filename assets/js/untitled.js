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