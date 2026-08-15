import { useEffect, useState } from 'react';

/**
 * Tracks which section ID is currently visible in the viewport using
 * IntersectionObserver. Returns the ID string of the active section.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observers: IntersectionObserver[] = [];
    // Map to hold the intersection ratio for each section
    const ratios: Record<string, number> = {};

    const pickActive = () => {
      let best = '';
      let bestRatio = -1;
      for (const id of ids) {
        const r = ratios[id] ?? 0;
        if (r > bestRatio) {
          bestRatio = r;
          best = id;
        }
      }
      if (best) setActive(best);
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios[id] = entry.intersectionRatio;
          pickActive();
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}
