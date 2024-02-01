import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const getCategory = (id) => {
    const category = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const docRef = doc(projectFirestore, 'TriviaCategories_nl', id)
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                throw Error('That category does not exist')
            }
            category.value = { ...docSnap.data(), id: docSnap.id }
        } catch (err) {
            error.value = err.message
        }
    }

    return { category, error, load }
}

export default getCategory