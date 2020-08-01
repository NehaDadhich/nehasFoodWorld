---
path: "/making-of-dark-mode"
title: "Dark Mode"
date: 2020-06-19T00:00:00.000Z
tags: ["Dark Mode"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

One of the fast-growing and interesting web site design trend is Dark Mode. This article will discuss how dark-mode was added 
to this website. 

Firstly, gatsby-plugin-use-dark-mode was installed.
Then in the colors.scss file the colors which should be used when the users will switch to the dark mode were added.

For example, each row in brand-colors will look as:

``` scss{numberLines: true}
$brand-colors: 
("white",white, #0f0f0f ),
```

The first parameter is the name of the color, the second parameter is the color to be used for light mode and the third paramter is the color to be used in the dark mode. 

The following code will create the background and font colors for the dark mode. 

```scss{numberLines: true}
  body.dark-mode {
    .is-#{nth($color,1)}-bg{
      background-color: nth($color,3) !important;
    }
    .is-#{nth($color,1)}{
      color: nth($color,3) !important;
    }
  }
  ```

A toggle button was added to the header to switch between light and dark mode as: 

```Javascript{numberLines: true}
 <button id="darkModeButton" className="darkModeBtn" onClick={toggleDarkMode} style={{float: "right"}}> {darkMode.value ?
            <FontAwesomeIcon className="navbar-icon is-black" icon={faSun}/>
              : <FontAwesomeIcon className="navbar-icon is-black" icon={faMoon}/> } 
         </button> 
```

The following code switches between the dark and light mode: 

```Javascript{numberLines: true}
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


