Now that we’ve learned about some of the most common HTML elements, it’s time to learn how to set up an HTML file.

HTML files require certain elements to set up the document properly. We can let web browsers know that we are using HTML by starting our document with a *document type declaration*.

The declaration looks like this:
```
<!DOCTYPE html>
```

This declaration is an instruction, and it must be the first line of code in your HTML document. It tells the browser what type of document to expect, along with what version of HTML is being used in the document. For now, the browser will correctly assume that the html in ```<!DOCTYPE html>``` is referring to HTML5, as it is the current standard.

In the future, however, a new standard will override HTML5. To make sure your document is forever interpreted correctly, always include ```<!DOCTYPE html>``` at the very beginning of your HTML documents.

Lastly, HTML code is always saved in a file with an **.html** extension.