In addition to images, HTML also supports displaying videos. Like the ```<img>``` tag, the ```<video>``` tag requires a ```src``` attribute with a link to the video source. Unlike the ```<img>``` tag however, the <video> element requires an opening and a closing tag.
```
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
```

In this example, the video source (src) is ```myVideo.mp4``` The source can be a video file that is hosted alongside your webpage, or a URL that points to a video file hosted on another webpage.

After the src attribute, the ```width``` and ```height``` attributes are used to set the size of the video displayed in the browser. The ```controls``` attribute instructs the browser to include basic video controls: pause, play and skip.

The text, “Video not supported”, between the opening and closing video tags will only be displayed if the browser is unable to load the video.