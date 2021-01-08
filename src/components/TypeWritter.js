import React from "react"
import './TypeWritter.css' 
import Typical from 'react-typical'
import TransitionLink from 'gatsby-plugin-transition-link'
import paperBackground from "../images/paper.jpg";

class TypeWritter extends React.Component {
    render(){
        return <div className="fullBackground" style={{backgroundImage: "url(" + paperBackground + ")"}}>
        <h1 className="introText">      
          <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'web developer',
            1000,
            "designer",
            1000,
            "musician",
            1000,
            "film nerd",
            1000,
            "New Yorker",
            1000,
            "Bostonian at heart",
            1000,
          ]}>
    
          </Typical>

          <TransitionLink
            to="/modern"
            exit={{
                
            }}
            entry={{
                
            }}
            >
            Go to page 2
            </TransitionLink>
        </h1>

      </div>
    }
    
}

export default TypeWritter;