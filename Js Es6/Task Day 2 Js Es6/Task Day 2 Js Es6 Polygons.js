class Polygon {
    constructor(l,w){
        this.length = l,
        this.width = w,
        this.name = `Polygon`
         }
         toString(){
            console.log(`${this.name}has length=${this.l}and width=${this.width}`);
        }
    }
    class Rectangle extends Polygon {
        constructor(l,w){
            super(l,w);
            this.name = `Rectangle`;
        }
        toString(){
        console.log(`the area of ${this.name} is ${this.width*this.length}`);
        }
    }

    var rec =new Rectangle(24,15);
    rec.toString();

    class Square extends Polygon{
        constructor(l){
           super(l);
           this.name=`squar`
        }
        toString(){
            console.log(`the area of ${this.name} is ${4*this.length}`);
        }
    }
    
    var quar =new Square(40);
    quar.toString();

        class Tringle extends Polygon{
            constructor(w,h){
                super(w,h)
               this.name=`tringle`
            }
            toString(){
               console.log(`the area of ${this.name} is ${(.5*this.width)*this.length}`);
            }

        }
        var tringle=new Tringle(14,24);
        tringle.toString();
    
        class Cycle extends Polygon{
            constructor(w){
                super(w)
               this.name=`cycle`
            }
            toString(){
               console.log(`the area of ${this.name} is ${ .25 * Math.PI * (this.width)^2}`);
            }}
            var Tri = new Tringle(15,20);
            Tri.toString();
          
        
