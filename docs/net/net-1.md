## 渲染过程

  1. 构建DOM树(DOM tree)：从上到下解析HTML文档生成DOM节点树（DOM tree）
  2. 构建CSSOM(CSS Object Model)树：加载解析样式生成CSSOM树
  3. 执行JavaScript：加载并执行JavaScript代码（包括内联代码或外联JavaScript文件）
  4. 构建渲染树(render tree)：根据DOM树和CSSOM树,生成渲染树(render tree)；渲染树：按顺序展示在屏幕上的一系列矩形，这些矩形带有字体，颜色和尺寸等视觉属性  
  5. 布局（layout）：根据渲染树将节点树的每一个节点布局在屏幕上的正确位置
  6. 绘制（painting）：遍历渲染树绘制所有节点，为每一个节点适用对应的样式，这一过程是通过UI后端模块完成
	
## 重排或者叫回流（reflow，relayout）

  1. 这个过程就是通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸
  2. 将其安置在浏览器窗口的正确位置
  3. 触发：增加、删除、修改、移动、修改css样式

## 重绘(redraw)
  1. 浏览器会根据元素的新属性重新绘制，使元素呈现新的外观
  2. 重绘不会带来重新布局，并不一定伴随重排
  3. 触发：dom改变，css移动，改变visibility、outline、背景色等属性
  
