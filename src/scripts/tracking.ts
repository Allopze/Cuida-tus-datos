type LandingEventDetail = {
  event: string;
  label?: string;
};

declare global {
  interface Window {
    dataLayer?: LandingEventDetail[];
    plausible?: (eventName: string, options?: { props?: Record<string, string | undefined> }) => void;
    umami?: {
      track: (eventName: string, data?: Record<string, string | undefined>) => void;
    };
  }
}

const trackLandingEvent = (detail: LandingEventDetail) => {
  window.dataLayer?.push(detail);
  window.plausible?.(detail.event, { props: { label: detail.label } });
  window.umami?.track(detail.event, { label: detail.label });
  window.dispatchEvent(new CustomEvent('landing:event', { detail }));
};

document.addEventListener('click', event => {
  const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-track]') : null;
  if (!target?.dataset.track) return;

  trackLandingEvent({
    event: target.dataset.track,
    label: target.dataset.trackLabel || target.textContent?.trim()
  });
});

document.addEventListener('change', event => {
  const target = event.target instanceof HTMLInputElement ? event.target : null;
  if (!target?.dataset.track) return;

  trackLandingEvent({
    event: target.dataset.track,
    label: target.dataset.trackLabel,
  });
});

export {};
