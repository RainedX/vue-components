// 由一个组件，向上找到最近的指定组件
const findComponentUpward = (context, componentName) => {
  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.name;
    }
  }
  return parent;
};

// 由一个组件，向上找到所有的指定组件
const findComponentsUpward = (context, componentName) => {
  let parents = [];
  let parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent);
    }

    return parents.concat(findComponentUpward(parent, componentName));
  } else {
    return [];
  }
};

// 由一个组件，向下找到最近的指定组件
const findComponentDownward = (context, componentName) => {
  const childrens = context.$children;
  let children = null;
  //深度优先遍历
  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) {
          break;
        }
      }
    }
  }
  return children;
};

// 由一个组件，向下找到最近的指定组件
const findComponentsDownward = (context, componentName) => {

};

// 由一个组件，向下找到最近的指定组件
const findBrothersComponents = (context, componentName) => {

};

export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrothersComponents
};
