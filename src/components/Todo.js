import { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';

export default function Todo({ text }) {
    const [modalOpen, setModalOpen] = useState(false);

    const clickHandler = () => {
        setModalOpen(true)
    }

     const closeHandler = () => {
        setModalOpen(false)
    }

    return (
       <div className="card">
            <h2>{text}</h2>
        <div className ='actions'>
          <button className='btn'onClick={clickHandler} >Delete</button>
            </div>
            {modalOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} />}
            {modalOpen && <Backdrop onCancel={closeHandler}/>}
      </div>
    )
}


