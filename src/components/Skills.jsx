import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';

const Skills = () => {
  const stack = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-700'
    },
    {
      id: 1,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-300'
    },
    {
      id: 1,
      src: react,
      title: 'ReactJs',
      style: 'shadow-blue-300'
    },
    {
      id: 1,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-green-200'
    },
    {
      id: 1,
      src: node,
      title: 'NodeJs',
      style: 'shadow-green-400'
    }
]
  return (
    <div className='h-screen lg:m-36'>
      <h1 className='text-7xl underline'>SKILLS</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-14 items-center justify-center m-10'>
        {
          stack.map(({id,src,title,style})=>(
            <div 
              key={id}
              className={`w-full shadow-lg border-4 rounded-lg ${style}`}>
              <img className='p-4 lg:p-16 mx-auto' src={src} alt={title} />
              <p className='text-4xl text-center p-2 lg:p-5'>{title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
