import React from 'react' 
import { useNavigate } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import './AdminIcon.css'
function AdminIcon() {
  const Navigate = useNavigate()
  return (
    <div className='icons'>
      <button onClick={()=>{Navigate('/Admin')}}>
        <AiOutlineUser className='color'/>
      </button>

    </div>
  )
}

export default AdminIcon