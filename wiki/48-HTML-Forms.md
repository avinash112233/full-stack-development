Forms are a part of everyday life. When we use a physical form in real life, we write down information and give it to someone to process. Think of the times you’ve had to fill out information for various applications like a job, or a bank account, or dropped off a completed suggestion card — each instance is a form!

Just like a physical form, an HTML ```<form>``` element is responsible for collecting information to send somewhere else. Every time we browse the internet we come into contact with many forms and we might not even realize it. There’s a good chance that if you’re typing into a text field or providing an input, the field that you’re typing into is part of a ```<form>```!

In this lesson, we’ll go over the structure and syntax of a ```<form>``` and the many elements that populate it.


## How a Form Works

We can think of the internet as a network of computers which send and receive information. Computers need an HTTP request to know how to communicate. The *HTTP request* instructs the receiving computer on how to handle the incoming information. More information can be found in our article about HTTP requests.

The ```<form>``` element is a great tool for collecting information, but then we need to send that information somewhere else for processing. We need to supply the ```<form>``` element with both the location of where the `<form>`‘s information goes and what HTTP request to make. Take a look at the sample ```<form>``` below:

```
<form action="/example.html" method="POST">
</form>
```

In the above example, we’ve created the skeleton for a ```<form>``` that will send information to example.html as a POST request:

* The ```action``` attribute determines where the information is sent.
* The ```method``` attribute is assigned a HTTP verb that is included in the HTTP request.

Note: HTTP verbs like POST do not need to be capitalized for the request to work, but it’s done so out of convention. In the example above we could have written ```method="post"``` and it would still work.

The ```<form>``` element can also contain child elements. For instance, it would be helpful to provide a header so that users know what this ```<form>``` is about. We could also add a paragraph to provide even more detail. Let’s see an example of this in code:

```
<form action="/example.html" method="POST">
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it.</p>
</form>
```

The example above doesn’t collect any user input, but we’ll do that in the next exercise. For now, let’s practice making the foundation of an HTML ```<form>```!

