class Box{

constructor(x,y,w,h,vx){
this.x = x;
this.y=y;
this.w = w;
this.h=h;
this.vx=vx;
}

display(){
    rect(this.x,this.y,this.w,this.h)
}

move(){
this.x=this.x+this.vx;
}


}