---
path: "/how-dark-mode-was-added"
title: "How Dark mode was added"
date: 2020-06-01T00:00:00.000Z
tags: ["Dark Mode"]
type: "tech"
---

One of the fast-growing and interesting web site design trend is Dark Mode. In this article I will discuss how dark-mode was added 
to Neha's Food World. 

Firstly, I installed gatsby-plugin-use-dark-mode. 
Then in the colors.scss file I added the colors which should be used when the users will switch to the dark mode. 

For example, each row in brand-colors will look as following

``` scss
$brand-colors: 
("white",white, #0f0f0f ),
```

The "white" is the name of the color, the second parameter is the color to be used for light mode and the third paramter is the color to be used in the dark mode. 

The following code will create the background and font colors for the dark mode. 

```scss 
  body.dark-mode {
    .is-#{nth($color,1)}-bg{
      background-color: nth($color,3) !important;
    }
    .is-#{nth($color,1)}{
      color: nth($color,3) !important;
    }
  }
  ```

I added a toggle button to the header to allow to switch between light and dark mode as following: 

```Javascript 
<button id="darkModeButton" className="darkModeBtn pad-3-r" onClick={toggleDarkMode}> {darkMode.value ? "☀️" : "🌙"}</button>
```

The following code switches between the dark and light mode: 

```Javascript 
 const darkMode = useDarkMode(false);
  const toggleDarkMode = function(){
    if(darkMode.value) {
        darkMode.disable();
    }
    else {
      darkMode.enable();
    }
  }
```


