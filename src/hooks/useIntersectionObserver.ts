import { useEffect, useRef, useState } from 'react';

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /** Freeze once visible — stops observing after first intersection */
  freezeOnceVisible?: boolean;
}

/**
 * Observe whether an element has entered the viewport.
 * Powers scroll-triggered animations and lazy loading.
 *
 * @example
 * const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
 * return <div ref={ref} className={isVisible ? 'animate-in' : 'opacity-0'} />;
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true,
  } = options;

  const ref = useRef<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const isVisible = !!entry?.isIntersecting;
  const frozen = isVisible && freezeOnceVisible;

  useEffect(() => {
    const el = ref.current;
    if (!el || frozen) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e) setEntry(e);
      },
      { threshold, root, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return { ref, entry, isVisible };
}
