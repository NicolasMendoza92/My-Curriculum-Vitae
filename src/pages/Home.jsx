import React from 'react'
import Cursos from '../Components/Cursos'
import Icons from '../Components/Icons'
import ImagenPrin from '../Components/ImagenPrin'
import Projects from '../Components/Projects'


const Home = () => {
    return (
        <>
            <ImagenPrin/>
            <Projects/>
            <Cursos />
            <Icons/>
        </>
    )
}

export default Home
