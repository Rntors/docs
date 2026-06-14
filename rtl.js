(function () {
  function applyRTL() {
    var isArabic = window.location.pathname.startsWith('/ar/') || window.location.pathname === '/ar';
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');
  }
  applyRTL();
  window.addEventListener('popstate', applyRTL);
  var originalPushState = history.pushState;
  history.pushState = function () {
    originalPushState.apply(this, arguments);
    applyRTL();
  };
  var originalReplaceState = history.replaceState;
  history.replaceState = function () {
    originalReplaceState.apply(this, arguments);
    applyRTL();
  };
})();
