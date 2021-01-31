An ```<input>``` element with ```type="text"``` creates a single row input field for users to type in the information. However, there are cases where users need to write in more information, like a blog post. In such cases, instead of using an ```<input>```, we could use ```<textarea>```.

The ```<textarea>``` element is used to create a bigger text field for users to write more text. We can add the attributes ```rows``` and ```cols``` to determine the amount of rows and columns for the ```<textarea>```. Take a look:
```
<form>
  <label for="blog">New Blog Post: </label>
  <textarea id="blog" name="blog" rows="5" cols="30">
  </textarea>
</form>
```

### In the code above, an empty <textarea> that is 5 rows by 30 columns is rendered to the page like so:
#
>
>![textarea](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputTextarea.jpg)
>
#

If we wanted an even bigger text field, we could click and drag on the bottom right corner to expand it.

When we submit the form, the value of ```<textarea>``` is the text written inside the box. If we want to add a default value to text to ```<textarea>``` we would include it within the opening and closing tags like so:
```
<textarea>Adding default text</textarea>
```

This code will render a ```<textarea>``` that contains pre-filled text: “Adding default text”.

