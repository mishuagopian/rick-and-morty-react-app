import { useCallback } from "react";

const useScrollTo = () => {
  const hook = useCallback(
    (anchorSelector: string, behavior = "smooth" as ScrollBehavior) => {
      const anchor = document.querySelector(anchorSelector);
      if (anchor) {
        anchor.scrollIntoView({
          block: "center",
          behavior,
        });
      }
    },
    []
  );
  return hook;
};

export default useScrollTo;
