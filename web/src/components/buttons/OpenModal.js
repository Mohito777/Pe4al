import React from 'react'
import Modal from '../Modal'


function OpenModal (){
    const [modalActive, setModalActive] = React.useState(true)
  return (
      <div className='openModal'>
          <main>
              <button className='openModal__button' onClick={() => setModalActive(!modalActive)}> Открыть
              </button>
          </main>
          <Modal active={modalActive} setActive={setModalActive} />
           
      </div>
  )
}

export default OpenModal