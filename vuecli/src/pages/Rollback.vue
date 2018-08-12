<template>
  <DefaultLayout>
    <select v-model="select01" @mousedown="beforeChangeSelect01(select01)" @input="chnageSelect01($event)">
      <option v-for="item in selectOptions01" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </DefaultLayout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'home',
  components: {
    DefaultLayout
  },
  data:()=>({
    select01: 1
  }),
  computed: {
    selectOptions01 (){
      return [1, 2, 3, 4]
    }
  },
  methods: {
    beforeChangeSelect01 (value){
      this.select01OldValue = value;
    },
    chnageSelect01 (value){
      const oldValue = this.select01OldValue;
      const newValue = parseInt(value.target.value, 10);
      
      oldValue !== undefined && !confirm(`change ${oldValue} => ${newValue}`) && setTimeout(()=>{
        this.select01 = oldValue;
      })
    }
  }
}
</script>
