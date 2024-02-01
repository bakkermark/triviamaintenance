import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const getCategories = () => {
    const categories = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            const categoriesCollection = collection(projectFirestore, 'TriviaCategories_nl');
            const categoriesQuery = query(categoriesCollection, orderBy('Sorting', 'asc'));
            const categorySnapshots = await getDocs(categoriesQuery);

            categories.value = categorySnapshots.docs.map(doc => {
                let docData = doc.data();
                let snippet = docData.Description.substring(0, 70) + " ...";
                console.log('Mapping over docs', docData);
                return { ...docData, id: doc.id, snippet: snippet };
            });
            console.log('After map:', categories.value);
        } catch (err) {
            console.error('Error during fetching:', err);
            error.value = err.message;
        }
    };
    return { categories, error, load };
};

export default getCategories;