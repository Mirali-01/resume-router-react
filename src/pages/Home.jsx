import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to my Resume Site!</h1>
            <div className='homeContent' >
            <img className='icons' src="https://cdn-icons-png.flaticon.com/512/561/561188.png" alt="" />
            <h2>Email: <a href="mailto:mir.m.ali01@gmail.com ">mir.m.ali01@gmail.com</a> </h2>
            </div>
            <div className='homeContent' >
            <img className='icons' src="https://cdn-icons-png.flaticon.com/512/455/455705.png" alt="" />
            <h2>Number: <a>(917) 346-2282</a>   </h2>
            </div>
            <div className='homeContent' >
            <img className='icons' src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" />
            <h2>Linkedin: <a href="https://linkedin.com/in/mir-mali/">linkedin.com/in/mir-mali/</a> </h2>
            </div>
            <div className='homeContent' >
            <img className='icons' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            <h2>Github: <a href="https://github.com/Mirali-01">github.com/Mirali-01</a> </h2>
            </div>
        </div>
    )
}

export default Home