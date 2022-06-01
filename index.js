                //Toad movement in a 2d plane
                const toad = {
                    xPos: 0,
                    yPos: 0,
                    moveLeft: function(unit){
                        this.xPos -= unit;
                    },
                    moveRight: function(unit){
                        this.xPos += unit;
                    },
                    moveUp: function(unit){
                        this.yPos += unit;
                    },
                    moveDown: function(unit){
                        this.yPos -= unit;
                    },
                    getPosition()
                    {
                        console.log(this.xPos, this.yPos);
                    }
                }
        
                toad.moveRight(20);
                toad.getPosition();