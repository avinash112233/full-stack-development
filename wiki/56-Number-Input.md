We’ve now gone over two ```type``` attributes for ```<input>``` related to the text. But, we might want our users to type in a number — in which case we can set the ```type``` attribute to… (you guessed it)… ```"number"```!

By setting ```type="number"``` for an ```<input>``` we can restrict what users type into the input field to just numbers (and a few special characters like ```-```, ```+```, and ```.```). We can also provide a ```step``` attribute which creates arrows inside the input field to increase or decrease by the value of the step attribute. Below is the code needed to render an input field for numbers:
```
<form>
  <label for="years"> Years of experience: </label>
  <input id="years" name="years" type="number" step="1">
</form>
```
### Which renders:
#
>
>![number input field with arrow](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputNumber.jpg)
>
#