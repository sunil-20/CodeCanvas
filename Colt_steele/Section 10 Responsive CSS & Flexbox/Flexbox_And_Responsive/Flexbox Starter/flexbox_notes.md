## Flexbox Display Property
In CSS (Cascading Style Sheets), the display property is used to specify the display behavior of an element. Flexbox is a layout model in CSS that is designed for building complex and responsive layouts with ease. The display property is crucial when working with flex containers and flex items. When you set an element to display: flex;, it becomes a flex container, and its direct children become flex items.

## Flex Container:

To create a flex container, set the display property of the container to flex (turn on flex).
```css
.flex-container {
  display: flex;
}
```
## Flex Items:

The direct children of a flex container become flex items. You can control the layout of these items using various properties.
```css
.flex-item {
  /* Additional styles for flex items */
}
```
## Inline Flex Container:

You can also use display: inline-flex; to create an inline-level flex container, which allows the container to behave like an inline element while still using flex layout.
```css
.inline-flex-container {
  display: inline-flex;
}
```
## Responsive Layouts:

Flexbox is particularly useful for creating responsive layouts. By using the flex property on flex items, you can control how they grow or shrink relative to each other.
Here's a simple example:

```css
.container {
  display: flex;
}

.item {
  flex: 1; /* This makes the item flexible, taking up available space */
  /* Additional styles for flex items */
}
```
In this example, all items inside the flex container will have equal width, and they will adjust their size based on the available space.
## Flex direction
The size of the div inside the container might not be 200*200 as specified if the container size doesn't fit divs if flex has been initialized in the container.
```css
#container{
    flex-direction: row-reverse; ## Reverse the row right to left.
    flex-direction: row; ## default, main axis
    flex-direction: column; ## cross axis
    flex-direction: column-reverse;
}
```
## Justify contents
```css
#container{
    justify-content: flex-start; ## default
    justify-content: flex-end; ## move to right end.
    justify-content: center; ## center position
    justify-content: space-between; ## doesn't consider the space in outside edges.
    justify-content: space-around; ## evenly distribute the space around them but edges are half.
    justify-content: space-evenly; ## evenly distribute all space between and edge.
}
```