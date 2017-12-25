function isEndOfGame(state) {
  function playerWon(state, player) {
    var firstPos = state.find(player);
    if (state[firstPos + 3] === player && state[firstPos + 6] === player)
      return true;
    if (state[firstPos + 1] === player && state[firstPos + 2] === player)
      return true;
    if (firstPos === 0 && state[4] === player && state[8] === player)
      return true;
    if (firstPos === 2 && state[4] === player && state[6] === player)
      return true;
    return false;
  }
  if (playerWon('x'))
    return 'x'
  if (playerWon('o'))
    return 'o'
  return '-'
}
