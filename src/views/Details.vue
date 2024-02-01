<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="category" class="category">
    <h3>{{ category.Name }}</h3>
    <p class="pre">{{ category.Description }}</p>
    <button @click="handleClick" class="delete">Delete category</button>
  </div>
</template>

<script>
import getCategory from '../composables/getCategory'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default {
  props: ['id'],
  components: { },
  setup(props) {
    const route = useRoute()
    const { error, category, load } = getCategory(route.params.id)
    const router = useRouter()

    load()

    const handleClick = async () => {
      const docRef = doc(projectFirestore, 'TriviaCategories_nl', props.id)
      await deleteDoc(docRef)
      router.push('/')
    }

    return { error, category, handleClick }
  }
}
</script>

<style scoped>
.category {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>