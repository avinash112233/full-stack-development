Another built-in validation we can use is to assign a minimum or maximum value for a number field, e.g. ```<input type="number">``` and ```<input type="range">```. To set a minimum acceptable value, we use the min attribute and assign a value. On the flip side, to set a maximum acceptable value, we assign the ```max``` attribute a value. Let’s see this in code:
```
<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>
```
### If a user tries to submit an input that is less than 1 a warning will appear:
#
>
>![prompt on a number field for user to input a value greater than or equal to 1](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputMinMax.jpg)
>
#

A similar message will appear if a user tries to input a number greater than 4.