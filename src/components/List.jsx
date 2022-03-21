import { getAllByDisplayValue } from '@testing-library/react'
import React from 'react'

function list({all,setAll,setEdit}) {
const editfun = ({id}) => {
    const findval = all.find(all => all.id === id);
    setEdit(findval);
}

  return (
    <div>
        {all.map((all)=>(
            <li className='listitem' key={all.id}>
                <input type='text' value={all.title} className='item'
                    onChange={(event)=> event.preventDefault()}
                />
                <button className='editBtn' onClick={()=>editfun(all)}>Edit</button>
            </li>
        ))

        }


    </div>
  )
}

export default list