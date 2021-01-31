With ```<aside>```, we learned that we can put additional information next to a main piece of content, but what if we wanted to add an image or illustration? That is where ```<figure>``` and ```<figcaption>``` come in.

```<figure>``` is an element used to encapsulate media such as an image, illustration, diagram, code snippet, etc, which is referenced in the main flow of the document.
```
<figure>
  <img src="overwatch.jpg"/>
</figure>
```
In this code, we created a ```<figure>``` element so that we can encapsulate our ```<img>``` tag. In ```<figure>``` we used the ```<img>``` tag to insert an image onto the webpage. We used the src attribute within the ```<img>``` tag so that we can link the source of the image.

It’s possible to add a caption to the image by using ```<figcaption>```.

```<figcaption>``` is an element used to describe the media in the ```<figure>``` tag. Usually, ```<figcaption>``` will go inside ```<figure>```. This is different than using a ```<p>``` element to describe the content; if we decide to change the location of ```<figure>```, the paragraph tag may get displaced from the figure while a ```<figcaption>``` will move with the figure. This is useful for grouping an image with a caption.
```
<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>
```
In the example above, we added a ```<figcaption>``` into the ```<figure>``` element to describe the image from the previous example. This helps group the ```<figure>``` content with the ```<figcaption>``` content.

While the content in ```<figure>``` is related to the main flow of the document, its position is independent. This means that you can remove it or move it somewhere else without affecting the flow of the document.

