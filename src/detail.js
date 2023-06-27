import React from 'react'
import data from './allcharts'


function Detail() {
  return (
    <>

    <img className='chart-1' src={require('./img/pic1.png')} />
    <div className='chart-flex'>
    {data.map((e)=>{
        return(
            <>
            
            <img key={e.id} className="chart-2" src={require(`${e.img}`)} alt={`Image ${e.id}`} />
            
            </>
        )
    })}

    </div>

    </>
  )
}

export default Detail