<template>
  <div>
    <h3>{{ category.Name }}</h3>
    <p>{{ category.Description}}</p>  
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['category'],
  setup(props) {
    const snippet = computed(() => {
      return props.category.Description.substring(0, 100) + ' ...'
    })
    return { category: props.category, snippet }
  }
}
</script>