import React from 'react'

const MoreInfo = () => {
  return (

    <div>
        <div className='w-full h-auto font-JB flex justify-center gap-5 md:gap-10'>
            <a href="#" className="edu" style={{ "--clr": "#1e9bff" }}>
                <span>Education</span>
                <span><i></i></span>
            </a>
            <a href="#" className="edu" style={{ "--clr": "#1e9bff" }}>
                <span>Skills</span>
                <span><i></i></span>
            </a>
            <a href="#" className="edu" style={{ "--clr": "#1e9bff" }}>
                <span>Others</span>
                <span><i></i></span>
            </a>          
        </div>
    </div>

  )
}

export default MoreInfo