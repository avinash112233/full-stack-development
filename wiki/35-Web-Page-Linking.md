# Linking to Other Web Pages
One of the powerful aspects of HTML (and the Internet), is the ability to *link* to other web pages.

You can add links to a web page by adding an anchor element ```<a>``` and including the text of the link in between the opening and closing tags.
```
<a>This Is A Link To Wikipedia</a>
```

Wait a minute! Technically, the link in the example above is incomplete. How exactly is the link above supposed to work if there is no URL that will lead users to the actual Wikipedia page?

The anchor element in the example above is incomplete without the ```href``` attribute. This attribute stands for *hyperlink* reference and is used to link to a path, or the address to where a file is located (whether it is on your computer or another location). The paths provided to the ```href``` attribute are often URLs.
```
<a href="https://www.wikipedia.org/">This Is A Link To Wikipedia</a>
```

In the example above, the ```href``` attribute has been set to the value of the URL ```https://www.wikipedia.org/```. The example now shows the correct use of an anchor element.

When reading technical documentation, you may come across the term *hyperlink*. Not to worry, this is simply the technical term for link. These terms are often used interchangeably.
#
# Linking to Relative Page
Thus far you have learned how to link to external web pages. Many sites also link to internal web pages like Home, About, and Contact.

Before we learn how to link between internal pages, let’s establish where our files are stored. When making multi-page static websites, web developers often store HTML files in the root directory or the main folder where all the files for the project are stored. As the size of the projects you create grows, you may use additional folders within the main project folder to organize your code.

```
project-folder/
|—— about.html
|—— contact.html
|—— index.html
```

The example above shows three different files — **about.html, contact.html**, and **index.html** in one folder.

HTML files are often stored in the same folder, as shown in the example above. If the browser is currently displaying **index.html**, it also knows that **about.html** and **contact.html** are in the same folder. Because the files are stored in the same folder, we can link web pages together using a relative path.
```
<a href="./contact.html">Contact</a>
```

In this example, the ```<a>``` tag is used with a relative path to link from the current HTML file to the ```contact.html``` file in the same folder. On the web page, ```Contact``` will appear as a link.

A relative path is a filename that shows the path to a local file (a file on the same website, such as ```./index.html```) versus an absolute path (a full URL, like https://www.workspace.konfinity.com/html which is stored in a different folder). The ```./``` in ```./index.html``` tells the browser to look for the file in the current folder.

