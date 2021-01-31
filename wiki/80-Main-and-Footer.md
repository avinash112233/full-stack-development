Two more structural elements are ```<main>``` and ```<footer>```. These elements along with ```<nav>``` and ```<header>``` help describe where an element is located based on conventional web development standards.

The element ```<main>``` is used to encapsulate the dominant content within a webpage. By using ```<main>``` as opposed to a ```<div>``` element, screen readers and web browsers are better able to identify that whatever is inside of the tag is the bulk of the content.

So how does ```<main>``` look when incorporated into our code? That’s a great question.
```
<main>
  <header>
    <h1>Types of Sports</h1>
  </header>
  <article>
    <h3>Baseball</h3>
    <p>
      The first game of baseball was played in Cooperstown, New York in the summer of 1839.
    </p>
  </article>
</main>
```
As we see above, ```<main>``` contains an ```<article>``` and ```<header>``` tag with child elements that hold the most important information related to the page.

The content at the bottom of the subject information is known as the footer, indicated by the ```<footer>``` element. The footer contains information such as:

* Contact information
* Copyright information
* Terms of use
* Site Map
* Reference to top of page links

For example:
```
<footer>
  <p>Email me at tech@konfinity.com</p>
</footer>
```
In the example above, the footer is used to contain contact information. The ```<footer>``` tag is separate from the ```<main>``` element and typically located at the bottom of the content.