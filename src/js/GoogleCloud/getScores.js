export default (scene) => {  
  
  var gameId = "WQw8aJXQ7oC0nuqYBROD"
  const queryUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/` + gameId + `/scores/`;

  

  fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => {  
      scene.updateScores(response.result) 
    })    
}