If we want to create an input field in our ```<form>```, we’ll need the help of the ```<input>``` element.

The ```<input>``` element has a ```type``` attribute which determines how it renders on the web page and what kind of data it can accept.

The first value for the ```type``` attribute we’re going to explore is ```"text"```. When we create an ```<input>``` element with ```type="text"```, it renders a text field that users can type into. It’s also important that we include a ```name``` attribute for the ```<input>``` — without the ```name``` attribute, information in the ```<input>``` won’t be sent when the ```<form>``` is submitted. We’ll explain more about submissions and the submit button in a later exercise. For now, let’s examine the following code that produces a text input field:
```
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
</form>
```

Here’s a screen shot of how the rendered form looks like on a web page for the Chrome browser (different browsers have different default rendering). When initially loaded, it will be an empty box:

### Output:
#
>
>![blank input field](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/input.jpg)
>
#

After users type into the ```<input>``` element, the value of the value attribute becomes what is typed into the text field. The value of the value attribute is paired with the value of the name attribute and sent as text when the form is submitted. For instance, if a user typed in “important details” in the text field created by our ```<input>``` element:

### Output:
#
>
>![input field with value](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputValue.jpg)
>
#

When the form is submitted, the text: ```"first-text-field=important details"``` is sent to ```/example.html``` because the value of the ```name``` attribute is ```"first-text-field"``` and the ```value``` of value is ```"important details"```.

We could also assign a default value for the ```value``` attribute so that users have a pre-filled text field when they first see the rendered form like so:
```
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field" value="already pre-filled">
</form>
```
Which renders:

### Output:
#
>
>![prefilled text box](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputPrefilled.jpg)
>
#