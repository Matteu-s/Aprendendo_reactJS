import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = 'Digital Innovation'
const element2 = <h1>Hello World</h1>

function App(params) {
    return(
        <div>
            {element}
            {element2}
        </div>
    )    
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)