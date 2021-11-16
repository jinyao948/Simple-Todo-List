import { useState } from 'react'

export default function Todo({ text }) {
    const [modalOpen, setModalOpen] = useState(false);
    const clickHandler = () => {
        
    }

    return (
       <div className="card">
            <h2>{text}</h2>
        <div className ='actions'>
          <button className='btn'onClick={clickHandler} >Delete</button>
        </div>
      </div>
    )
}


