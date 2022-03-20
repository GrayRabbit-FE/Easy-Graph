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
    startEndNode?:[NodeProps,NodeProps];
    data?:any;
}

export interface GraphRenderProps {
    edges?:EdgeProps[];
    nodes?:NodeProps[];
}
 
export type EGContextProps = {
    options?:{
        zoomable:boolean;
        scrollable:boolean;
    };
} & GraphRenderProps;

export type Edge = React.FC<EdgeProps>;
export type Node = React.FC<NodeProps>;

