In addition to checking the length of a text, we could also add a validation to check how the text was provided. For cases when we want user input to follow specific guidelines, we use the ```pattern``` attribute and assign it a regular expression, or regex. Regular expressions are a sequence of characters that make up a search pattern. If the input matches the regex, the form can be submitted.

Let’s say we wanted to check for a valid credit card number (a 14 to 16 digit number). We could use the regex: ```[0-9]{14,16}``` which checks that the user-provided only numbers and that they entered at least 14 digits and at most 16 digits.

To add this to a form:
```
<form action="/example.html" method="POST">
  <label for="payment">Credit Card Number (no spaces):</label>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>
```

With the pattern in place, users can’t submit the `<form>` with a number that doesn’t follow the regex. 

### When they try, they’ll see a validation message like so:
#
>
>![message prompting user to follow the requested format](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputPattern.jpg)
>
#

If you want to find out more about Regex, read more at MDN’s regex article.

To see it in practice, let’s use the ```pattern``` attribute in HTML!