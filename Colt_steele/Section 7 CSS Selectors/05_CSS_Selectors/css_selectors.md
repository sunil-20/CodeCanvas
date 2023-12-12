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
## 8. Pseudo-classes and Pseudo-elements
Pseudo-classes and pseudo-elements provide additional ways to select and style elements based on various conditions.

```css
a:hover {
  color: #ff4500;
}

li::before {
  content: "\2022";
  color: #333;
  margin-right: 5px;
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