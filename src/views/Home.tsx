import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispacth, RootModel } from 'src/store/models'

export const Home = () => {
  const count = useSelector((state: RootModel) => state.count)
  const dispacth = useDispatch<Dispacth>()
  return (
    <div>
      <div>{count}</div>
      <div onClick={() => dispacth.count.increment(1)}>+1</div>
    </div>
  )
}
