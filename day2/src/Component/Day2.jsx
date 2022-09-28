import React from 'react'
import './Style.css'

const Day2 = () => {
  return (
    <div className='main'>
        <h3>Question1:What is the Difference between react and react native? Which one is library or framework?</h3>
        <p>
            React JS
            <ul className='items'>
                <li>React JS is javascript library used for developing web applications.</li>
                <li>React JS initial relaese was in 2013 by Facebook.</li>
                <li>In React JS,the virtual DOM renders the browser code.</li>
            </ul>
            React Native
            <ul className='items'>
                <li>React Native is the React js based framework,used for developing Mobile applications.</li>
                <li>React Native initial Release was in 2015 by Facebook.</li>
                <li>In this,React natives uses its API to render code for mobile applications.</li>
            </ul>
        </p>
        <br></br>
        <h3>Question2:What is the package name you are using for routing?</h3>
        <p className='que1'>Package name:react-router-dom</p>
        <br></br>
        <h3>Question3:Routing Implementation.</h3>
        <p className='que1'>For Implementation refer src folder.</p>
        <br></br>
        <h3>Question4:How do you pass data from parent to child?</h3>
        <p className='que1'>For Implementation refer src folder.</p>
        <br></br>
        <h3>Question5:What is lazy loading in react?</h3>
        <p className='que1'>lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.</p>
        <p className='que1'>Example:An example of image lazy-loading can be found on the popular publishing platform Medium, which loads lightweight placeholder images at page load, and replaces them with lazily-loaded images as they're scrolled into the viewport.</p>
        <br></br>
        <h3>Question6:Difference b/w Stateful and stateless Component?</h3>
        <p>
            Stateless Component
            <ul className='items'>
                <li>A stateless component is independent of its state.</li>
                <li>A stateless component renders the props.</li>
                <li>In stateless component,props are displayed like props.name</li>
                <li>It renders the output depending upon the props value.</li>
                <li>A functional components are always a stateless component.</li>
            </ul>
            Stateful components
            <ul className='items'>
                <li>A statelful component is dependent of its state.</li>
                <li>A stateful component can renders both states & props.</li>
                <li>In stateful component,states & props are displayed like this.props.name</li>
                <li>It renders the output depending upon the state value.</li>
                <li>A class components are always a stateful component.</li>  
            </ul>
        </p>
        <br></br>
        <h3>Question7:How do you switch one component to another & using Conditional Rendering?</h3>
        <p>Way to Switch/Navigate from one page to another page</p>
        <ul className='items'>
            <li>Using React routing</li>
            <li>Using Conditional rendering</li>
        </ul>

    </div>
  )
}

export default Day2
