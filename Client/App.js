import React, {useEffect, useState} from 'react'
import TrainData from './TrainData'

function App() {

  const [train,setTrain] = useState([{}])

  useEffect(()=> {
    fetch("http://localhost:5000/train").then
    (response => response.json()).then
    (data => {
      setTrain(data)})

      console.log(train)
  }, [])

  return (
    <div>
        <TrainData trainData={train} />
    </div>
  );
}

export default App;
