# Gamze Collection

A collection of classic games built with HTML, CSS, and JavaScript.

## Games Included

### Snake
A classic Snake game where you control a snake to eat food and grow without hitting walls or yourself. The snake moves around the canvas, consuming red fruit and getting longer each time it eats. The game ends if the snake hits the walls or runs into itself.

**Controls:**
- Arrow keys (↑, ↓, ←, →) or on-screen buttons to control direction

### Tetris
A complete implementation of the classic Tetris game with rotating tetromino shapes, line clearing, scoring, and game over detection.

**Controls:**
- Arrow keys (←, →) to move pieces horizontally
- Arrow up (↑) to rotate pieces
- Arrow down (↓) for soft drop
- Spacebar for hard drop
- P key to pause the game

## How to Play

The games are hosted at: https://n4igme.github.io/gamze/

Or you can run them locally by opening the `index.html` file in your browser.

## Technologies Used

- HTML5 Canvas for game rendering
- Pure JavaScript (no frameworks)
- CSS for styling
- Responsive design for different screen sizes

## Repository Structure

```
Gamze/
├── index.html          # Main menu page
├── README.md           # This file
├── snake/
│   ├── index.html      # Snake game page
│   └── main.js         # Snake game logic
└── tetris/
    └── index.html      # Complete Tetris game (all in one file)
```

## Game Features

### Snake
- Classic snake mechanics
- Score tracking
- Wall and self-collision detection
- Responsive controls (keyboard + touch buttons)

### Tetris
- All 7 standard tetromino shapes (I, J, L, O, S, T, Z)
- Rotation and movement controls
- Line clearing and scoring
- Next piece preview
- Level progression (speed increases as you level up)
- Game over detection
- Pause functionality

## Contributing

Feel free to fork this repository and add more classic games to the collection!