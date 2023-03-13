import React from 'react'
import { Link } from 'react-router-dom';

const Resume = (props) => {
    const resume = [
        { name: "Professional Summary", symbol: "professional-summary" },
        { name: "Skills", symbol: "skills" },
        { name: "Education", symbol: "education" },
        { name: "Work Experience", symbol: "work-experience" },
        { name: "Awards & Distinctions", symbol: "awards-&-distinctions" }
    ];

    return (
        <div className='resume' >
            {resume.map((info) => {
                const { name, symbol } = info; //Destructuring

                return (
                    <Link to={`/content/${symbol}`}>
                        <h1>{name}</h1>
                    </Link>
                );
            })}
        </div>
    )
}

export default Resume