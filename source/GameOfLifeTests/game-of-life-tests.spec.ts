import { describe, expect, it } from '@jest/globals'
import { GameOfLife } from '../GameOfLife/game-of-life'

describe('my first test',()=>{
    it('should expect one',async ()=>{
        expect(1).toEqual(1)
    })
})
describe('constructor',()=>{
    it('should set up initial bored',async ()=>{
        const startingBoard = [
            [0,0,0,1,0],
            [0,0,0,1,0],
            [1,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,1,0]
          ]
          expect(new GameOfLife(startingBoard).board).toBe(startingBoard)
    })
})
describe('execute',()=>{
    it('should kill cell if has fewer than two live neighbours',async ()=>{
        // Arrange
        const startingBoard = [
            [0,0,0],
            [0,1,0],
            [0,0,0]
          ]

          const expected  = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
          ]
          // Act
          const game = new GameOfLife(startingBoard)
          game.execute;
          // Assert
          expect(game.board).toBe(expected)
    })
})