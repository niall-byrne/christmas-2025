import { useEffect, useState } from "react";

export default function useToggle() {
  const [selector, setSelector] = useState(false);

  const flip = () => {
    setSelector(!selector);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelector(true);
  }, []);

  return {
    flip,
    value: selector,
  };
}
