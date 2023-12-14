[mdn_transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

**Transition syntax**:
 Property Name | Duration | Timing Function | Delay

- Example code
```css
    .circle{
        width: 300px;
        height: 300px;
        background-color:magenta;
        transition: 3s;
    }
```
transition only background color while border radius changes immediately

```css
.circle{
    transition: background-color 3s;
    }
```
adding delay: transition start after specified delay, ie in this example, the color changes after 1sec 

```css
.circle{
transition: background-color 3s 1s;
}
```
specify all transitions

```css
.circle{
transition: all 3s 1s;
}
```
multiple selections

```css
.circle{
transition: background-color 1s, border-radius 3s;
}
```