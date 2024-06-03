import React from 'react'
import News from '../(news)/News'

const SecondRow = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <News/>
      </div>
      <div>
        table
      </div>
    </div>
  )
}

export default SecondRow