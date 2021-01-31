Radio buttons are great if we want our users to pick one option out of a few visible options, but imagine if we have a whole list of options! This situation could quickly lead to a lot of radio buttons to keep track of.

An alternative solution is to use a dropdown list to allow our users to choose one option from an organized list. Here’s the code to create a dropdown menu:
```
<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>
```
### Which renders:
#
>
>![dropdown list with first option](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputDropdown.jpg)
>
#

### And if we click on the field containing the first option, the list is revealed:
#
>
>![dropdown list with the all options](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputDropdownList.jpg)
>
#

Notice in the code that we’re using the element ```<select>``` to create the dropdown list. To populate the dropdown list, we add multiple ```<option>``` elements, each with a value attribute. By default, only one of these options can be selected.

The text rendered is the text included between the opening and closing ```<option>``` tags. However, it is the value of the ```value``` attribute that is used in ```<form>``` submission (notice the difference in the text and value capitalization). When the ```<form>``` is submitted, the information from this input field will be sent using the ```name``` of the ```<select>``` and the ```value``` of the chosen ```<option>```. For instance, if a user selected Pizza from the dropdown list, the information would be sent as ```"lunch=pizza"```.

