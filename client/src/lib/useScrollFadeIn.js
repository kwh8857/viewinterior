import { useCallback, useEffect } from "react";

const useScrollFadeIn = (delay, dom) => {
  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "opacity ,transform";
        current.style.transitionDuration = "1s";
        current.style.transitionTimingFunction = "ease-out";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [dom, delay]
  );

  useEffect(() => {
    if (dom) {
      let observer;
      const { current } = dom;
      current.style.opacity = 0;
      current.style.transform = "translate3d(0, 30%, 0)";
      if (current) {
        observer = new IntersectionObserver(handleScroll, {
          threshold: 0.1,
        });
        observer.observe(current);

        return () => observer && observer.disconnect();
      }
    }
  }, [handleScroll, dom]);

  return {
    title: "return",
  };
};

export default useScrollFadeIn;
