import React from 'react'
import News from '../(news)/News'
import Analyst from '../(analyst)/Analyst'

const SecondRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="md:col-span-2">
        <News/>
      </div>
      <div>
        <Analyst/>
      </div>
    </div>
  )
}

export default SecondRow