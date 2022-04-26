import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let linkedinLink = <a href="https://linkedin.com/in/holdengutwin" style={{color:"blue"}}>Linkedin</a>
  let githubLink = <a href="https://github.com/holdengutwin" style={{color:"blue"}}> GitHub</a>
  return (
    <div style={{paddingLeft:"30px"}}>
      <h1>{`Hi! I'm Holden Gutwin 😄`}</h1>
      <p>{`I'm a third year computer science student at the University of Saskatchewan, currently on internship at Andgo Systems.`}</p>
      <p>This page is still under construction, feel free to check out my {githubLink} and {linkedinLink} in the meantime!</p>
    </div>
  )
}

export default Home
