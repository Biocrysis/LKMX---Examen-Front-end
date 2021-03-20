
const app=new Vue({
    // nombre del app del html 
    el:'#app',
    data:{
        titulo:"TO Do List",
        entradas:[],
        nuevaEntrada:''
        
    },
    methods:{
        agregarEntrada:function(){
            this.entradas.push({
                nombre:this.nuevaEntrada,
                estado:false
            })
           console.log(this.entradas)
            this.nuevaEntrada=''
        },
        editarEntrada:function(index){
            //index del v-for
            this.entradas[index].estado=true;
         
        },
        eliminarEntrada:function(index){

            this.entradas.splice(index,1);
        }

    }
    
});