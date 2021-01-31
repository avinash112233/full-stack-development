As demonstrated in the previous exercise, media content can be a useful addition to a website. By using a ```<video>``` element, we can add videos to our website. The ```<video>``` element makes it clear that a developer is attempting to display a video to the user.

Some attributes that can alter a video playback include:

* **controls** : When added in, a play/pause button will be added onto the video along with volume control and a fullscreen option.
* **autoplay** : The attribute which results in a video automatically playing as soon as the page is loaded.
* **loop** : This attribute results in the video continuously playing on repeat.
Below is an example of ```<video>``` being used with the controls attribute:
```
<video src="coding.mp4" controls>Video not supported</video>
```
In the code above, a video file named ```coding.mp4``` is being played. The “Video not supported” will only show up if the browser is unable to display the video.

Another tag that can be used to incorporate media content into a page is the ```<embed>``` tag, which can embed any media content including videos, audio files, and gifs from an external source. This means that websites that have an embed button have some form of media content that can be added to other websites. The ```<embed>``` tag is a self-closing tag, unlike the ```<video>``` element.

Below we’ll take a look at ```<embed>``` being used in action.
```
<embed src="download.gif"/>
```
In the example above, ```<embed>``` is being used to add in a gif from a local file known as ```download.gif```. Embed can be used to add local files as well as media content straight from some other websites.

