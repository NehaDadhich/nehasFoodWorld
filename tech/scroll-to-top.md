---
path: "/making-of-scroll-to-top"
title: "Scroll To Top"
date: 2021-02-28T00:00:00.000Z
tags: ["Paginaton"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

Scroll To Top is a useful navigation component that brings the user to the top of a page without scrolling up. This article explains how this component is implemented and styled for this website. 

Firstly, I created scrollToTop component using useState and useEffect React hooks as:

  ```Javascript{numberLines: true}
  import React, {useState, useEffect} from 'react';

const ScrollToTop = ({
    showBelow,
}) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
            <button onClick={handleClick} className="scrollTop">^</button>
            }
        </div>
    )
}
export default ScrollToTop
  ```

Then I added style to the component as below: 

```CSS{numberLines: true}
  .scrollTop {
    position: fixed;
    display: inline-block;
    border: 10px;
    padding: 10px 10px 35px;
    border-radius: 50%;
    @extend .is-blue-bg;
    @extend .is-white;
    z-index: 1000;
    max-width: 40px;
    justify-content: center;
    text-align: center;
    line-height: 40px;
    max-height: 40px;
    bottom: 20px;
    margin: 10px;
    animation: fadeIn 0.3s;
    cursor: pointer;
    font-size: 40px;
    right: 2%;
  }

  .scrollTop:hover{
    opacity: 1;
    @extend .is-teal-bg;
    @extend .is-white-bg;
  }

  .scrollTop:focus {outline:0;}
```
Finally, I added the created scrollToTop component to the layout as:

```Javascript{numberLines: true}
...
import ScrollToTop from "../components/scrollToTop";
...
...
 <ScrollToTop showBelow={30}/>
```

That's it! Now, this website has a beautiful scroll to top component for easier navigation.