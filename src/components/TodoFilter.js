import React,{useState,useRef} from 'react'
import {FiDelete}  from 'react-icons/fi';

function TodoFilter({filter}) {
    const [radio,setInputRadio]=useState('all')

    const inputSearchRef=useRef(null)

    const HandleSearchChange=()=>{
 
        const newFilter={
            search:inputSearchRef.current.value,
            radio:radio
        }

        filter(newFilter)
    }

    const handleRadioChange= e =>{
        setInputRadio(e.target.value)

        const newFilter={
            search:inputSearchRef.current.value,
            radio:e.target.value
        }

        filter(newFilter)
    }

    const clearSearch =(e)=>{
        e.preventDefault()
        inputSearchRef.current.value=''
    }

    return (
        <div>
            <form>
                <div>
                    <input 
                        onChange={HandleSearchChange} 
                        type="input"
                        ref={inputSearchRef}
                    />
                    <FiDelete onClick={clearSearch}/>
                </div>
                
                <div>
                    <label htmlFor="all">All </label>
                    <input 
                        onChange={handleRadioChange}  
                        id="all"
                        value="all"
                        type="radio" 
                        checked={radio==='all'}
                    />
                    <label htmlFor="completed">Completed</label>
                    <input 
                        onChange={handleRadioChange} 
                        id="completed"
                        value="completed"
                        type="radio" 
                        checked={radio==='completed'}
                    />
                    
                    <label htmlFor="uncompleted">Uncompleted</label>
                    <input 
                        id="uncompleted"
                        value="uncompleted"
                        type="radio" 
                        onChange={handleRadioChange} 
                        checked={radio==='uncompleted'}
                    />
                </div>
            </form>
        </div>
    )
}

export default TodoFilter
