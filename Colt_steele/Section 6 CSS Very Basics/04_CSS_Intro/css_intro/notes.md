# HTML (Hypertext Markup Language):

- **Nouns:** Structure, Elements, Content, Tags
- **Adjectives:** Hierarchical, Semantic
- **Verbs:** Organize, Define, Structure
- **Intuitive Meaning:** HTML is like the blueprint of a webpage. It uses tags to structure and organize content hierarchically. Each tag represents an element, and together they create a semantic structure for the content on a webpage.

# CSS (Cascading Style Sheets):

- **Nouns:** Style, Presentation, Properties, Selectors
- **Adjectives:** Stylish, Visual, Cascading
- **Verbs:** Design, Format, Cascade
- **Intuitive Meaning:** CSS is the stylist of the webpage. It defines how HTML elements look and appear on the screen. It adds style, color, layout, and other visual aspects to the structured content defined by HTML.

# JavaScript:

- **Nouns:** Behavior, Interactivity, Functions, Variables
- **Adjectives:** Dynamic, Interactive, Client-side
- **Verbs:** Execute, Manipulate, Respond
- **Intuitive Meaning:** JavaScript is the interactive performer of the webpage. It adds behavior to the structure and style defined by HTML and CSS. It allows the webpage to respond to user actions, manipulate content dynamically, and create a more engaging user experience.

In summary, HTML provides the structure, CSS adds style, and JavaScript brings interactivity to create a complete and dynamic web page. Think of HTML as the skeleton, CSS as the clothing, and JavaScript as the muscle that makes the webpage come to life.

# Major CSS Syntax
- For external stylesheet link is provided in the `<head> </head>` tag.
```<head>
  <link
    rel="stylesheet" 
    href="./style.css"
  />
  <meta charset="UTF-8">
  <title>External</title>
</head>
```
markdown
# A. CSS Image property

## 1. Background Image Property

The `background-image` property is used to set the background image for an element.
```css 
element {
  background-image: url('image.jpg');
}
```
## 2. Background Repeat Property
The background-repeat property defines how a background image should be repeated.

```css
element {
  background-repeat: repeat-x; /* repeat horizontally */
  background-repeat: repeat-y; /* repeat vertically */
  background-repeat: no-repeat; /* do not repeat */
}
```
## 3. Background Size Property
The background-size property specifies the size of the background image.
```css
element {
  background-size: cover; /* cover the entire container */
  background-size: contain; /* fit within the container */
  background-size: 50% 50%; /* custom size */
}
```
## 4. Background Position Property
The background-position property sets the starting position of the background image.
```css
element {
  background-position: center; /* center the image */
  background-position: top right; /* position from top right corner */
  background-position: 50% 25%; /* custom position */
}
```
## 5. Image Width and Height
The width and height properties can be used to set the dimensions of an image.

```css
img {
  width: 100px;
  height: 100px;
}
```
## 6. Responsive Images with Max-Width
To make images responsive, you can set a maximum width using the max-width property.
```css
img {
  max-width: 100%;
  height: auto;
}
```
## 7. Image Opacity
The opacity property can be used to set the transparency of an image.
```css
img {
  opacity: 0.7; /* 70% transparent */
}
```
## 8. Image Hover Effects
You can apply hover effects to images using the :hover pseudo-class.

## Select every other text input.
```css
input[type="text"]: nth-of-type(2n){
    border: 2px solid red;
}
```
# B. CSS text property
properties:

## 1. font-family:

Specifies the font for the text.
```css
body {
  font-family: Arial, sans-serif;
}
```
## 2. font-size:

Sets the size of the font.( xx-small, small, x-large, xx-large, xxx-large)
```css
p {
  font-size: 16px;
  font-size: x-small;
  font-size: medium;
  /* relative size */
  font-size: smaller;
  font-size: larger;
  font-size: 2em;
  font-size: 80%;
  /* global values */
  font-size: inherit;
  font-size: initial;
  font-size: unset;
}
```
## 3. font-weight:

Defines the thickness of the characters in the text.
```css
h1 {
  font-weight: bold;
  font-weight: 700;
  font-weight: bolder; # bolder than its parent
  font-weight: lighter; # lighter than its parent
  width: 50% # set the width of h1 to 50% of the screen.

}
```
## 4. font-style:

Specifies the style of the font (normal, italic, or oblique).
```css
em {
  font-style: italic;
  font-weight: normal;
}
```
## 5. color:

Sets the color of the text.
```css
span {
  color: #333333;
}
```
## 6. line-height:
Controls the height of a line of text.
```css
p {
  line-height: 1.5;
  line-height: normal;
  line-height: 3em;
  line-height: 150%;
  line-height: 32px;
}
```
## 7. text-align:

Aligns the text within its container (left, right, center, or justify).
```css
div {
  text-align: center;
}
```
## 8. text-decoration:

Adds decorations to text (underline, underline dotted, overline, line-through, dashed, double, solid).
```css
a {
  text-decoration: none; # no underline in anchor tags as eg.
  text-decoration: underline;
  text-decoration: blue underline;
  text-decoration: blue underline wavy;
}
```
## 9. text-transform:

Changes the capitalization of text.
```css
h2 {
  text-transform: uppercase;
}
```
## 10. letter-spacing:

Adjusts the space between characters.
```css
p {
  letter-spacing: 1px;
}
```
## 11. word-spacing:
Adjusts the space between words.
```css
p {
  word-spacing: 2px;
}
```