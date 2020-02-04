import React from 'react'

const GameEndPopUp = ({ score, submitScore }) => {

  return(
    <div className="end-game-div">
      <h2>GAME OVER</h2>
      <form onSubmit={submitScore} className="end-game-form">
        <p>{`Your score is: ${score}`}</p>

      </form>
    </div>
  )

}

export default GameEndPopUp;
