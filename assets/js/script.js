

const {createApp} = Vue;

createApp({
  data(){
    return{
      message: "Hello World",
      counter: 0,
      textColor: "",
      color: "ciao",
      image: "w0tci0oyztfaduazx54s.webp"
    }
  },

  methods:{
    changeColor(){
      if(this.counter < 4)this.counter++
      if(this.counter == 1){
        this.textColor = "red",
        this.message = "Red"
      }
      if(this.counter == 2){
        this.textColor = "green",
        this.message = "Verde"
      }
      if(this.counter == 3){
        this.textColor = "aqua",
        this.message = "Aqua"
      }
      if(this.counter == 4){
        this.textColor = "aquamarine",
        this.message = "Aquamarine"
      }
    }
  }
}).mount("#app")