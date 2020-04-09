const checkPositionOverlap = (positionToCheck, min, max) => {
  return max >= positionToCheck && positionToCheck >= min
}

export const GoalChecker = state => {
  const {babyBird, mommyBird} = state;

  const xMinOverlap = checkPositionOverlap(babyBird.position[0], mommyBird.position[0], mommyBird.position[0] + mommyBird.size)
  const xMaxOverlap = checkPositionOverlap(babyBird.position[0] + babyBird.size, mommyBird.position[0], mommyBird.position[0] + mommyBird.size)
  const yMinOverlap = checkPositionOverlap(babyBird.position[1], mommyBird.position[1] , mommyBird.position[1]+ mommyBird.size)
  const yMaxOverlap = checkPositionOverlap(babyBird.position[1] + babyBird.size, mommyBird.position[1], mommyBird.position[1] + mommyBird.size)

  if ((xMinOverlap || xMaxOverlap) && (yMinOverlap || yMaxOverlap)) {
        state.gameWon();
  } 

  return state;
}