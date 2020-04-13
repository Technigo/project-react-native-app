const checkPositionOverlap = (positionToCheck, min, max) => {
  return max >= positionToCheck && positionToCheck >= min;
}

const checkCollision = (entity1, entity2) => {
  const xMinOverlap = checkPositionOverlap(entity1.position[0], entity2.position[0], entity2.position[0] + entity2.size);
  const xMaxOverlap = checkPositionOverlap(entity1.position[0] + entity1.size, entity2.position[0], entity2.position[0] + entity2.size);
  const yMinOverlap = checkPositionOverlap(entity1.position[1], entity2.position[1] , entity2.position[1]+ entity2.size);
  const yMaxOverlap = checkPositionOverlap(entity1.position[1] + entity1.size, entity2.position[1], entity2.position[1] + entity2.size);
  return (xMinOverlap || xMaxOverlap) && (yMinOverlap || yMaxOverlap);
}

export const GoalChecker = state => {
  const {babyBird, mommyBird, fox1, fox2, fox3} = state;

  if (checkCollision(babyBird, mommyBird)) {
    state.collisionDetected(true);
  } else if (checkCollision(babyBird, fox1) || checkCollision(babyBird, fox2) || checkCollision(babyBird, fox3)) {
    state.collisionDetected(false);
  }

  return state;
}