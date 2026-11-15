// Apply before paint on both portfolio and standalone pages.
(() => {
  const apply = (value) => {
    document.documentElement.dataset.glass = value === 'off' ? 'off' : 'on';
    window.dispatchEvent(new Event('glasschange'));
  };
  try { apply(localStorage.getItem('pv2-glass')); } catch { apply('on'); }
  window.addEventListener('storage', (event) => {
    if (event.key === 'pv2-glass' || event.key === null) apply(event.newValue);
  });
})();
