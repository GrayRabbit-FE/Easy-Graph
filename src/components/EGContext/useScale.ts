import { useState } from 'react';

export const useScale = () => {
  const [scale, setScale] = useState(1);

  const handleScroll = (e: any) => {
    if (
      (e.nativeEvent.deltaY < 0 && scale >= 3) ||
      (e.nativeEvent.deltaY > 0 && scale <= 0.5)
    ) {
      return;
    }
    setScale(scale => (e.nativeEvent.deltaY < 0 ? scale + 0.1 : scale - 0.1));
  };

  return { scale, handleScroll };
};
