The ```<aside>``` element is used to mark additional information that can enhance another element but isn’t required in order to understand the main content. This element can be used alongside other elements such as ```<article>``` or ```<section>```. Some common uses of the ```<aside>``` element are for:

* Bibliographies
* Endnotes
* Comments
* Pull quotes
* Editorial sidebars
* Additional information
Here’s an example of ```<aside>``` being used alongside ```<article>```:
```html
<article>
  <p>The first World Series was played between Pittsburgh and Boston in 1903 and was a nine-game series.</p>
</article>
<aside>
  <p>
   Babe Ruth once stated, “Heroes get remembered, but legends never die.” 
  </p>
</aside>
```

As shown above, the information within the ```<article>``` is the important content. Meanwhile the information within the ```<aside>``` enhances the information in ```<article>``` but is not required in order to understand it.


### Output:

#


> The first World Series was played between Pittsburgh and Boston in 1903 and was a nine-game series.
>
> **Babe Ruth once stated, “Heroes get remembered, but legends never die.”** 
#
