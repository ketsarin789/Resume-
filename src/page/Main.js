import React from 'react'
import {Contact} from './Contact'


export const Main = () => {
    return (
        <div>
           
            <p className='h1'>Ketsarin Kayak</p>
                <h3 style={{paddingTop: 30,  paddingBottom: 30}}>Junior React Developer</h3>
            <div className='link'>
                <a style={{color: "white"}} href='mailto:kayakfon@gmail.com'>kayakfon@gmail.com | Seattle WA | 253 334-8052</a>
            </div>
            <div style={{paddingTop: 30, paddingBottom: 30}}>
                <Contact />
            </div>
                <a  style={{color: '#f5b342',fontSize: 50}} href='https://github.com/ketsarin789'><i className='fa fa-github'/>  |   </a>{' '}
                <a  style={{color: 'white',fontSize: 50}} href='https://www.linkedin.com/in/ketsarin-kayak-975b75238/'>      <i className='fa fa-linkedin' style={{ color: '#f5b342'}}/>    </a>{' '}
            <hr></hr>
            
        </div>
    )
}
