import React from 'react'
import {skills} from '../data/Data'

export const Skills = () => {
    return (
        <>
        <div>
            <h1 style={{fontSize: 50, paddingTop: 30}}>Skills</h1>
        </div>
         <section>
        <div className='skill'>
          
             {skills.map((skill, index) => {
               return (
                 <div
                   className='skill-1'
                   key={index}
                 >
                   <img  src={skill.image} alt='' />
                 </div>
                 
               );
             })}
        </div>
        <hr></hr>
       </section>
       
       </>
    )
}
