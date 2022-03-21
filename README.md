# Easy-Graph

🔖首届支付宝前锋营进阶课「都不队」小组结业项目。

🏷️开源：基于 `React` 的开源 **可拖拽** 图渲染和布局库。

🪶轻量：除 `React` 外无第三方依赖。

🚀简洁：内置多种布局算法 给您快捷多样的体验。

🌹 自由：高度可定制 支持自定义注册节点样式和边样式。

🐥 功能丰富：节点支持拖拽 图会响应式渲染 画板支持缩放 平移。

🦚支持导入导出：支持导入导出数据。

使用方法：

**安装：**

```shell
npm i easy-graph
```

**快速开始:**

1.导入组件

```tsx
import { EGProvider, EGContext,useRegister } from 'easy-graph';
```

2.自定义组件 （若使用默认组件，可跳过）

边：

```tsx
const YourEdge: CustomEdge<YourData> = ({
    edgeId:string;
    startEndPosition:[number,number,number,number];
    data:YourData;
})=>{
    return (
       //消费数据的组件
    )
}
```

节点：

```tsx
const YourNode: CustomNode<YourData> = ({
    nodeId:string;
    data:YourData;
})=>{
    return (
       //消费数据的组件
    )
}
```

3.注册自定义组件

```tsx
const register = useRegister();
register.regist('your-element-type',YourElement);
```

4.渲染图

首先要先初始化要消费的数据，其中

nodes是形如下面的对象的数组

```jsx
interface NodeProps{
    nodeType:string;//对应注册的组件
    nodeId:string;//唯一id
    position:[number, number];//位置
    data?:any;//自己的组件要消费的数据
}
```

edges是形如下面的对象的数组

```jsx
interface EdgeProps{
    edgeId:string;//边的id
    edgeType:string;//对应注册的组件
    startEndNodeId:[string,string];//两个端点的id
    data?:any;//自己的组件要消费的数据
}
```

最后

```jsx
<EGProvider>
    <EGContext
        nodes={nodes}
        edges={edges}
        options={options}>
    </EGContext>
</EGProvider>
```
