import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];

        this.playerIdle = new Rect(0, 0, 100, 100);

        this.SteakIdle = new Rect(0, 0, 100, 100);
    }

    loadImages()
    {
        let sources = ["background.webp", "bucket.webp", "steak.webp"];
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

    renderBackground()
    {
        let background = document.getElementById("background")
        this.g.drawImage(background, 0, 0);
    }

    render()
    {
        let g = this.g;

        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);


        this.renderBackground();
        this.renderSprite(this.images[1], this.game.player, this.playerIdle);
        this.renderSprite(this.images[2], this.game.steak, this.steakdle);
    }    
}