<template>
  <div>
    <h3>{{ category.Name }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  props: ['category'],
  setup(props) {
    const snippet = computed(() => {
      if (props.category.Description.length > 70) {
        return props.category.Description.substring(0, 70) + ' ...';
      } else {
        return props.category.Description;
      }
    })
    return { snippet }
  }
}
</script>