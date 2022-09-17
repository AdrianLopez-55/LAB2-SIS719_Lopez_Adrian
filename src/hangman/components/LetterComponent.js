import React from 'react'

export const LetterComponent = ({ letter, state }) => {
  return (
    <div>
      {state ? letter: ("")}
    </div>
  )
}
