Checkboxes work well if we want to present users with multiple options and let them choose one or more of the options. However, there are cases where we want to present multiple options and only allow for one selection — like asking users if they agree or disagree with the terms and conditions. Let’s look over the code used to create radio buttons:
```
<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>
```
### Which renders:
#
>
>![input radio buttons](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputRadio.jpg)
>
#

Notice from the code snippet, radio buttons (like checkboxes) do not display their value. We have an associated ```<label>``` to represent the value of the radio button. To group radio buttons together, we assign them the same ```name``` and only one radio button from that group can be selected.