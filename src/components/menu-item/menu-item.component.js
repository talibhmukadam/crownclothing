import React from "react";
import './menu-item.style.scss'

const MenuItem = ({title, imageURL, subtitle, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <div className={'background-image'} style={{backgroundImage : `url("${imageURL}")`}}></div>

            <div className={'content'}>
                <h1 className={'title'}>{title.toUpperCase()}</h1>
                <span className={'subtitle'}>{subtitle.toUpperCase()}</span>
            </div>
        </div>
    )
}

export default MenuItem