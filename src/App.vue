<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  title: string = 'Tour of Heros';
}
</script>
