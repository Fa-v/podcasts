(function() {
  const app = {};
  const showBtn = document.querySelector('.showBtn');
  const accordion = document.querySelector('.accordion');

  function showContent() {
    accordion.style.display = 'block';
  }

  function hideContent() {
    accordion.style.display = 'none';
  }

  app.toggleContent = function() {
    showBtn.addEventListener('click', function() {
      if (window.getComputedStyle(accordion).display === 'none') {
        showContent();
      } else {
        hideContent();
      }
    });
  };

  app.toggleContent();

  return app;
})();
