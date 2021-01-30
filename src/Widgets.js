import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css'

function Widgets() {
    const newsArticle = (title, subtitle) => (
        <div className="widgets_article"> 
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>

            </div> 
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkeding New </h2>
                <InfoIcon/>
            </div>
            <div className="widgets__body">
                {newsArticle("Is it react.js good?", "Codewithme - 5,234 readers")} 
                {newsArticle("New offer for SASS", "NoSense - 3,455 readers")} 
                {newsArticle("Design in just 5h", "FullColor - 1,870 readers")} 
                {newsArticle("Looking for FullStack", "InternalTech - 901 readers")}      
            </div>
               
        </div>
    )
}

export default Widgets;
