import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];

        this.playerIdle = new Rect(100, 100, 100, 100);
    }

    loadImages()
    {
        let sources = ["background.webp", "bucket.webp"];
        let scope = this;

        let loaded = 0;
        for (let i = 0; i < sources.length; i++)
        {
            let img = new Image();

            
            img.onload = function ()
            {
                loaded++;
                if (loaded == sources.length)
                {
                    scope.game.startGame();
                }
            };
            img.src = sources[i];
            this.images.push(img);
        }
    }

    renderSprite(img, pos)
    {
        this.g.drawImage(img,
            pos.x, pos.y, pos.w, pos.h)
    }

    render()
    {
        let g = this.g;

        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);


        g.fillStyle = "#1eca07";

        this.renderSprite(this.images[1], this.game.player, this.playerIdle);
    }    
}