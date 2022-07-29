import { describe, expect, it } from '@jest/globals'
import { GameOfLife } from '../GameOfLife/game-of-life'

describe('my first test', () => {
  it('should expect one', async () => {
    expect(1).toEqual(1)
  })
})

describe('constructor', () => {
  it('should expect empty board if empty board is parsed through', async () => {
    // Arrange
    let board = []
    //Act
    let gameOfLife = new GameOfLife(board)
    //Assert
    expect(gameOfLife.board).toEqual(board)
  })
  it('should expect populated board if board is parsed through', async () => {
    // Arrange
    let board = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    //Act
    let gameOfLife = new GameOfLife(board)
    //Assert
    expect(gameOfLife.board).toEqual(board)
  })
})
describe('execute', () => {
  it('should return an empty board if intial board is empty', async () => {
    // Arrange
    let board = []
    //Act
    let gameOfLife = new GameOfLife(board)
    let result = gameOfLife.execute()
    //Assert
    expect(result).toEqual(board)
  })
  it('should return all dead cells if inital board only has dead cells', async () => {
    // Arrange
    let board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    //Act
    let gameOfLife = new GameOfLife(board)
    let result = gameOfLife.execute()
    //Assert
    expect(result).toEqual(board)
  })
  it('should die if cell has fewer than two neighbours', async () => {
    // Arrange
    let board = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    //Act
    let gameOfLife = new GameOfLife(board)
    let result = gameOfLife.execute()
    //Assert
    let expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(result).toEqual(expected)
  })
  it('should die if cell has 1 neighbour', async () => {
    // Arrange
    let board = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]
    //Act
    let gameOfLife = new GameOfLife(board)
    let result = gameOfLife.execute()
    //Assert
    let expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(result).toEqual(expected)
  })

  it('should die if cell has 1 neighbour to the east', async () => {
    // Arrange
    let board = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ]
    //Act
    let gameOfLife = new GameOfLife(board)
    let result = gameOfLife.execute()
    //Assert
    let expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(result).toEqual(expected)
  })
  it('should die if cell has 1 neighbour to the south', async () => {
    // Arrange
    let board = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ]
    //Act
    let gameOfLife = new GameOfLife(board)
    let result = gameOfLife.execute()
    //Assert
    let expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(result).toEqual(expected)
  })
})
