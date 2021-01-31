Every HTML element has a default display value depending on what type of element it is. There are two type of display values: block and inline.

## Block elements:

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

There are various tags which are used as block-level element. Some of the block-level elements are:
- `<address>`
- `<article>`
- `<aside>`
- `<blockquote>`
- `<div>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<form>`
- `<h1>`-`<h6>`
- `<header>`
- `<li>`
- `<main>`
- `<nav>`
- `<ol>`
- `<p>`
- `<section>`
- `<table>`
- `<tfoot>`
- `<ul>`

 etc.

To understand the appearance of the block element, we will apply border to the text which we will learn later. Consider the following code:

```html
<html>
<body>

<div style="border: 1px solid black">Happy coding!!</div>

<p>The DIV element is a block element, and will always start on a new line and take up the full width available (stretches out to the left and right as far as it can).</p>

</body>
</html>

```
### It will show the following output:
>
>![block element](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/block.jpg)
>
#

## Inline elements:

An inline element does not start on a new line and only takes up as much width as necessary.

Some of the inline-elements are:

- `<a>`
- `<button>`
- `<em>`
- `<i>`
- `<img>`
- `<input>`
- `<label>`
- `<select>`
- `<span>`
- `<strong>`
- `<textarea>`
- `<video>`
 etc.

To understand the appearance of the block element, we will apply border to the text which we will learn later. Consider the following code:

```html
<!DOCTYPE html>
<html>
<body>

<p>Welcome to Konfinity <span style="border: 1px solid black"> and this is inline element</span> and we have used "<span>" </p> tag

<p>The SPAN element is an inline element, and will not start on a new line and only takes up as much width as necessary.</p>

</body>
</html>

```
### It will show the following output:
#
>
>![inline element](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inline.jpg)
>
#
