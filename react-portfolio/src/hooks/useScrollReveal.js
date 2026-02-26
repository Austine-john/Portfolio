import { useEffect, useRef } from 'react';

const INTERSECTION_THRESHOLD = 0.12;
const BOTTOM_MARGIN = '-40px';

/**
 * Returns a ref to attach to a container element.
 * When the element enters the viewport the class "visible" is added,
 * triggering the CSS reveal animation defined in index.css.
 * Respects prefers-reduced-motion: if the user prefers reduced motion
 * we mark the element visible immediately so no animation plays.
 */
const useScrollReveal = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            element.classList.add('visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('visible');
                    observer.unobserve(element);
                }
            },
            { threshold: INTERSECTION_THRESHOLD, rootMargin: `0px 0px ${BOTTOM_MARGIN} 0px` }
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, []);

    return ref;
};

export default useScrollReveal;
