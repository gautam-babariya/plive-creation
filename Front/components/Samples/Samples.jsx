import React from 'react'
import './Samples.css'
import '../../public/css/variable.css'
import demo1 from '../../public/assets/Samples/demo1.mp4'
import demo2 from '../../public/assets/Samples/demo2.mp4'
import demo3 from '../../public/assets/Samples/demo3.mp4'
import demo1_poster from '../../public/assets/Samples/demo1-poster.png'
import demo2_poster from '../../public/assets/Samples/demo2-poster.png'
import demo3_poster from '../../public/assets/Samples/demo3-poster.png'




function Samples() {
    return (
        <div className='samples_maindiv' id='samples'>
            <div id='samples_headingdiv'>
                <p id="samples_heading">
                    Sample websites
                </p>
            </div>
            <div className='samples_divofcards'>
                <div class="samples_closediv card">
                    <div className="samples_videodiv">
                        <video className='samples_video' autoplay muted loop controls poster={demo1_poster}>
                            <source src={demo1} type="video/mp4" />
                        </video>
                    </div>
                    <div class="samples_text card-body">
                        <p class="card-text">Innovative Portfolio</p>
                    </div>
                </div>
                <div class="samples_closediv card">
                    <div className="samples_videodiv">
                        <video className='samples_video' autoplay muted loop controls poster={demo2_poster}>
                            <source src={demo2} type="video/mp4" />
                        </video>
                    </div>
                    <div class="samples_text card-body">
                        <p class="card-text">Creative Design</p>
                    </div>
                </div>
                <div class="samples_closediv card">
                    <div className="samples_videodiv">
                        <video className='samples_video' autoplay muted loop controls poster={demo3_poster}>
                            <source src={demo3} type="video/mp4" />
                        </video>
                    </div>
                    <div class="samples_text card-body">
                        <p class="card-text">Skill Showcase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Samples
