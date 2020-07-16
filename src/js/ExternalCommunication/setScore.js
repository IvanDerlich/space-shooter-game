import getScores from '../ExternalCommunication/getScores'


export default (scene) => {   
  
  scene.fetching.setText("Posting Score...")
  var data = {
    user : scene.userName,
    score : scene.score
  }
  console.log(JSON.stringify(data))
  
  var gameId = "WQw8aJXQ7oC0nuqYBROD"
  const queryUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/` + gameId + `/scores/`;

  fetch(queryUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((response) => {       
      getScores(scene)
      console.log(response)       
      scene.update()
      getScores(scene)
    })    
}