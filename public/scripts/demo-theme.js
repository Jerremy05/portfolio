// Match the portfolio's saved theme; storage may be blocked in private browsers.
(() => {
  let theme = 'dark';
  try { if (localStorage.getItem('pv2-theme') === 'light') theme = 'light'; } catch { /* Use the portfolio default. */ }
  document.documentElement.dataset.theme = theme;
})();
