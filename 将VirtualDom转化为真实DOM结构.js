// vnode结构：	     {
//   tag,
//   attrs,
//   children,
// }
//https://www.jianshu.com/p/5a1e3b78436f

function render(vnode, container) {
  container.appendChild(_render(vnode));
  // container.appendChild(_render(vnode))
}
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    })
  }
  if(vnode.children) {
    // 子数组进行递归操作
    vnode.children.forEach(child => render(child, dom));
  }
  return dom;
}

// function _render (vnode) {
//   if(typeof vnode = 'number') {
//     vnode = String(vnode);
//   }
//   if(typeof vnode=== 'string') {
//     return  document.createTextNode(vnode)
//   }
//   if(vnode.tag) {
//     const dom=document.createElement(vnode.tag);
//     if(vnode.attrs) {
//       Object.keys(vnode.attrs).forEach(key=> {
//         const value = vnode.attrs[key];
//         dom.setAttribute(key,value);
//       })
//     }
//     if(vnode.children) {
//       vnode.children.forEach(child => render(child,dom))

//     }
//     return dom;
//   }
// }