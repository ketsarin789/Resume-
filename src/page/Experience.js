import React from 'react'

export const Experience = () => {
    return (
    <div className="row">
        <h1 style={{paddingTop: 30, paddingBottom: 30}}>Experience</h1>
    <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card" style={{marginLeft: 10, marginBottom: 20}}>
      <div className="card-body">
        <h5 className='card-title' style={{color: 'black'}}>Manager at Thai Restaurant</h5>
        <p className="card-text" style={{color: 'black'}}>Train the team. Customer service. accounting. management  supply and demand. 2011-2016</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card" style={{marginRight: 10, marginBottom: 20}}>
      <div className="card-body">
        <h5 className='card-title' style={{color: 'black'}}>Business Owner</h5>
        <p style={{color: 'black'}} className="card-text">Restaurant Business Owner. Train the team. Accounting. Customer service. management supply and demand. 2016-2021</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  {/* <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5>Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> */}
</div>
        
    )
}
