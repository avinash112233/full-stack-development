So far the types of inputs we’ve allowed were all single choices. But, what if we presented multiple options to users and allow them to select any number of options? Sounds like we could use checkboxes! In a ```<form>``` we would use the ```<input>``` element and set ```type="checkbox"```. Examine the code used to create multiple checkboxes:
```
<form>
  <p>Choose your courses:</p>
  <label for="html">HTML</label>
  <input id="html" name="course" type="checkbox" value="html">
  <label for="css">CSS</label>
  <input id="css" name="course" type="checkbox" value="css">
  <label for="javascript">Javascript</label>
  <input id="javascript" name="course" type="checkbox" value="javascript">
</form>
```
### Which renders:
#
>
>![table data](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputCheckbox.jpg)
>
#

Notice in the example provided:

* there are assigned values to the ```value``` attribute of the checkboxes. These values are not visible on the form itself, that’s why it is important that we use an associated ```<label>``` to identify the checkbox.
* each ```<input>``` has the same value for the ```name``` attribute. Using the same ```name``` for each checkbox groups the ```<input>```s together. However, each ```<input>``` has a unique id to pair with a ```<label>```.
