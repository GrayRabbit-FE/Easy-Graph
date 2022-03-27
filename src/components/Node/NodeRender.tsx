import React, { useContext, useMemo } from 'react';
import { useRegister } from '../../index';
import {  EGDataContextProps, Node, NodeProps } from '../../typings/Components';
import { CustomNode } from '../../typings/Custom';
import { EGDataContext } from '../EGContext/EGContext';
import { Register } from '../EGProvider/EGProvider';
const NodeRender: Node = ({node}) => {
    const {
        nodeId,
        nodeType,
        data,
        position,
    } = node;

    const {
        nodesData,
        setNodesData,
        edgesData,
        setEdgesData
    } = useContext<EGDataContextProps>(EGDataContext);

    const CustomNodeFC: CustomNode<any> = useRegister(nodeType) as CustomNode<any>;
    
    const handleDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        event.dataTransfer.setDragImage(new Image,0,0);
    }

    const handleDrag: React.DragEventHandler<HTMLDivElement> = (event) => {
        const [x, y] = position;

        node.position = [
            x + event.nativeEvent.offsetX,
            y + event.nativeEvent.offsetY
        ];
        
        setNodesData!([...nodesData as NodeProps[]]);
    }

    const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (event) => {
        const [x, y] = position;

        node.position = [
            x + event.nativeEvent.offsetX,
            y + event.nativeEvent.offsetY
        ];

        setNodesData!([...nodesData as NodeProps[]]);
    }
    return (
        <div
            draggable={true}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            style={{
                position: 'absolute',
                transform: `translate(${position[0]}px, ${position[1]}px)`
            }}
        >
            <CustomNodeFC
                nodeId={nodeId}
                data={data}
            >
            </CustomNodeFC>
        </div>
    );

}

export default NodeRender;