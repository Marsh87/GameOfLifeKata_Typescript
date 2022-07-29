import { Cell } from "./Cell"

/* 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   3. Any live cell with two or three live neighbours lives on to the next generation.
   4. Any dead cell with exactly three live neighbours becomes a live cell. 
*/

export class GameOfLife{
    board: Array<Array<number>>
    constructor(board: Array<Array<number>>) {
      this.board = board
    }

     execute(): Array<Array<number>>{
        if(this.board.length === 0){
            return this.board
        }
        let cellPosition :Cell = {row :0 ,column :0}
        for(var i = 0;i< this.board.length ;i++){
            for(var j =0; j < this.board[i].length ; j++){
                 let cellValue = this.board[i][j]
                if(cellValue === 1 ){
                  cellPosition.row = i
                  cellPosition.column =j
                }
            }
        }
        this.board[cellPosition.row][cellPosition.column] = 0
        return this.board
    }
}