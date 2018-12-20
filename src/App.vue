<template>
  <main>
    <h1>{{ title }}</h1>
    <app-heros></app-heros>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeros from './components/AppHeros.vue';

@Component({
  components: { AppHeros },
})
export default class App extends Vue {
  title: string = 'Tour of Heros';
}
</script>
