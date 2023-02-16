import React, {
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
  innerWidth: number;
}

export const SizeContext = createContext<ScrollValue>({
  innerWidth: 0,
});

const SizeObserver: FC<Props> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
