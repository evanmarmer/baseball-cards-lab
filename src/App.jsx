import playerData from './playerData.js'
import { useState } from "react"

function BaseballCard(props) {
  
  let [showPicture, setShowPicture] = useState(true)

  function toggleCard(){
    setShowPicture(!showPicture)
  }

  if(showPicture){
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl}></img>
      </div>
    );

  }else{

    let statsDisplay = [];
    
    for (const [key, value] of Object.entries(props.stats)) {
      statsDisplay.push(<p>{key+ ": "+ value}</p>)
    }
    
      return (
        <div className="card" onClick={toggleCard}>
          <h2>{props.name}</h2>
          <p>{props.team}</p>
          <p>{props.position}</p>
          {statsDisplay}
        </div>
      )
  }

}


function App() {
  let cards = playerData.map((player)=> <BaseballCard name={player.name} team={player.team} position={player.position} stats={player.stats} imgUrl={player.imgUrl} key={player.cardId} />)
  return <>{cards}</>
}

export default App;
