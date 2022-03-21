import React, { useContext, useMemo } from 'react';
import { useRegister } from '../../index';
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
        const getEdge = useRegister();
        return getEdge(edgeType) as CustomEdge;
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