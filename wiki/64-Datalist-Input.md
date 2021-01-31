Even if we have an organized dropdown list, if the list has a lot of options, it could be tedious for users to scroll through the entire list to locate one option. That’s where using the ```<datalist>``` element comes in handy.

The ```<datalist>``` is used with an ```<input type="text">``` element. The ```<input>``` creates a text field that users can type into and filter options from the ```<datalist>```. Let’s go over a concrete example:
```
<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">

  <datalist id="cities">
    <option value="NYC">New York City</option>
    <option value="Tky">Tokyo</option>
    <option value="Brcln">Barcelona</option>
    <option value="MC">Mexico City</option>
    <option value="Mb">Melbourne</option>
    <option value="Other">Other</option>  
  </datalist>
</form>
```

Notice, in the code above, we have an ```<input>``` that has a list attribute. The ```<input>``` is associated to the ```<datalist>``` via the ```<input>```‘s ```list``` attribute and the ```id``` of the ```<datalist>```.

### From the code provided, the following form is rendered:
#
>
>![blank datalist](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputDataList.jpg)
>
#

### And when field is selected:
#
>
>![rendering datalist](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputDatalist.jpg)
>
#

While ```<select>``` and ```<datalist>``` share some similarities, there are some major differences. In the associated ```<input>``` element, users can type in the input field to search for a particular option. If none of the ```<option>```s match, the user can still use what they typed in. When the form is submitted, the value of the ```<input>```‘s ```name``` and the ```value``` of the option selected, or what the user typed in, is sent as a pair.

