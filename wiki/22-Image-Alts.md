Part of being an exceptional web developer is making your site accessible to users of all backgrounds. In order to make the Web more inclusive, we need to consider what happens when assistive technologies such as screen readers come across image tags.

The ```alt``` attribute, which means alternative text, brings meaning to the images on our sites. The ```alt``` attribute can be added to the image tag just like the ```src``` attribute. The value of ```alt``` should be a description of the image.
```
<img src="#" alt="A field of yellow sunflowers" />
```

The ```alt``` attribute also serves the following purposes:

* If an image fails to load on a web page, a user can mouse over the area originally intended for the image and read a brief description of the image. This is made possible by the description you provide in the ```alt``` attribute.
* Visually impaired users often browse the web with the aid of screen reading software. When you include the ```alt``` attribute, the screen reading software can read the image’s description out loud to the visually impaired user.
* The ```alt``` attribute also plays a role in Search Engine Optimization (SEO), because search engines cannot “see” the images on websites as they crawl the internet. Having descriptive alt attributes can improve the ranking of your site.

