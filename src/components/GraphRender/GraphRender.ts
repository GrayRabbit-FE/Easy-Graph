import Edge from "../Edge/EdgeRender";
import React from 'react';
import { EdgeProps, GraphRenderProps } from "../../typings/Components";
import EdgeRender from "../Edge/EdgeRender";

const GraphRender: React.FC<GraphRenderProps> = ({
    nodes,
    edges
}) => {
    const getNode = (id: string):EdgeProps => {
        return null;
    };
    return (
        <>
            <div className="graph-render-nodes">
                {

                }
            </div>
            <div className="graph-render-edges">
                {
                    edges.map(({
                        edgeId,
                        edgeType,
                        startEndNodeId,

                    }) => {
                        const startEndNode:[EdgeProps,EdgeProps] =
                            [
                                getNode(startEndNodeId[0]),
                                getNode(startEndNodeId[1])
                            ];
                        return (
                            <EdgeRender
                                {...{
                                    edgeId,
                                    edgeType,
                                    startEndNodeId,
                                    startEndNode
                                }}>

                            </EdgeRender>
                        )
                    })
                }
            </div>
        </>
    );
}

export default GraphRender;