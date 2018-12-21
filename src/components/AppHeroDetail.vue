<template>
  <div v-if="selectedHero">
    <h2>{{selectedHero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{selectedHero.id}}</div>
    <div><span>name: </span> <input v-model="selectedHero.name" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '../Hero';

@Component({
  props: {
    selectedHero: Hero
  }
})
export default class AppHeroDetail extends Vue {
  
}
</script>