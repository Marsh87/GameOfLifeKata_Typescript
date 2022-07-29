import { Cell } from './Cell'

/* 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   3. Any live cell with two or three live neighbours lives on to the next generation.
   4. Any dead cell with exactly three live neighbours becomes a live cell. 
*/

export class GameOfLife {
  board: Array<Array<number>>
  newBoard: Array<Array<number>>
  constructor(board: Array<Array<number>>) {
    this.board = board
  }

  execute(): Array<Array<number>> {
    if (this.board.length === 0) {
      return this.board
    }

    //iterate row by column
    //for each cell positon get # of live neighboughs
    //check and set new state
    let cellsToKill: Cell[] = []
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        let cellValue = this.board[i][j]
        if (cellValue === 1) {
          const neighboughs = 0
          const north = this.board[i - 1][j]
          const northEast = this.board[i - 1][j + 1]
          const northWest = this.board[i - 1][j - 1]
          const south = this.board[i + 1][j]
          const southEast = this.board[i + 1][j + 1]
          const southWest = this.board[i + 1][j - 1]
          const east = this.board[i][j + 1]
          const west = this.board[i][j - 1]

          if (north) neighboughs + north
          if (northEast) neighboughs + northEast
          if (northWest) neighboughs + northWest
          if (south) neighboughs + south
          if (southEast) neighboughs + southEast
          if (southWest) neighboughs + southWest
          if (southEast) neighboughs + southEast
          if (east) neighboughs + east
          if (west) neighboughs + west

          if (neighboughs < 2) {
            const cell: Cell = { row: i, column: j }
            cellsToKill.push(cell)
          }
        }
      }
    }

    cellsToKill.forEach((cell) => {
      this.board[cell.row][cell.column] = 0
    })

    return this.board
  }
}
