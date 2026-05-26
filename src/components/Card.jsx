import React from 'react'

const Card = ({element}) => {
    
  return (
 <a  href={element.url} target="_blank" rel="noopener noreferrer" >
                 
                    <div className="h-44 w-40 overflow-hidden rounded-xl ">
                 
                      <img
                        src={element.download_url}
                        className="h-full object-cover w-full"
                        alt=""
                      />
                    </div>
                    <h2 className="text-xl font-light text-center">
                      {element.author}
                    </h2>
                </a>
  )
}

export default Card
