// Hover preview play/pause
document.querySelectorAll('.media-preview').forEach(container => {
  const video = container.querySelector('.preview-video');

  container.addEventListener('mouseenter', () => {
    if (video) video.play();
  });

  container.addEventListener('mouseleave', () => {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});

// Stop modal videos when closed
$('.portfolio-modal').on('hidden.bs.modal', function () {
  $(this).find('video').each(function () {
    this.pause();
    this.currentTime = 0;
  });
});
