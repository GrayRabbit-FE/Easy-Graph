import React, { useContext, useMemo } from 'react';
import { useRegister } from '../../index';
import { Edge } from '../../typings/Components';
import { CustomEdge } from '../../typings/Custom';
const EdgeRender: Edge = ({
    edgeId,
    edgeType,
    startEndNode,
    data
}) => {

    const CustomEdgeFC: CustomEdge<any> = useRegister(edgeType);


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