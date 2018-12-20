<template>
  <div>
    <h2>{{hero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div><span>name: </span>{{hero.name}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '../Hero';

@Component
export default class AppHeros extends Vue {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }
}
</script>
