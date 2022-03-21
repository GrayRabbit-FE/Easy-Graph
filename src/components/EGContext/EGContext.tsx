import React from "react"
import { EGContextProps } from "../../typings/Components";

const EGContext:React.FC<EGContextProps> = ({
    nodes,
    edges,
    options,
    children
})=>{
    return (
        //todo: 给这个div加上缩放，移动能力
        <div>
        {
            children
        }
        </div>
    )
}

export default EGContext;