import React from 'react'
import Todo from './Todo'


function List({ dataList, setDataList }: { dataList: string[], setDataList: Dispatch<SetStateAction<string[]>> }) {
  return (
    <div>
      {
        dataList.map((ele: string, index: number) => <Todo key={index} dataTodo={ele} dataList={dataList} setDataList={setDataList} />)
      }
    </div>
  )
}

export default List