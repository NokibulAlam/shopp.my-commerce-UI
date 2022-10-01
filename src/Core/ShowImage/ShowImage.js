import React from 'react'

const ShowImage = ({item, url, cssClassName=""}) => {
    const cls = cssClassName.length > 0 ? `${cssClassName}` : 'product-img';
  return (
    <div className={cls}>
        <img src={`http://localhost:4000/api/${url}/photo/${item._id}`} alt={item.name} className="mb-3"></img>
    </div>
  )
}

export default ShowImage;