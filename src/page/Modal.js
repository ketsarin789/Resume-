import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Modal =({closeModal}) => {
    const form = useRef('');

    const sendEmail = (e) => {
        e.prevenDefault();

        emailjs.sendForm('service_in2a655', 'service_in2a655', form.current, 'omUDvt56CUrslWDSR')
        e.target.reset();
    }
    return(
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form ref={form} onSubmit={sendEmail} >
        <button style={{color: 'black', marginLeft: 430}} onClick={() => closeModal(false)}>X</button>
      <div style={{width: 500, marginLeft: 450}}>
         <div className="form-group mb-6">
        <input type="text" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
          
          placeholder="Your Name" name="name"/>
      </div>
    <div className="form-group mb-6">
    <input type="email" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
    placeholder="Email address" name="email"/>
    </div>
    <div className="form-group mb-6">
    <textarea
        className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Message"
        name="text"
    ></textarea>
    </div>
    <div className="form-group form-check text-center mb-6">
    <input type="checkbox"
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck87"  />
    </div>
    </div>
<button type="submit" className="
  w-full
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
  style={{backgroundColor: 'blue', width: 300, borderRadius: 50, marginRight: 40}}
  >Send</button>
</form>
</div>
    )
}