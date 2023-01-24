import { overlaps } from "./collisionmath.js";

export class GameLogic
{
    constructor(game)
    {
        this.game = game
    }

    mouseMoved(event)
    {
        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;
    }
    
    logic()
    {
        if (overlaps(this.game.player, this.game.steak) == true)
        {
            console.log("aaaa")
        }
    }
}