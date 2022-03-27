export interface CustomNodeProps<T={}>{
    nodeId:string;
    data:T;
}
export interface CustomEdgeProps<T={}>{
    edgeId:string;
    startEndPosition:[number,number,number,number];
    data:T;
}

export type CustomNode<T=any> = React.FC<CustomNodeProps<T>>;
export type CustomEdge<T=any> = React.FC<CustomEdgeProps<T>>;
export type CustomElement<T=any> =  CustomNode<T> | CustomEdge<T>
export interface RegisterProps {    
    setRegisterItem?: React.Dispatch<React.SetStateAction<RegisterProps>>;
    [props:string]:CustomElement | React.Dispatch<React.SetStateAction<RegisterProps>>|undefined;
}