import React, { useContext, useMemo } from 'react';
import { Node } from '../../typings/Components';
import { CustomNode } from '../../typings/Custom';
import { Register } from '../EGProvider/EGProvider';
const NodeRender: Node = ({
    nodeId,
    nodeType,
    data
}) => {

    const CustomNodeFC: CustomNode<any> = useMemo(() => {
        const rigesterContext = useContext(Register);
        return rigesterContext[nodeType] as CustomNode;
    }, []);

    return (
        <>
            <CustomNodeFC
                nodeId={nodeId}
                data={data}
            >
            </CustomNodeFC>
        </>
    );

}

export default NodeRender;