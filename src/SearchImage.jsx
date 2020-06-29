import React, { useState } from 'react';
const SearchImage = () => {
     const [img,setImg] = useState('');
     const srchImg = (event)=>{
        setImg(event.target.value);
        console.log(event.target.value);
     }
     const imge=`https://source.unsplash.com/600x400/?${img}`;
     return(
    <>
       
        <div className='searchbar'>
        <h1>Hello search the image</h1>
            <input type='text' placeholder='Search Anything' onChange={ srchImg } value={img}></input>
            {img!==''?<img src={imge} />:null}
        </div>
    </>
)
}
export default SearchImage;