<template>
  <section class="container">
    <select v-model="comp_type" @change="toggleView" v-show="selectShow">
      {{selectShow}}

      <option v-for="(type,i) in type_of_calc" :key="type" :disabled="i===0? true:false" :selected="i===0? true:false">
        {{type}}
      </option>
    </select>
    <decreasingcalc v-show="comp_type==='decreasing'? true:false" @back="toggleView"></decreasingcalc>
  
      
  
  </section>

</template>

<script>
import decreasingcalc from '~/components/DecreasingCalc.vue'
export default {
  data(){
    return {
      comp_type: '',
      name: 'amir',
      type_of_calc: ['Loan Calculators', 'decreasing'],
      selectShow: true
  }},
  methods:{
    toggleView(data=''){
      try{  
        this.comp_type = data.target.value;
      } catch(e){
        this.comp_type = data;
      }
      this.selectShow= this.selectShow ? false : true;
    }
  },
  components: {
    decreasingcalc
  },
  
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
