<template>
  <main>
    <h1>{{ title }}</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> | 
      <router-link to="/heros">Heros</router-link>
    </nav>
    <router-view></router-view>
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
