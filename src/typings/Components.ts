export interface NodeProps<T={}>{
    nodeType:string;
    nodeId:string;
    position:[number, number];
    data?:T;
}
export interface EdgeProps<T={}>{
    edgeId:string;
    edgeType:string;
    startEndNodeId:[string,string];
    data?:T;
}