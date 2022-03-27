import { CustomElement } from "easy-graph/typings/Custom";
import { Dispatch, SetStateAction } from "react";
import { CustomEdge, CustomNode } from "./Custom";

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
export interface EGDataContextProps{
    edgesData?: EdgeProps[];
    setEdgesData?: Dispatch<SetStateAction<EdgeProps[] | undefined>>; 
    nodesData?: NodeProps[];
    setNodesData?: Dispatch<SetStateAction<NodeProps[] | undefined>>; 
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
    regist?:{
        [props:string]:CustomElement<any>
    }
} & GraphRenderProps;

export type Edge = React.FC<EdgeProps>;
export type Node = React.FC<{node:NodeProps}>;

