import { useState } from 'react';

export const useDrag = () => {
  const [isMoving, setIsMoving] = useState(false);

  const [_, setPointer] = useState(() => ({ x: 0, y: 0 }));
  const [trans, setTrans] = useState(() => ({ x: 100, y: 100 }));
  const [diff, setDiff] = useState(() => ({ x: 0, y: 0 }));

  const handleMouseDown = (e: any) => {
    
    if(e.nativeEvent.target.className !== 'contextBox') return;
    setIsMoving(true);
    const difX = e.clientX - trans.x;
    const difY = e.clientY - trans.y;
    setDiff({ x: difX, y: difY });
    setPointer({ x: e.clientX, y: e.clientY });

  };

  const handleMouseMove = (e: any) => {
    if (!isMoving) return;
    setTrans({ x: e.clientX - diff.x, y: e.clientY - diff.y });
  };

  const handleMouseUp = () => {
    setIsMoving(false);
  };

  return {
    trans,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  };
};
