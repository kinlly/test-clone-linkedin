import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Widgets() {
    const user = useSelector(selectUser);
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
            <div className="widget__content">
                <div className="widgets_header">
                    <h2>Linkedin News </h2>
                    <InfoIcon />
                </div>
                <div className="widgets__body">
                    {newsArticle("Is it react.js good? Check this article...", "Codewithme - 5,234 readers")}
                    {newsArticle("Using SASS? Read about BEM here ", "NoSense - 3,455 readers")}
                    {newsArticle("Landing page full design in just 2h...", "FullColor - 1,870 readers")}
                    {newsArticle("Looking for FullStack in Barcelona URG...", "InternalTech - 901 readers")}
                </div>

            </div>
            <div className="widget__content">
                <div className="widgets_headerAds">
                    <span>Ads ...</span>
                </div>
                <div className="widgets__bodyAds">
                    <h4>Get notifications of job announcements and industry news</h4>
                    <p>{user.displayName}, explore relevant opportunities with COFCO International</p>
                    <p className="widgetButton"><a href="#"> Apply </a></p>
                </div>

            </div>
        </div>
    )
}

export default Widgets;
