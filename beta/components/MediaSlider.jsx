'use client';

import { Children, useCallback, useEffect, useId, useRef, useState } from 'react';

export default function MediaSlider({
  children,
  label,
  trackClassName = '',
  itemClassName = '',
  desktopClassName = '',
}) {
  const trackRef = useRef(null);
  const labelId = useId();
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return { slideWidth: 0, gap: 0 };
    const slide = el.querySelector('[data-slide]');
    const slideWidth = slide?.getBoundingClientRect().width || el.clientWidth;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return { slideWidth, gap };
  }, []);

  const updateFromScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { slideWidth, gap } = measure();
    if (!slideWidth) return;
    const next = Math.round(el.scrollLeft / (slideWidth + gap));
    setIndex(Math.max(0, Math.min(items.length - 1, next)));
  }, [items.length, measure]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    const frame = window.requestAnimationFrame(updateFromScroll);
    el.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, [updateFromScroll]);

  const goTo = (nextIndex) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, nextIndex));
    const slides = el.querySelectorAll('[data-slide]');
    const target = slides[clamped];
    if (!target) return;
    // Scroll the track only — avoid scrollIntoView (it can scroll the whole page)
    const left = target.offsetLeft - el.offsetLeft;
    el.scrollTo({ left, behavior: 'smooth' });
    setIndex(clamped);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  return (
    <div className={`media-slider ${desktopClassName}`.trim()}>
      <div className="media-slider__toolbar">
        <p id={labelId} className="media-slider__status">
          {label} · {index + 1} / {items.length}
        </p>
        <div className="media-slider__controls">
          <button
            type="button"
            className="media-slider__btn"
            onClick={() => goTo(index - 1)}
            disabled={index <= 0}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="media-slider__btn"
            onClick={() => goTo(index + 1)}
            disabled={index >= items.length - 1}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className={`media-slider__track ${trackClassName}`.trim()}
        aria-labelledby={labelId}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {items.map((child, i) => (
          <li
            key={child.key ?? i}
            className={`media-slider__slide ${itemClassName}`.trim()}
            data-slide
            aria-hidden={i !== index}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}
