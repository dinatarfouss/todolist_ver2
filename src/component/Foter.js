import React,{useContext,useState} from 'react'
import { Datacontext } from './Dataprovider'
export default function Foter() {

  const [checkall,setcheckall]=useState(false)
  const [todos,settodos]=useContext(Datacontext)
  const handlecheckall=()=>{
    const newtodos =[...todos]
    newtodos.forEach(todo=>{
      todo.complete=!checkall
    })
    settodos(newtodos)
    setcheckall(!checkall)

  }
  const deletetodo=()=>{
const newtodos=todos.filter(todo=>{
  return todo.complete===false
})
settodos(newtodos)
setcheckall(false)
  }
  return (
    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all"
        onClick={handlecheckall}  checked={checkall}/>
        DONE ALL
      </label>
      <p>Tu as {todos.length} taches pour faire </p>
      <button id='delete' onClick={deletetodo}>Supprimer</button>

     </div>
  )
}
