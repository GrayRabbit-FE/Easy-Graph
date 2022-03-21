import React from 'react';
import { EGContextProps } from '../../typings/Components';
import { useDrag } from './useDrag';
import { useScale } from './useScale';
import './EGContext.css';

const EGContext: React.FC<EGContextProps> = ({ nodes, edges, options, children }) => {
  const { trans, handleMouseDown, handleMouseMove, handleMouseUp } = useDrag();
  const { scale, handleScroll } = useScale();

  return (
    <div
      className='contextBox'
      style={{
        transform: `translate(${trans.x}px,${trans.y}px) scale(${scale})`
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleScroll}
    >
      {children}
    </div>
  );
};

export default EGContext;
