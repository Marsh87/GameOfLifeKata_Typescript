import { Cell } from "./Cell"

export class GameOfLife{
    board: Array<Array<number>>
    constructor(board: Array<Array<number>>) {
      this.board = board
    }

    execute(){
        const liveCellPosition:Cell[]= []
        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j< this.board[i].length; i++){
               let cell  = this.board[i][j]
               if(cell === 1){
                liveCellPosition.push({row:i,column:j})
               }
            }
        }
        // Find neighbours
         let firstLiveCell = liveCellPosition[0]
    }
}