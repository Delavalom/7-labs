import {
  type ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
  type FC,
} from "react";

type Props = {
  children: ReactNode;
};

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

const ScrollObserver: FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
