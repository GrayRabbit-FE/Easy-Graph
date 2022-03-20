export interface NodeProps{
    nodeType:string;
    nodeId:string;
    position:[number, number];
    data?:any;
}
export interface EdgeProps{
    edgeId:string;
    edgeType:string;
    startEndNodeId:[string,string];
    data?:any;
}

export interface EGContextProps {
    options?:{
        zoomable:boolean;
        scrollable:boolean;
    };
    edges?:EdgeProps[];
    nodes?:NodeProps[];
}

export type Edge = React.FC<EdgeProps>;
export type Node = React.FC<NodeProps>;
