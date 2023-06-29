export const getInvertedCoordinate = (coordinate: number) => {
  return coordinate > 0 ? -coordinate : Math.abs(coordinate)
}