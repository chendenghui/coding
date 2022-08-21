//vue的渲染有两条线：初始化（patch）和更新（update）

// 1.初始化patch
function createElement(vnode) {
  let tag = vnode.tag //目标元素
  let attrs = vnode.attrs || {} //目标元素的属性
  let children = vnode.children || [] //目标元素的子节点
  
  if(!tag) {
    return null
  }
  //1.创建元素
  let elem = document.createElement(tag);
  // 2.给元素附加属性
  let attrName 
  for(attrName in attrs) {
    if(attrs.hasOwnProperty(attrName)){
       elem.setAttribute(attrName, attrs[attrName])
    }
  } 
  // 3.添加子元素
  children.forEach(childrenNode => {
    elem.appendChild(createElement(childrenNode))
  });
  //返回生成的真实节点
  return elem
} 

// 2.更新节点
function updateElement(vnode, newVnode) {
  let children = vnode.children ||[] //现有节点
  let newChildren = newVnode.children //新节点
  //检查第一层有没有变化
  children.forEach(function(childrenVnode,index) {
    let newChildrenVnode = newChildren[index]
    if(childrenVnode.tag === newChildrenVnode.tag) {
      // 递归的去看深层有没有变化
      updateElement(childrenVnode, newChildrenVnode)
    }else {
      replaceNode(childrenVnode, newChildrenVnode) 
    }
  })

}