## 1. Opacity and the alpha channel.
The last 0.5 is alpha value which range from 0 to 1.
rgba(0, 209, 112, 0.5)

In hex it is from 00 to FF
```css
#rgba{
    background-color: #00cca0FF;
}
```
--
## 2. CSS Position property

[mdn_position_link](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

In CSS (Cascading Style Sheets), the `position` property is used to control the positioning of an element within its containing element. There are several values for the `position` property, and the major ones include:

## A. Static:

- This is the default value.
- Elements with `position: static;` are positioned according to the normal flow of the document.
- The `top`, `right`, `bottom`, and `left` properties have no effect on statically positioned elements.
```css
element {
  position: static;
}
```
## B. Relative Positioning

An element with `position: relative;` is positioned relative to its normal position in the document flow. You can then use the `top`, `right`, `bottom`, and `left` properties to adjust the position relative to its normal position.
```css
element {
  position: relative;
  top: 10px;
  left: 20px;
}
```
In the above example, the element is shifted 10 pixels down (`top: 10px;`) and 20 pixels to the right (`left: 20px;`) from its normal position in the document flow. Adjust the values as needed for the desired layout.

## C. Absolute Positioning:

- An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

- If no positioned ancestor is found, it is positioned relative to the initial containing block (usually the <html> element).
```css
#absolute #middle{
    position: absolute;
    top: 50px;
    left: 50px;
}
```
The position is based on root position. If we want to change with relative to its #absolute section, we need to first position the section as relative.
```css
#absolute{
    position: relative;
}
```
Now it is positioned based on the section not based on the root.
```html
    <section id="absolute">
        <h2>Absolute</h2>
        <div></div>
        <div id="middle"></div>
        <div></div>
    </section>
```
## D. Fixed Positioning:
- An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
- Fixed elements do not affect the normal flow of the document. Stay fixed while scrolling.
```css
element {
  position: fixed;
  top: 0;
  right: 0;
}
```
## E. Sticky Positioning:
- An element with position: sticky; is positioned based on the user's scroll position.
- It is treated as relative positioned until it crosses a specified point, then it is treated as fixed.
```css
element {
  position: sticky;
  top: 50px;
}
```