
export type PlayerType = {
  key: number,
  name: string,
  points: number
}

export type FarkleContextProps = {
  players: PlayerType[],
  playerModal: boolean,
  whosOpen: number,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>,
  setPlayerModal: React.Dispatch<React.SetStateAction<boolean>>,
  setWhosOpen: React.Dispatch<React.SetStateAction<number>>
}