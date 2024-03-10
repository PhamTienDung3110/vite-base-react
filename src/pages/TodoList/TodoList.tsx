import { useState } from 'react'
import './TodoList.style.css'
import List from './components/List'
import Search from './components/Search'

const array: string[] = ['1','2','3','4','5']

function TodoList() {
  const [dataList, setDataList] = useState<string[]>(array)

  const addNewTodo = (search: string, removeSearch: () => void) => {
    const tempDataList = [...dataList]
    tempDataList.unshift(search.trim())
    setDataList(tempDataList)
    removeSearch()
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <Search dataList={dataList} setDataList={setDataList} addNewTodo={addNewTodo}/>
      <List dataList={dataList} setDataList={setDataList}/>
    </div>
  )
}

export default TodoList