import { useEffect, useState, useCallback } from 'react';
import { throttle } from '../utils';

export interface ScrollPosition {
  x: number;
  y: number;
  /** Whether the user has scrolled past the threshold (default: 80px) */
  isScrolled: boolean;
  /** Scroll direction */
  direction: 'up' | 'down' | 'idle';
  /** Progress from 0 to 1 across the full page height */
  progress: number;
}

/**
 * Track window scroll position.
 * Useful for sticky navbars, parallax, and scroll-triggered animations.
 *
 * @param threshold - px from top to consider "scrolled" (default 80)
 * @param throttleMs - throttle listener to reduce jank (default 50ms)
 */
export function useScrollPosition(
  threshold = 80,
  throttleMs = 50,
): ScrollPosition {
  const [state, setState] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    isScrolled: false,
    direction: 'idle',
    progress: 0,
  });

  const update = useCallback(
    throttle(() => {
      const x = window.scrollX;
      const y = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? y / maxScroll : 0;

      setState((prev) => ({
        x,
        y,
        isScrolled: y > threshold,
        direction: y > prev.y ? 'down' : y < prev.y ? 'up' : prev.direction,
        progress: Math.min(Math.max(progress, 0), 1),
      }));
    }, throttleMs),
    [threshold, throttleMs],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', update, { passive: true });
    update(); // initialize
    return () => window.removeEventListener('scroll', update);
  }, [update]);

  return state;
}
