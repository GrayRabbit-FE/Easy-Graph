import React, { useState } from 'react';
import { GraphRenderProps, NodeProps } from "../../typings/Components";
import EdgeRender from "../Edge/EdgeRender";
import useNodeMap from "../../hooks/useNodeMap";
import NodeRender from "../Node/NodeRender";
import './GraphRender.css'
const GraphRender: React.FC<GraphRenderProps> = ({
    nodes,
    edges,
}) => {
    
    const [nodeMap, { get: getNode }] = useNodeMap<string, NodeProps>(nodes?.reduce((prev, node) => {
        return prev.set(node.nodeId, node);
    }, new Map));

    
    return (
        <div className='graph-render-container'>
            <div className="graph-render-nodes">
                {
                    nodes?.map((node) => {
                      return( <NodeRender
                            key={node.nodeId}
                            node={node}
                        /> )
                    })
                }
            </div>
            <div className="graph-render-edges">
                {
                    edges?.map(({
                        edgeId,
                        edgeType,
                        startEndNodeId,
                        data
                    }) => {
                        const startEndNode: [NodeProps, NodeProps] =
                            [
                                getNode(startEndNodeId[0]) as NodeProps,
                                getNode(startEndNodeId[1]) as NodeProps
                            ];


                        return (
                            <EdgeRender
                                key={edgeId}
                                edgeId={edgeId}
                                edgeType={edgeType}
                                startEndNodeId={startEndNodeId}
                                startEndNode={startEndNode}
                                data={data}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default GraphRender;