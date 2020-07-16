export default (scene, user,score) => {  
  var data = {
    user : user,
    score : score
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
      console.log(response)
      //scene.updateScores(response.result) 
      scene.scoreUploaded()
      //new MenuButton(scene, config.width/2, config.height/2 + 200, '+Score', 'Score');           
    })    
}