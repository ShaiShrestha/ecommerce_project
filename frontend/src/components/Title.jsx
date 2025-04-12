// Description: This component is used to display a title with a line on either side of it. 
// It takes two props: text1 and text2. The text1 prop is displayed in gray, while the text2 prop is displayed in a darker gray and is bolded. 
// The component uses Tailwind CSS for styling and is responsive, with the line width changing based on the screen size.
import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='w-8 sm:w-10 h-[1px] sm:h-[2px] bg-gray-500'></p>
      <p className = 'text-gray-500'>{text1} <span className = 'text-gray-700 font-medium'>{text2}</span></p>
      <p className='w-8 sm:w-10 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title
