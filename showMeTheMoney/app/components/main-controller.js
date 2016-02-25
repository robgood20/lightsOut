app.controller('MainController', function(){
   this.test = "hello you are here"
   
   this.setActiveImg = function (type){
       if(this.activeImg === type){
           this.activeImg = "";
           }else{
               this.activeImg = type;
           }
       
   }
});
