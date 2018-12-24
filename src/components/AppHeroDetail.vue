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
import { HeroService } from '../HeroService';

@Component
export default class AppHeroDetail extends Vue {
  selectedHero: Hero = null;
  
  created() {
    let heroId = this.$route.params.id;
    if (heroId !== undefined) {
      this.selectedHero = new HeroService().getHeros().find((hero) => {
        return hero["id"] == heroId;
      })
    }
  }  
}
</script>