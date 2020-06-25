<template>
  <div id="app">
    <h3 v-if="syntaxError" style="color:white; margin: 5px">Syntax error</h3>
    <form class="calculator" name="calc">
        <input type="text"  @keypress="keyEvent($event)" v-model="inputCalc" class="value" name="text" readonly="">
        <span class="clear" @click="inputCalc = ''">C</span>
        <span class="num" @click="keyClear">C</span>
        <span class="num" @click="keyDivede">/</span>
        <span class="num" @click="keyMultiply">*</span>
        <span class="num" @click="num7">7</span>
        <span class="num" @click="num8">8</span>
        <span class="num" @click="num9">9</span>
        <span class="num" @click="keySubstract">-</span>
        <span class="num" @click="num4">4</span>
        <span class="num" @click="num5">5</span>
        <span class="num" @click="num6">6</span>
        <span class="num " @click="keyPlus">+</span>
        <span class="num" @click="num1">1</span>
        <span class="num" @click="num2">2</span>
        <span class="num" @click="num3">3</span>
        <span class="num equal plus" @click="calcEqual">=</span>
        <span class="num" @click="num0">0</span>
        <span class="num" @click="dblZero">00</span>
        <span class="num" @click="keyPoint">.</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputCalc: "",
      syntaxError: false
    };
  },
  methods: {
    num0(){if(this.inputCalc.length <= 15) this.inputCalc += '0'},
    num1(){if(this.inputCalc.length <= 15) this.inputCalc += '1'},
    num2(){if(this.inputCalc.length <= 15) this.inputCalc += '2'},
    num3(){if(this.inputCalc.length <= 15) this.inputCalc += '3'},
    num4(){if(this.inputCalc.length <= 15) this.inputCalc += '4'},
    num5(){if(this.inputCalc.length <= 15) this.inputCalc += '5'},
    num6(){if(this.inputCalc.length <= 15) this.inputCalc += '6'},
    num7(){if(this.inputCalc.length <= 15) this.inputCalc += '7'},
    num8(){if(this.inputCalc.length <= 15) this.inputCalc += '8'},
    num9(){if(this.inputCalc.length <= 15) this.inputCalc += '9'},
    keyMultiply(){
      if(this.inputCalc.length <= 15){
        if(this.inputCalc.length == 0){
          this.inputCalc += '0'
        }
      this.inputCalc += '*'
      } 
      
    },
    keyDivede(){
      if(this.inputCalc.length <= 15) {
        if(this.inputCalc.length == 0){
          this.inputCalc += '0'
        }
        this.inputCalc += '/'
      }
    },
    keyPlus(){
      if(this.inputCalc.length <= 15){
        if(this.inputCalc.length == 0){
          this.inputCalc += '0'
        }
      } 
      this.inputCalc += '+'
    },
    keySubstract(){
      if(this.inputCalc.length <= 15) {
        if(this.inputCalc.length == 0){
          this.inputCalc += '0'
        }
      }
      this.inputCalc += '-'
    },
    dblZero(){if(this.inputCalc.length <= 15) this.inputCalc += '00'},
    keyPoint(){
      if(this.inputCalc.length <= 15){
        if(this.inputCalc.length == 0){
          this.inputCalc += '0'
        }
      }
      this.inputCalc += '.'
    },
    keyClear(){this.inputCalc = this.inputCalc.slice( 0, -1)},
    calcEqual(){
      var re = /^\s*([-+]?)(\d+)(?:\s*([-+*/])\s*((?:\s[-+])?\d+)\s*)+$/
      if(this.inputCalc != ''){
        if(this.inputCalc.match(re)){
          this.inputCalc = eval(this.inputCalc).toString()
        }
        else this.syntaxError = true
      }
      
    },
  },
  watch:{
    inputCalc(val){
      if(val == '') this.syntaxError = false
    }
  }  
};
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #091921;
}
.calculator{
    position: relative;
    display: grid;
    .value{
        grid-column: span 4;
        height: 100px;
        text-align: right;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 18px;
    }
    span{
      display: grid;
      width: 60px;
      height: 60px;
      color: white;
      background: #0c2835;
      place-items: center;
      border: 1px solid rgba(0,0,0,.1);
      cursor: pointer;
    }
    span:hover{
      background: #0e3041;
    } 
    span:active{
      background: #74ff3b;
      color: #111;

    }
    span.clear{
      background: #ff3077;
    }
    span.plus{
      grid-row: span 2;
      height: 120px;
    }
    span.equal{
      background: #03b1ff;
    }
}


</style>
