import React from 'react'

export default function Banner( {title,subtitle,children}) {
    return (
        <div className="banner">
       <h2> {title}</h2>
       <p> {subtitle}</p>
    {children}
        </div>
    )
}
