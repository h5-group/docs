# 代码风格

## 文件名

文件除 index 外，使用大驼峰

文件夹使用小写命名

## 变量

变量使用小驼峰，存在引入冲突时，变量名前增加下划线

## 函数

函数优先使用箭头函数

函数名使用小驼峰

## 样式命名

例子：

```html
<div class="tip">
  <div class="tip-content">
    <p class="tip-content-text">{{ _content }}</p>
  </div>
  <div
    v-if="_closable"
    class="tip-confirm"
    role="button"
    @click="refBaseWindow?.close()"
  >
    确定
  </div>
</div>
```
