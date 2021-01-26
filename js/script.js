var app=new Vue({
  el:".slider-wrapper",
  data:{
    counter:0,
    img:[
      "img/immagine1.jpg",
      "img/immagine2.jpg",
      "img/immagine3.jpg",
      "img/immagine4.jpg"
    ],
  animation:''
  },
  created(){
    this.animation=setInterval(this.next,3000);
  },
 
  
  methods:{

    next :function() {
     
      (this.counter==this.img.length-1)? this.counter=0 : this.counter++;
      

  },
  prev:function () {
    (this.counter<=0)? this.counter=this.img.length-1 : this.counter--;
    
    
  },
 

  click: function (index) {
      this.counter=index;
     clearInterval(this.animation);
      
  }
  }

});

