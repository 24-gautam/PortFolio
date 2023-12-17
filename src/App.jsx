import React from 'react'
// import "./_media.scss"
import "./styles.css"
// import "./styles.scss"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Navigate from './Navigate'
import Theme from './Theme'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

const App = () => {
    const [on , setOn] = React.useState(false)
    const [active , setActive] = React.useState('home')
    
    return (
        <div className={on ? 'main-content light-mode' : 'main-content'}>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/about' Component={About} setActive={setActive}/>
                    <Route path='/Projects' Component={Projects} />
                    <Route path='/Contact' Component={Contact} />
                </Routes>
                <Navigate active={active} setActive={setActive}/>
                <Theme on = {on} setOn = {setOn}/>
            </Router>
        </div>
    )
}

export default App
