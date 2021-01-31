At this point, we have all the content we want on our page. Since we have so much content, it doesn’t all fit on the screen. How do we make it easier for a user to jump to different portions of our page?

When users visit our site, we want them to be able to click a link and have the page automatically scroll to a specific section.

In order to link to a target on the same page, we must give the target an id, like this:
```
<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>
```

In this example, the ```<p>``` element is assigned an ```id``` of “top” and the ```<h1>``` element is assigned “bottom.” An id can be added to most elements on a webpage.

An ```id``` should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the ```#``` character and the target element’s ```id```.
```
<ol>
  <li><a href="#top">Top</a></li>
  <li><a href="#bottom">Bottom</a></li>
</ol>
```
In the example above, the links to ```<p id="top">``` and ```<h1 id="bottom">``` are embedded in an ordered list. These links appear in the browser as a numbered list of links. An ```id``` is especially helpful for organizing content belonging to a ```div```!