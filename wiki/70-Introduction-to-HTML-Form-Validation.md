Ever wonder how a login page actually works? Or why the combination of a username and password grants you access to a website? The answers lie in *validation*. Validation is the concept of checking user provided data against the required data.

There are different types of validation. One type is *server-side validation*, this happens when data is sent to another machine (typically a server) for validation. An example of this type of validation is the usage of a login page. The form on the login page accepts username and password input, then sends the data to a server that checks that the pair matches up correctly.

On the other hand, we use *client-side validation* if we want to check the data on the browser (the client). This validation occurs before data is sent to the server. Different browsers implement client-side validation differently, but it leads to the same outcome.

Shared among the different browsers are the benefits of using HTML5’s built-in client-side validation. It saves us time from having to send information to the server and wait for the server to send back confirmation or rejection of the data. This can also help us protect our server from malicious code or data from a malicious user. It also allows us to quickly give feedback to users for specific fields rather than having them fill in a form again if the data they input into the form was rejected.

## Requiring an Input

Sometimes we have fields in our ```<form>```s which are not optional, i.e. there must be information provided before we can submit it. To enforce this rule, we can add the ```required``` attribute to an ```<input>``` element.

Take for example:
```
<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <input id="allergies" name="allergies" type="text" required>
  <input type="submit" value="Submit">
</form>
```

### This renders a text box, and if we try to submit the ```<form>``` without filling it out we get this message:
#
>
>![message pop up prompting user to fill in the field](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/inputEmptyValidation.jpg)
>
#

The styling of the message varies from browser to browser, the picture above depicts the message in a Chrome browser. We’ll also continue to show these messages as they appear in Chrome in later exercises.


