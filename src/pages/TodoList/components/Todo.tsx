import React, { Dispatch, SetStateAction, useState } from 'react'
import { FlexBoxJustifyBetweenAlignCenter } from '~/components/common'



function Todo({ dataTodo, dataList, setDataList }: { dataTodo: string, dataList: string[], setDataList: Dispatch<SetStateAction<string[]>> }) {
  const [isEdit, setIsEdit] = useState(0)
  const [todo, setTodo] = useState(dataTodo)
  const handleDelete = () => {
    const tempDataList = dataList?.filter((data: string) => data != dataTodo)
    setDataList(tempDataList)
  }

  const handleEdit = () => {
    setIsEdit(1)
  }

  const handleCancelEdit = () => {
    setTodo(dataTodo)
    setIsEdit(0)
  }

  const handleUpdate = () => {
    const tempDataList:any = dataList.map(ele => {
      if (ele == dataTodo) {
        ele = todo
        return ele
      }
      return ele
    })
    setDataList(tempDataList)
    handleCancelEdit()
  }

  return (
    <FlexBoxJustifyBetweenAlignCenter>
      {
        isEdit ?
          <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
          :
          <p>{dataTodo}</p>
      }
      <div>
        <button onClick={handleDelete}> delete</button>
        {
          isEdit ?
            <div>
              <button onClick={handleCancelEdit}> cancel</button>
              <button onClick={handleUpdate}> Update</button>
            </div>
            :
            <button onClick={handleEdit}> Edit</button>
        }
      </div>
    </FlexBoxJustifyBetweenAlignCenter>
  )
}

export default Todo