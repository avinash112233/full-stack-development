Now that we covered the body of Semantic HTML, let’s focus on what can go in the body. The two elements we’re going to focus on now are ```<section>``` and ```<article>```.

```<section>``` defines elements in a document, such as chapters, headings, or any other area of the document with the same theme. For example, content with the same theme such as articles about cricket can go under a single ```<section>```. A website’s home page could be split into sections for the introduction, news items, and contact information.

Here is an example of how to use ```<section>```:
```
<section>
  <h2>Fun Facts About Cricket</h2> 
</section>
```
In the code above we created a ```<section>``` element to encapsulate the code. In ```<section>``` we added a ```<h2>``` element as a heading.

The ```<article>``` element holds content that makes sense on its own. ```<article>``` can hold content such as articles, blogs, comments, magazines, etc. An ```<article>``` tag would help someone using a screen reader understand where the article content (that might contain a combination of text, images, audio, etc.) begins and ends.

Here is an example of how to use ```<article>```:
```
<section>
  <h2>Fun Facts About Cricket</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```
In the code above, the ```<article>``` element containing a fact about cricket was placed inside of the ```<section>``` element. It is important to note that a ```<section>``` element could also be placed in an ```<article>``` element depending on the context.