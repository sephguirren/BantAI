import { useEffect } from "react";

/**
 * Enables the `.reveal` scroll-in animation: observes every `.reveal:not(.is-visible)`
 * element (including future ones, via a MutationObserver) and marks them visible
 * once they enter the viewport.
 */
export function useRevealAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const bind = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    };

    bind();
    const mutation = new MutationObserver(bind);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}