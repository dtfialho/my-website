---
title: 'Creating a simple accordion with HTML and CSS'
date: '2022-07-13T12:01:42-0300'
hero_image: '/img/posts/accordion-simples-com-html-e-css.jpg'
excerpt: 'On this post I show you how to build an accordion using only HTML and CSS, without a single line of Javascript'
---

Hello everyone! Coming back once more, today I bring a very quick post about a feature that is very common to see being used. There are several ways to create an accordion and in this post I'm bringing you a very simple version using only HTML and CSS, without a single line of Javascript.

Well, let's go straight to the point, the code is very simple:
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML and CSS Accordion" src="https://codepen.io/dtfialho/embed/OJvRjxr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dtfialho/pen/OJvRjxr">
  HTML and CSS Accordion</a> by Diego T. Fialho (<a href="https://codepen.io/dtfialho">@dtfialho</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Explaining the code

```markup
<div class="accordion">
  ...
</div>
```
```css
.accordion {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}
```
For the main accordion container we just use a `div` with the `accordion` class. We've added a border so you can see the accordion's dimensions more easily, and we've rounded the edges hiding the overflow to make sure the edges are rounded.

```markup
<div class="accordion-item">
  ...
</div>
```
```css
.accordion-item {
  overflow: hidden;
}
.accordion-item:not(:last-child) {
  border-bottom: 1px solid #fff;
}
```
Each accordion item will be a `div` with the `accordion-item` class. Here we have two rules one to hide the overflow, so when the accordion is closed its contents will not appear. Another to add a border, so we can see a separation between each item.

Within each `accordion-item` we have three elements. A checkbox `input`, a `label` for the input and a `div` for the content.

```markup
<input type="checkbox" id="accordion-item-1" class="item-input" />
<label for="accordion-item-1" class="item-label">...</label>
```
```css
.item-input {
  display: none;
}
.item-label {
  display: flex;
  justify-content: space-between;
  background-color: #282a36;
  color: #fff;
  padding: 16px;
}
.item-label::after {
  content: '>';
  width: 1em;
  height: 1em;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}
```
Let's hide the input with a `display: none` and our label takes a `display: flex` with `justify-content: space-between`. Here I used the `::after` pseudo element to create an icon that has a transition and is always on the right side of the label, but we can also use an icon in svg or an image to make it cuter, for now I'll leave it like that and you can use your creativity to improve. :)

```markup
<div class="item-content">...</div>
```
```css
.item-content {
  transition: all 0.3s ease-in-out;
  max-height: 0;
  padding: 0 16px;
}
```
Finally we have our `div` that will have the contents of each accordion item, here we start with `max-height: 0` to "hide" it.

```css
.item-input:checked ~ .item-label::after {
  transform: rotate(90deg);
}
.item-input:checked ~ .item-content {
  max-height: 100vh;
  padding: 16px;
}
```
And here is where the magic happens. When clicking on the label, the input becomes `checked` so we use the `:checked` pseudo class and add a `max-height: 100vh` to the content div, making it visible and rotating our "icon". When clicking on the label again, the rule does not apply and the content is hidden again.

Well folks, that's it for now. I hope you liked it and any feedback just comment on [twitter](https://twitter.com/dtfialho). Regards and see you next post!
