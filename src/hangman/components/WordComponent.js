import React from 'react'
import { LetterComponent } from './LetterComponent'

export const WordComponent = ({ listWord }) => {
  return (
    <div className='word'>
      {listWord.map((item)=>(
        <LetterComponent {...item}/>
      ))}
    </div>
  )
}
