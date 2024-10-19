import { useEffect } from "react";

export function trackYandexMetricaGoal(id, goal) {
  // Ensure Yandex Metrica script has loaded and initialized
  if (typeof window.ym !== "undefined") {
    window.ym(id, "reachGoal", goal);
    console.log(`Goal ${goal} sent to Yandex Metrica`);
  } else {
    console.warn("Yandex Metrica is not loaded yet.");
  }
}

function YandexMetrica({ id }) {
  useEffect(() => {
    // Load Yandex Metrica script dynamically
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // Wait for the script to initialize Yandex Metrica
    const checkYMInitialized = setInterval(() => {
      if (typeof window.ym !== "undefined") {
        window.ym(id, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });
        clearInterval(checkYMInitialized);
        console.log("Yandex Metrica initialized.");
      }
    }, 100);

    // Cleanup script when component unmounts
    return () => {
      clearInterval(checkYMInitialized);
      const script = document.querySelector(
        `script[src="https://mc.yandex.ru/metrika/tag.js"]`
      );
      if (script) {
        script.remove();
      }
    };
  }, [id]);

  return null; // No visible UI component needed
}

export default YandexMetrica;
