export interface CustomNodeProps<T={}>{
    nodeId:string;
    data:T;
}
export interface CustomEdgeProps<T={}>{
    edgeId:string;
    startEndPosition:[number,number,number,number];
    data:T;
}
