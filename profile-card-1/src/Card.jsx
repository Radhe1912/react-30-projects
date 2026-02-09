import React from 'react'
import Img from './assets/img.jpg'

const obj = {
    profile: Img,
    name: 'Radhe Patel',
    designation: 'Full Stack Developer',
    techStack: ['Python', 'React.js', 'Node.js', 'PostgreSQL']
}

const Card = () => {
    return (
        <div>
            <img src={obj.profile} style={{ height: '500px', width: '500px' }} alt="image" />
            <h3>{obj.name}</h3>
            <h3>{obj.designation}</h3>
            Loves <ul>
                {obj.techStack.map((ts, i)=>(
                    <li key={i}>
                        {ts}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Card