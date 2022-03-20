import React, { useEffect } from 'react';
import { EGContextProps } from '../../typings/Components';
import { useDrag } from './useDrag';
// TODO:找不到模块“./EGContext.less”或其相应的类型声明。
// 明明已经添加了less的模块声明
import s from './EGContext.less';

const EGContext: React.FC<EGContextProps> = ({ nodes, edges, options, children }) => {
  const { trans, handleMouseDown, handleMouseMove, setIsMoving } = useDrag();

  return (
    <div
      className={s.contextBox}
      style={{
        transform: `translate(${trans.x}px, ${trans.y}px)`
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsMoving(false)}
    >
      {children}
    </div>
  );
};

export default EGContext;
