import React from 'react'

const GalleryScroll = ({heroImage, image1 ,image2 ,image3, image4, image5, image6, image7}) => {
  return (
    <div>
    <div className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={heroImage}/>
    </div>
    {!image1?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image1}/>
    </div>
    }
       {!image2?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image2}/>
    </div>
    }
        {!image3?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image3}/>
    </div>
    }
        {!image4?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image4}/>
    </div>
    }
        {!image5?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image5}/>
    </div>
    }
        {!image6?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image6}/>
    </div>
    } 
            {!image7?.length > 0 &&
    <div  className="grid border-2 hover:border-black bg-white aspect-square mb-4 p-12 xl:max-w-3xl">

          <img className="object-contain w-full h-full" src={image7}/>
    </div>
    }
    </div>
  )
}

export default GalleryScroll