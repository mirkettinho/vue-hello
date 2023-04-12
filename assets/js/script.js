

const {createApp} = Vue;

createApp({
  data(){
    return{
      message: "Hello World",
      counter: 0,
      textColor: "",
      color: "ciao",
      image: "./assets/img/w0tci0oyztfaduazx54s.webp"
    }
  },

  methods:{
    changeColor(){
      if(this.counter < 4)this.counter++
      if(this.counter == 1){
        this.textColor = "red"    
      }
      if(this.counter == 2){
        this.textColor = "green"      
      }
      if(this.counter == 3){
        this.textColor = "aqua"
      }
      if(this.counter == 4){
        this.textColor = "aquamarine"
      }
    }
  }
}).mount("#app")