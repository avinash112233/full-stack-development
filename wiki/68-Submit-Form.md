Remember, the purpose of a form is to collect information that will be submitted. That’s the role of the submit button — users click on it when they are finished with filling out information in the ```<form>``` and they’re ready to send it off. Now that we’ve gone over how to create various input elements, let’s now go over how to create a submit button!

To make a submit button in a ```<form>```, we’re going to use the reliable ```<input>``` element and set the type to ```"submit"```. For instance:
```
<form>
  <input type="submit" value="Submit">
</form>
```

### Which renders:
#
>
>![submit button](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputSubmit.jpg)
>
#

Notice in the code snippet that the ```value``` assigned to the ```<input>``` shows up as text on the submit button. If there isn’t a ```value``` attribute, the default text, ```Submit``` shows up on the button.

Let’s now add this element to make our ```<form>```s complete!