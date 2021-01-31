In the previous exercise we created an ```<input>``` element but we didn’t include anything to explain what the ```<input>``` is used for. For a user to properly identify an ```<input>``` we use the appropriately named ```<label>``` element.

The ```<label>``` element has an opening and closing tag and displays text that is written between the opening and closing tags. To associate a ```<label>``` and an ```<input>```, the ```<input>``` needs an id attribute. We then assign the for attribute of the ```<label>``` element with the value of the id attribute of ```<input>```, like so:
```
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <input type="text" name="food" id="meal">
</form>
```


### Output:
#
>
>![rendered form with labeled text field](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputLabel.jpg)
>
#

Look, now users know what the ```<input>``` element is for! Another benefit for using the ```<label>``` element is when this element is clicked, the corresponding ```<input>``` is highlighted/selected.

Let’s see the ```<label>``` element in action!

