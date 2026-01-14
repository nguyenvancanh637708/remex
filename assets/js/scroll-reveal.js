// Simple scroll reveal using IntersectionObserver
(function() {
    const selector = '.reveal';
    const elems = () => Array.from(document.querySelectorAll(selector));

    function revealElement(el) {
        const delay = Number(el.dataset.revealDelay || el.getAttribute('data-reveal-delay') || 0);
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add('reveal-visible');
    }

    function onIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // honour data attributes for delay
                const delay = Number(el.dataset.revealDelay || el.getAttribute('data-reveal-delay') || 0);
                if (delay) el.style.transitionDelay = `${delay}ms`;
                el.classList.add('reveal-visible');
                // debug log
                if (window.__SCROLL_REVEAL_DEBUG__) console.debug('[scroll-reveal] reveal', el, { delay });
                // remove observer if once (default true)
                if (el.dataset.revealOnce !== 'false') observer.unobserve(el);
            }
        });
    }

    function init() {
        if (window.__SCROLL_REVEAL_DEBUG__) console.debug('[scroll-reveal] init');
        if (!('IntersectionObserver' in window)) {
            // fallback: reveal all immediately
            elems().forEach(el => el.classList.add('reveal-visible'));
            return;
        }

        const io = new IntersectionObserver(onIntersect, {
            root: null,
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.08
        });

        elems().forEach(el => {
            // ensure base class is present (allow adding via server-side too)
            if (!el.classList.contains('reveal')) el.classList.add('reveal');
            io.observe(el);
            if (window.__SCROLL_REVEAL_DEBUG__) console.debug('[scroll-reveal] observing', el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();