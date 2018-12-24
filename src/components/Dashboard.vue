<template>
  <div>
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
    <a v-for="hero in heros" class="col-1-4">
        <div class="module hero">
        <h4>{{hero.name}}</h4>
        </div>
    </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeroService } from '../HeroService';
import { Hero } from '../Hero';

@Component
export default class Dashboard {
  heros: Hero[] = null;
  constructor() {
    this.heros = new HeroService().getHeros().slice(0,5);
  }
}
</script>