import React from 'react';

const requireFeatureImage = require.context(
    `../../../assets/images/`, // Don’t make this a variable
    true, // Whether or not to check subdirectories
    /^.*\.(svg|png|gif|jpg|jpeg|webp|)$/ // Rough regex for extensions, maybe change this for your use case?
  )

const RenderImg = (props) => {
    let path = props.imgDir;
    let imgPath = `./${path.split('images/')[1]}`
    return (
        <figure>
            <img src={requireFeatureImage(imgPath)} alt={props.imgDes}/>
        </figure>
    )
}

export default RenderImg
