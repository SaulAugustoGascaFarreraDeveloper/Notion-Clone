import React from 'react'

interface TemplateProps{
    children: React.ReactNode
}

const Template = ({children} : TemplateProps) => {
  return (
    <div className='h-screen p-6 flex lg:justify-center items-center'>
        {children}
    </div>
  )
}

export default Template