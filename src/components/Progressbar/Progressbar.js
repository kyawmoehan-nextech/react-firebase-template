import React from 'react'
import './progressbar.css';

const Progressbar = () => {
    return (
        <div className="wrapper">
            {/* <div className="progress-tooltip">
                <span className="progress-tooltip-info" style={{ left: '45%' }}>45%</span>
                <progress className="progress" value="45" max="100">45%</progress>
            </div>

            <br /> */}

            <progress className="progress" max="100">5%</progress>
        </div>
    )
}

export default Progressbar
