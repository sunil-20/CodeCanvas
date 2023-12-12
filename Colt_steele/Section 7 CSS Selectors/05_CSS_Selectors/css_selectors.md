## 1. Universal Selector
The universal selector * selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
  color: black;
}
```
## 2. Type Selector
The type selector selects all instances of a given HTML element type.

```css
p {
  color: #333;
}

h1, h2{  # this is selector lists: h1, h2, h3, p, div...
    color: magenta;
}
```
## 3. Class Selector
The class selector . selects elements with a specific class attribute.

```css
.button {
  background-color: #3498db;
  color: #fff;
}
```
```html
<button class="button">Click me</button>
```
## 4. ID Selector
The ID selector # selects a single element with a specific(unique in the page) ID attribute.

```css
#header {
  font-size: 24px;
}

#search{
    background-color: skyblue;
}
```
```html
<div id="header">Page Header</div>

<nav>
    <label for="search"></label>
    <input type="text" placeholder="search" id="search">
    <button>Log In</button>
    <button>Sign Up</button>
</nav>
```
## 5. Descendant Selector
The descendant selector selects an element that is a descendant of another specified element.

```css
article p {
  font-style: italic;
}

li a{
    color: teal;
}

header a{
    font-size: 30px;
    color: teal;
}

#dislikes a{
    color: red;
 font-weight : bold;
}
```
## 6. Child Selector
The child selector > selects a direct child of a specified element.

```css
/* direct children of ul. */
ul > li {
  list-style-type: square;
}
/* direct children of div. */
div > li{
    color: white;
}
```
## 7. Attribute Selector
The attribute selector selects elements with a specific attribute or attribute value.

[mdn_attribute_selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

```html
 <input type="text" placeholder="search" id="search">
 <input type="password" placeholder="password">
```
```css
/* this selects all inputs */
input{
    color: red;
}
/* this selects input with type=text only */
input[type="text"] {
  border: 1px solid #ccc;
}
/* <a> element with an href containing "example" */
a[href*="example"]{
    font-size: 2em;
}
/*<a> element with an href ending ".org" */
a[href$=".org"]{
    font-style: italic;
}
/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"]{
    padding: 2px;
}
```
## 8. Pseudo-elements 
[pseudo-element-mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

Pseudo-elements provide additional ways to select and style elements based on various conditions.

- ::after
- ::before
- ::first-letter
- ::first-line
- ::selection
```css
li::before {
  content: "\2022";
  color: #333;
  margin-right: 5px;
}
h2::first-letter{
    color:red;
}

p::first-line{
    color: red;
}

p::selection{
    background-color:orange;
}

```
## 9. Combinators
Combinators are used to combine multiple selectors to create more complex and specific selections.

Descendant combinator: (space)
Child combinator: >
```css
footer > a{
    color: black;
}
```
Adjacent sibling combinator: +
```css
input + button{
    background-color: black;
}
```
General sibling combinator: ~
```css
nav ul {
  margin: 0;
}

article > p {
  font-weight: bold;
}

h2 + p {
  margin-top: 10px;
}

h2 ~ p {
  margin-left: 20px;
}
```
## 10. Adjacent Selectors (similar to combinators)
Selects only the paragraphs that are immediately preceded by an <h1> in this case.
```css
h1 + p{
    color: red;
}
```
## CSS Specificity
---
CSS specificity is a set of rules that determines which styles are applied to an element when multiple conflicting styles are present. Specificity is crucial for resolving style conflicts and ensuring that the correct styles are applied to HTML elements.

Specificity is calculated based on the following factors:

## 1. Inline Styles:
 Styles applied directly to an element using the style attribute have the highest specificity.

```html
<div style="color: red;">This text is red.</div>
```
## 2. ID Selectors: 
Styles applied with an ID selector (#) have a higher specificity than class selectors or type selectors.

```css
#unique-element {
  font-size: 18px;
}
```
## 3. Class Selectors, Attribute Selectors, and Pseudo-Classes: 
Styles applied with class selectors (.classname), attribute selectors ([attribute]), or pseudo-classes (:hover) have the same specificity.

```css
.important-text {
  font-weight: bold;
}

[type="text"] {
  border: 1px solid #ccc;
}
```
Pseudo-Classes: specifies special state of the selected element(s)
- :active
- :checked
- :first
- :first-child
- :hover
- :not()
- :nth-child()
- :nth-of-type()
```css
a:hover {
  color: #ff4500;
}
```
## 4. Type Selectors and Pseudo-Elements:
 Styles applied with type selectors (element) and pseudo-elements (::before) have the lowest specificity.

```css
p {
  line-height: 1.5;
}

li::before {
  content: "\2022";
  color: #333;
}
```
When there's a conflict between styles, the browser uses specificity to determine which style to apply. In cases where two conflicting styles have the same specificity, the one that appears later in the stylesheet or HTML document takes precedence (this is known as the "cascading" part of CSS).


## Inheritance in CSS

In CSS, inheritance refers to the mechanism by which certain properties of an HTML element are passed down to its children. In other words, child elements inherit styles from their parent elements.
```html
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <title>CSS Inheritance Example</title>
</head>
<body>
  <div class="parent">
    <p>This is a paragraph inside a parent div.</p>
  </div>
</body>
</html>
```

```css
/* Styles for the parent div */
.parent {
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: blue;
}

/* Additional style for the paragraph inside the parent */
.parent p {
  font-weight: bold;
  color: red;
}
```
In this example:

The `.parent` class styles the parent `div` and sets a font family, size, and color.
The `.parent` p selector styles the p (paragraph) element inside the parent div and sets a different color and a bold font weight.
Since the child p element is inside the parent div, it inherits the font family, size, and color from its parent. However, it also has its own styles (color and font weight) that override the inherited styles.

This way, inheritance allows you to establish a baseline style at a higher level (e.g., on a parent container) and then selectively apply additional or modified styles to specific child elements. It simplifies the styling process and makes it easier to maintain a consistent look and feel throughout a website.