(function () {
  var measurementId = 'G-WQ6F9E5Q7D';
  var storageKey = 'motivorustico_cookie_consent';
  var analyticsLoaded = false;

  function ensureGtagQueue() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
  }

  function updateAnalyticsConsent(choice) {
    ensureGtagQueue();
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: choice === 'accepted' ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });
  }

  function loadGoogleAnalytics() {
    updateAnalyticsConsent('accepted');

    if (!analyticsLoaded && !document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
      document.head.appendChild(script);
      analyticsLoaded = true;

      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    }
  }

  function readChoice() {
    try {
      var choice = window.localStorage.getItem(storageKey);
      return choice === 'accepted' || choice === 'declined' ? choice : null;
    } catch (error) {
      return null;
    }
  }

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(storageKey, choice);
    } catch (error) {
      // Private browsing modes can block storage. The current page view still respects the choice.
    }
  }

  function removeBanner() {
    var banner = document.querySelector('.cookie-consent');
    if (banner) {
      banner.remove();
    }
  }

  function handleChoice(choice) {
    saveChoice(choice);
    removeBanner();

    if (choice === 'accepted') {
      loadGoogleAnalytics();
    } else {
      updateAnalyticsConsent('declined');
    }
  }

  function createBanner() {
    if (document.querySelector('.cookie-consent')) return;

    var banner = document.createElement('section');
    banner.className = 'cookie-consent';
    banner.setAttribute('aria-label', 'Consentimento de cookies');
    banner.innerHTML = [
      '<p>Usamos cookies analíticos para compreender melhor as visitas ao site e melhorar a experiência. Pode aceitar ou recusar; o site continua a funcionar normalmente.</p>',
      '<div class="cookie-consent-actions">',
      '<button type="button" class="cookie-consent-decline">Recusar</button>',
      '<button type="button" class="cookie-consent-accept">Aceitar</button>',
      '</div>'
    ].join('');

    banner.querySelector('.cookie-consent-decline').addEventListener('click', function () {
      handleChoice('declined');
    });
    banner.querySelector('.cookie-consent-accept').addEventListener('click', function () {
      handleChoice('accepted');
    });

    document.body.appendChild(banner);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var choice = readChoice();

    if (choice === 'accepted') {
      loadGoogleAnalytics();
      return;
    }

    if (choice === 'declined') {
      updateAnalyticsConsent('declined');
      return;
    }

    createBanner();
  });
})();
