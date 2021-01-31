In the previous exercise, we were able to use ```min``` and ```max``` to set acceptable minimum and maximum values in a number field. But what about text fields? There are certainly cases where we wouldn’t want our users typing more than a certain number of characters (think about the character cap for messages on Twitter). We might even want to set a minimum number of characters. Conveniently, there are built-in HTML5 validations for these situations.

To set a minimum number of characters for a text field, we add the ```minlength``` attribute and a value to set a minimum value. Similarly, to set the maximum number of characters for a text field, we use the ```maxlength``` attribute and set a maximum value. Let’s take a look at these attributes in code:
```
<form action="/example.html" method="POST">
  <label for="summary">Summarize your feelings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="Submit">
</form>
```

### If a user tries to submit the ```<form>``` with less than the set minimum, this message appears:
#
>
>![prompt on a number field for user to length the input](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputTextlength.jpg)
>
#

And if a user tries to type in more than the maximum allowed number of characters, they don’t get a warning message, but they can’t type it in!

Let’s add this validation to our ```<form>```.