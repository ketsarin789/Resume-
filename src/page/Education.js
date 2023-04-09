import React from 'react'
import img from '../assets/img/projects/education.webp';

export const Education = () => {
    return (
        <>
        <h1 style={{paddingBottom: 30, paddingTop: 30}}>Education</h1>
            <div className='img'>
            
                <img src={img} alt="" style={{width: 400, height: 300, marginTop: 50, marginBottom: 80,  borderRadius: 30, marginLeft: 30}}/>
                <ul style={{paddingTop: 130, fontSize: 25, paddingRight: 50}}>
                <li style={{paddingBottom: 20, paddingLeft: 20}}>JavaScript at Nucamp Bootcamp 12/1/2021 </li> 
                
                <li style={{paddingLeft: 20}}>Full Stack Web Deverloper at Nucamp Bootcamp 1/14/2022-6/1/2022</li>
                </ul>
                
            </div>
           
            <hr></hr>
        </>
       
    )
}
