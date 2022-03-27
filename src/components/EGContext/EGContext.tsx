import React, { createContext, useState } from 'react';
import { EGContextProps, EGDataContextProps } from '../../typings/Components';
import { useDrag } from './useDrag';
import { useScale } from './useScale';
import 'easy-graph/components/EGContext/EGContext.css';
import GraphRender from '../GraphRender/GraphRender';
import useRegister from '../../hooks/useRegister';
export const EGDataContext = createContext<EGDataContextProps>({});

const EGContext: React.FC<EGContextProps> = ({ nodes, edges, options, regist }) => {
  const { trans, handleMouseDown, handleMouseMove, handleMouseUp } = useDrag();
  const { scale, handleScroll } = useScale();
  const [nodesData, setNodesData] = useState(nodes);
  const [edgesData, setEdgesData] = useState(edges);
  useRegister(regist!);
  return (
    <div style={{height:'100vh',width:'100vw',overflow:'hidden'}}>
      <div className='contextBox'
        style={{
          transform: `translate(${trans.x}px,${trans.y}px) scale(${scale})`
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleScroll}>
        <EGDataContext.Provider
          value={{
            nodesData,
            setNodesData,
            edgesData,
            setEdgesData
          }}>
          <GraphRender
            nodes={nodesData!}
            edges={edgesData}
          >
          </GraphRender>
        </EGDataContext.Provider>
      </div>
    </div>
  );
};

export default EGContext;
