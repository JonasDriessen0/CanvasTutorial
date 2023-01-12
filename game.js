import { GameRenderer } from "./gamerenderer.js";
import { GameLogic } from "./gamelogic.js";

class Game
{
    constructor()
    {
        this.logic = new GameLogic()
        this.renderer = new GameRenderer()
    }
}

let game = new Game()
game.render();