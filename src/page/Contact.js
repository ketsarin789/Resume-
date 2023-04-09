import React from 'react'
import { useState } from 'react'
import { Modal } from './Modal'

export const Contact = () => {
    const [openModal, setModal] = useState(false)
    return (
        <>
            <div>
                
                <button onClick={() => {setModal(true)}} type="button" style={{color: 'black', marginTop: 10, marginBottom: 10, width: 100, height: 50, backgroundColor: '#f5b342', fontSize: 20}}>Let's talk</button>
                
            </div>
            {openModal && <Modal closeModal={setModal} />}
        </>
    )
}
