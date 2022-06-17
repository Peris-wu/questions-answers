## grid布局
容器的属性:
1. grid-template-columns
   值:
   example 100px 100px 100px -> **3列 宽为100**
   也可以通过repeat()实现
   repeat(3,100px) = 100px 100px 100px
   repeat(auto-fill,100px) **容器能存放最多的个数，超出的换行**
   repeat(3,1fr) **3等分**
   minmax(150px,350px) **宽度最小为150px，最大为350**

2. grid-template-rows
   **与列类似**
3. gap(间距)
   gap: 5px 10px **行间距5px 列间距10px**
   
4. grid-template-areas
   区域划分
5. grid-auto-flow
   排放方式默认为row
   '1,2,3' **row**
   '1
    2           **column**
    3
   '
6. justify-items
   item水平对齐方式
7. align-items
   item垂直对齐方式
8. justify-content
   content水平对齐方式
9.  align-content
   content垂直对齐方式
10. grid-auto-columns
11. grid-auto-rows
    多出来的item 设置高度

项目的属性:
1. grid-column: 1 / 3 垂直方向所占宽度 1 / 3= 占据两个单元格的宽度
2. grid-row: 1 / 3

3. grid-area: 指定当前item的区域
4. justify-self: 自身的水平对齐方式
5. align-self: 自身的垂直对齐方式