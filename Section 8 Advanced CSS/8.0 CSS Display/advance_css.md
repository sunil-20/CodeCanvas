# CSS `display` Property

```css
/* Block-level elements: 
   - Start on a new line
   - Take up the full width available */
div {
  display: block;
}
/* Example: Block-level element */
div.example-block {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
/* Inline-level elements:
   - Do not start on a new line
   - Only take up as much width as necessary */
span {
  display: inline;
}
/* Example: Inline-level element */
span.example-inline {
  color: green;
  font-weight: bold;
}
/* Inline-level, block-like behavior: 
   - Inline-level, but behaves like a block-level element 
   - Respects box model properties like margin and padding */
img {
  display: inline-block;
}
/* Example: Inline-block element */
img.example-inline-block {
  width: 100px;
  height: 100px;
  border: 2px solid black;
}
/* Hidden: 
   - Element is not displayed at all 
   - Effectively invisible and takes up no space */
.hidden {
  display: none;
}
/* Example: Hidden element */
p.hidden-example {
  color: red;
  font-style: italic;
  /* This paragraph will not be visible on the page */
}
/* Flex container: 
   - Enables a flexible container 
   - Allows using flexbox properties for layout */
.container {
  display: flex;
}
/* Example: Flex container */
.container.flex-example {
  justify-content: space-between;
}
/* Grid container: 
   - Creates a grid container 
   - Allows using grid properties for layout */
.container {
  display: grid;
}
/* Example: Grid container */
.container.grid-example {
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
