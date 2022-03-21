import React, { useContext, useMemo } from 'react';
import { Edge } from '../../typings/Components';
import { CustomEdge } from '../../typings/Custom';
import { Register } from '../EGProvider/EGProvider';
const EdgeRender: Edge = ({
    edgeId,
    edgeType,
    startEndNode,
    data
}) => {

    const CustomEdgeFC: CustomEdge<any> = useMemo(() => {
        const rigesterContext = useContext(Register);
        return rigesterContext[edgeType] as CustomEdge;
    }, [])

    const startEndPosition: [number, number, number, number] =
        [
            ...startEndNode![0].position,
            ...startEndNode![1].position
        ];
    return (
        <>
            <CustomEdgeFC
                edgeId={edgeId}
                data={data}
                startEndPosition={startEndPosition}
            >
            </CustomEdgeFC>
        </>
    );
}

export default EdgeRender;