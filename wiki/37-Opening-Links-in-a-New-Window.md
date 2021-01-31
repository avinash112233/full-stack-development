Have you ever clicked on a link and observed the resulting web page open in a new browser window? If so, you can thank the ```<a>``` element’s ```target``` attribute.

The ```target``` attribute specifies how a link should open.

It’s possible that one or more links on your web page link to an entirely different website. In that case, you may want users to read the linked website, but hope that they return to your web page. This is exactly when the ```target``` attribute is useful!

For a link to open in a new window, the ```target``` attribute requires a value of ```_blank```. The target attribute can be added directly to the opening tag of the anchor element, just like the ```href``` attribute.
```
<a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">The Brown Bear</a>
```

In the example above, setting the ```target``` attribute to ```"_blank"``` instructs the browser to open the relevant Wikipedia page in a new window.

In this exercise, we’ve used the terminology “open in a new window.” It’s likely that you are using a modern browser that opens up websites in new tabs, rather than new windows. Before the advent of browsers with tabs, additional browser windows had to be opened to view more websites. The ```target="_blank"``` attribute, when used in modern browsers, will open new websites in a new tab.


You’ve probably visited websites where not all links were made up of text. Maybe the links you clicked on were images or some other form of content.

So far, we’ve added links that were made up of only text, like the following:
```
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank">Prickly Pear</a>
```

Text-only links, however, would significantly decrease your flexibility as a web developer!

Thankfully, HTML allows you to turn nearly any element into a link by wrapping that element with an anchor element. With this technique, it’s possible to turn images into links by simply wrapping the ```<img>``` element with an ```<a>``` element.
```
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>
```

In the example above, an image of a prickly pear has been turned into a link by wrapping the outside of the ```<img>``` element with an ```<a>``` element.
