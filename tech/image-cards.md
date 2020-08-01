---
path: "/making-of-image-cards"
title: "Image Cards"
date: 2020-06-20T00:00:00.000Z
tags: ["Image Cards","Gatsby images"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

One of the ideas was that the recipes will be displayed as image cards with images and information. This article explains how this was achieved.

Firstly, the following dependencies were installed through npm:
- gatsby-remark-images
- gatsby-remark-copy-linked-files
- gatsby-transformer-sharp
- gatsby-plugin-sharp

The recipePreview.js file was created to display each recipe as an image card as below:

```Javascript{numberLines: true}
export default function RecipePreview ({title, path, tags, description, displayImage, date }) {
  return  <div className="margin-6-b margin-5-r">
  <Link to={path} className="link" id="path">
    <div className="grow image-card is-light-grey-bg">
    <Img
          fluid={displayImage.childImageSharp.fluid}
          className="cover-image"
          
        />
      <div className="image-card-container is-black">
        <h2> <strong>{title} </strong></h2> 
        <div className="tags-container"> {styleTags(tags)} </div>
        <p className="margin-1-b margin-0-t">{description}</p>
        <p className="small-text">{date}</p>
      </div>
    </div>
  </Link>
  </div>
}

export const styleTags = (tags) => 
tags.map((tag) => (
  <Link to={`/tags/${kebabCase(tag)}`} className="tag-link margin-3-b"> <p className="tags margin-1-tb margin-1-r">{tag} </p></Link>
))
 ```

 The advantage of having a separate component as RecipePreview is that it can be reused anywhere, only the required data needs to be provided. 

 The styles were defined in images.scss as:
 
 ```scss{numberLines: true}
   .image-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    height: 550px;
    border-radius: 5px;
  }
 ```

 For desktops, the height was reduced: 

 ```scss{numberLines: true}
  @media only screen and (min-width: 768px){
      .image-card {
        height: 480px;
      }
 ```

 The hover effect was added:

 ```scss{numberLines: true}
 .image-card:hover {
    -ms-transform: scale(1.08); /* IE 9 */
    -webkit-transform: scale(1.08); /* Safari 3-8 */
    transform: scale(1.08);
  }
 ```

 For dark-mode, the box-shadow was changed to a white colour: 
```scss{numberLines: true}
  .dark-mode .image-card{
    box-shadow: 0 2px 4px 0 #F0F0F1;
  }
  ```

  Similarly, tech-card were created for the displaying technology articles as cards.

