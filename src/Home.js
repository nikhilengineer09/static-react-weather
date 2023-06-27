import React from 'react'
import "./App.css";
import "./App.css"
import Detail from './detail';
import AddIcon from '@mui/icons-material/Add';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';


function Home() {
  return (
    <>
    <div className='big-container'>
        <div className='left-container'>
            <div className='icon'>
            <div className='icon-1'>
                <AddIcon/>
                </div>
                <div className='icon-3'>
                    <HdrWeakIcon/>
                </div>
                <div className='icon-2'><ToggleOffIcon/></div>

                </div>
            
            <p id="exp"> <span className='sfo'>SFO, USA </span> <br></br><span className='prev-icon'><NavigateBeforeIcon/></span> 22°C <span className='next-icon'><NavigateNextIcon/></span></p>
            <img className='left-image' src='https://i.pinimg.com/originals/b7/55/f7/b755f76b3bc9b83a20a6dbfd64171765.jpg'/>
        </div>
        

        <div className='right-container'>
            <div className='welcome-bar'>Welcome back Isabella!
            <div className='three-dots'>
                <MoreHorizIcon/>
            </div>
            
            <img className='profile-photo' src='https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg'></img>
            <br></br>
            <span className='weather-info'>Check out today's weather information</span>
            </div>

            <Detail/>
        </div>
    </div>

    
    </>
  )
}

export default Home