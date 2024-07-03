import React from 'react'
import { MonthBtn } from './MonthBtn'

export const Months = () => {
  return (
    <div className='flex'>
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </div>
  )
}
