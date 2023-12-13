## 1. Border Properties
[link to mdn_border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
- border-width
Controls the thickness of the border.
- border-color
Controls the color.
-border-style
Controls the line style- dashed, solid, wavy etc.

**shorthand property to assign border values**

border:medium dashed green; ( width|style|color)
example

```html
<div class="card">
  <img alt="" src="https://assets.codepen.io/123865/dog.png">
  <h1>I Am Dog</h1>
</div>
```
```css
.card{
    width:210px;
    border-color: grey;
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    text-align: center;
}
img{
    width:200px;
    border: 5px solid rgb(236, 183, 191);
    border-radius: 50%;
}
```
## 2. Padding

[mdn_padding_link](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

Padding is the space between the content, the actual content box, and the border of an element. Intuitive example: padding between the item and box while shipping something.
<img src="padding.png" alt="Alt Text" width="400" height="300">

- some major properties:
```css
element {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding: 10px; /* padding around*/

}
element {
    padding: 10px 20px 15px 5px; /* top right bottom left */
}

```