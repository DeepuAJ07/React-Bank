import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'

function Home(props) {
  if(props.value){
    return <Home2/>
  }
  else{
    return <Home1/>
  }
    
  
}

export default Home