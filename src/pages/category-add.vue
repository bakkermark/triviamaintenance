<template>
  <h1>Add new category</h1>
  <VForm ref="refForm" @submit.prevent="refForm.validate() && handleSubmit()">
    <VRow>
      <VCol cols="12" md="6">
        <AppTextField
            v-model="Name"
            label="Name"
            placeholder="Type in the category name ..."
            :rules="[requiredValidator]"
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
            v-model="Sorting"
            label="Sorting"
            placeholder="Type in the sorting. It is a number."
            :rules="[requiredValidator, integerValidator]"
        />
      </VCol>
      <VCol cols="24">
        <AppTextarea
            :rules="[requiredValidator]"
            v-model="Description"
            label="Description"
            placeholder="Type in a short description for the Trivia category."
            auto-grow
        />
      </VCol>
      <VCol cols="12">
        <VBtn type="submit">
          Save
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addDoc, collection } from 'firebase/firestore'
import { projectFirestore } from '@/Firebase/config';
import AppTextField from "@core/components/app-form-elements/AppTextField.vue"
import AppTextarea from "@core/components/app-form-elements/AppTextarea.vue"

const Name = ref('')
const Description = ref('')
const Sorting = ref([])
const refForm = ref(null)
const router = useRouter()

const handleSubmit = async () => {
  // Check if the form validates
  const valid = await refForm.value.validate()
  if (!valid) return

  const category = {
    Name: Name.value,
    Description: Description.value,
    Sorting: Sorting.value,
  }
  await addDoc(collection(projectFirestore, 'TriviaCategories_nl'), category)
  router.push({ name: 'categories' })
}
</script>