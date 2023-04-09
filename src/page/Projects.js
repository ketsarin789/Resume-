import React from 'react'
import img from '../assets/img/projects/padthai.jpeg';
import img1 from '../assets/img/projects/bobatea.jpeg';
import img2 from '../assets/img/projects/project1.jpeg';

import {Card, CardImg} from 'reactstrap';

export const Projects = () => {
    return (
        <div>
            <h1 style={{paddingBottom: 20, paddingTop: 30}}>Projects</h1>
                <div className='projects'>
                <Card style={{backgroundColor: '#282c34' }} className="p-1"> 

                        <CardImg src={img} alt="" style={{width: 300}}/>
                        <a style={{padding: 10, color: "white"}} href='https://splendid-starlight-2007e7.netlify.app/'>Asian Foods Recipes --Live</a>
                </Card >  
                <Card className='p-1' style={{backgroundColor: '#282c34' }} >
                        <CardImg src={img1} alt="" style={{width: 300}}/>
                        <a style={{padding: 10, color: "white"}} href='https://github.com/ketsarin789/BobaTea-App'>Boba Tea React Native App</a>
                    
                </Card>
                <Card className='p-3' style={{ backgroundColor: '#282c34' }} >
                        <CardImg src={img2} alt="" style={{width: 300}}/>
                        <a style={{padding: 10, color: "white"}} href='https://github.com/ketsarin789/Thai-Jelly-Art'>Thai Art Jelly Store</a>
                    
                </Card>
                
                </div>
                <hr></hr>
        </div>
    )
}
