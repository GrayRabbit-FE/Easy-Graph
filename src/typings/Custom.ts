export interface CustomNode<T>{
    nodeId:string;
    nodeType:string;
    position:[number,number];
    data?:T;
}
export interface CustomEdge<T>{
    edgeId:string;
    edgeType:string;
    startEndPosition:[number,number,number,number];
    data?:T;
}
