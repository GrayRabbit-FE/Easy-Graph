import './App.css';
import React, { useState } from 'react';
import { CustomEdge, CustomNode } from './easy-graph/typings/Custom';
import { EdgeProps } from './easy-graph/typings/Components';
import { EGContext } from './easy-graph/index';
import { useRegister } from './easy-graph/index';
import { EGProvider } from './easy-graph/index';

const Node: CustomNode = ({
  data,
}) => {
  return (
    <div style={{
      width: '30px',
      height: '30px',
      borderRadius: '15px',
      position: 'absolute',
      backgroundColor: 'coral'
    }}
      draggable={true}
    >

    </div>
  )
}

const Edge: CustomEdge = ({
  startEndPosition
}) => (
  <svg key={Math.random()}
    style={{
      position: 'absolute',
      overflow: 'visible',
      zIndex: '-1',
      transform: 'translate(15px,15px)'
    }}>
    <path d={`M ${startEndPosition[0]} ${startEndPosition[1]}  
            C
            ${(startEndPosition[2] + startEndPosition[0]) / 2} ${startEndPosition[1]}
            ${(startEndPosition[2] + startEndPosition[0]) / 2} ${startEndPosition[3]}
            ${startEndPosition[2]} ${startEndPosition[3]} `}
      strokeWidth={6}
      stroke={'red'}
      fill='none'
    ></path>
  </svg>
);

const App = () => {
  const [nodes, setNodes] = useState([{
    nodeId: 'node1',
    position: [100, 100] as [number, number],
    nodeType: 'node'
  }, {
    nodeId: 'node2',
    position: [200, 300] as [number, number],
    nodeType: 'node'
  }, {
    nodeId: 'node3',
    position: [500, 140] as [number, number],
    nodeType: 'node'
  }, {
    nodeId: 'node4',
    position: [400, 600] as [number, number],
    nodeType: 'node'
  }]);
  const [edges, setEdges] = useState<EdgeProps[]>([
    {
      edgeType: 'edge',
      edgeId: 'edge1',
      startEndNodeId: ['node1', 'node2'],
    }
  ]);
  console.log(1);
  
  return (
    <EGProvider>
          <EGContext
          nodes={nodes}
          edges={edges}
          regist={
              {
                node: Node, 
                edge: Edge
              }
            
          }
        >
        </EGContext>
    </EGProvider>
  )
}
export default App;
