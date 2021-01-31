
## Introduction to Semantic HTML

When building web pages, we use a combination of non-semantic HTML and *Semantic* HTML. The word semantic means “relating to meaning,” so semantic elements provide information about the content between the opening and closing tags.

By using Semantic HTML, we select HTML elements based on their meaning, not on how they are presented. Elements such as ```<div>``` and ```<span>``` are not semantic elements since they provide no context as to what is inside of those tags.

For example, instead of using a ```<div>``` element to contain our header information, we could use a ```<header>``` element, which is used as a heading section. By using a ```<header>``` tag instead of a ```<div>```, we provide context as to what information is inside of the opening and closing tag.

### Why use Semantic HTML?

* **Accessibility**: Semantic HTML makes webpages accessible for mobile devices and for people with disabilities as well. This is because screen readers and browsers are able to interpret the code better.

* **SEO**: It improves the website SEO, or Search Engine Optimization, which is the process of increasing the number of people that visit your webpage. With better SEO, search engines are better able to identify the content of your website and weight the most important content appropriately.

* **Easy to Understand**: Semantic HTML also makes the website’s source code easier to read for other web developers.

To better understand this, you can think of comparing non-semantic HTML to going into a store with no signs on the aisles. Since the aisles aren’t labeled, you don’t know what products are in those aisles. However, stores that do have signs for each aisle make it a lot easier to find the items you need, just like Semantic HTML.

![semantic html](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/semantic.png)

## Header and Nav
Let’s take a look at some semantic elements that assist in the structure of a web page. A ```<header>``` is a container usually for either navigational links or introductory content containing ```<h1>``` to ```<h6>``` headings.

The example below shows ```<header>``` in action:
```
<header>
  <h1>
     Everything you need to know about pizza!
  </h1>
</header>
```
This can be compared to the code below which uses a ```<div>``` tag instead of a ```<header>``` tag:
```
<div id="header">
  <h1>
    Everything you need to know about pizza!
  </h1>
</div>
```

By using a ```<header>``` tag, our code becomes easier to read. It is much easier to identify what is inside of the ```<h1>```‘s parent tags, as opposed to a ```<div>``` tag which would provide no details as to what was inside of the tag.

A ```<nav>``` is used to define a block of navigation links such as menus and tables of contents. It is important to note that ```<nav>``` can be used inside of the ```<header>``` element but can also be used on its own.

Let’s take a look at the example below:
```
<header> 
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>      
    </ul>
  </nav>
</header>
```
By using ```<nav>``` as a way to label our navigation links, it will be easier for not only us, but also for web browsers and screen readers to read the code.

