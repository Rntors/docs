(function () {
  function applyRTLClass() {
    var isArabic =
      window.location.pathname.startsWith('/ar/') ||
      window.location.pathname === '/ar';

    document.documentElement.classList.toggle('rntor-arabic-docs', isArabic);
  }

  applyRTLClass();

  window.addEventListener('popstate', applyRTLClass);

  var originalPushState = history.pushState;
  history.pushState = function () {
    originalPushState.apply(this, arguments);
    applyRTLClass();
  };

  var originalReplaceState = history.replaceState;
  history.replaceState = function () {
    originalReplaceState.apply(this, arguments);
    applyRTLClass();
  };
})();
