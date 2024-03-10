import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'

const InputSearch = styled.input`
margin-right: 10px;
`

function Search({dataList, setDataList, addNewTodo}: {dataList: string[], setDataList: Dispatch<SetStateAction<string[]>>, addNewTodo: (e: string, callback: () => void) => void}) {
  const [search, setSearch] = useState('')

  const removeSearch = () => {
    setSearch('')
  }

  const addTodo = () => {
    const tempDataList = [...dataList]
    tempDataList.unshift(search.trim())
    setDataList(tempDataList)
    setSearch('')
  }

  return (
    <div>
      <InputSearch value={search} type='text' placeholder='search' onChange={e => setSearch(e.target.value)} />
      <button className='mt-10' style={{ background: 'white' }} onClick={() => addNewTodo(search, removeSearch)}>ADD</button>
    </div>
  )
}

export default Search