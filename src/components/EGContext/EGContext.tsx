import React, { useEffect } from 'react';
import { EGContextProps } from '../../typings/Components';
import { useDrag } from './useDrag';
import { useScale } from './useScale';
// TODO:找不到模块“./EGContext.less”或其相应的类型声明。
// 明明已经添加了less的模块声明
import s from './EGContext.less';

const EGContext: React.FC<EGContextProps> = ({ nodes, edges, options, children }) => {
  // TODO: 加入节流
  const { trans, handleMouseDown, handleMouseMove, setIsMoving } = useDrag();
  const { scale, handleScroll } = useScale();

  return (
    <div
      className={s.contextBox}
      style={{
        transform: `translate(${trans.x}px,${trans.y}px) scale(${scale})`
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsMoving(false)}
      onWheel={handleScroll}
    >
      {children}
    </div>
  );
};

export default EGContext;
