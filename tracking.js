/* Motivo Rústico – GA4 contact event tracking
   Fires on every phone (tel:) and WhatsApp (wa.me) click across the whole site.
   Mark "phone_call" and "whatsapp_click" as Key Events in GA4 to see them as conversions. */
(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    if (typeof window.gtag !== 'function') return;

    var href = link.getAttribute('href') || '';
    var page = window.location.pathname.split('/').pop() || 'index.html';

    if (href.startsWith('tel:')) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: page,
        value: 1
      });
    } else if (href.indexOf('wa.me/351918519619') !== -1) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: page,
        value: 1
      });
    }
  });
})();
