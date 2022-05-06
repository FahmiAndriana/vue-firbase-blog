import { projectFirestore } from "@/firebase/config"
import { doc } from "firebase/firestore"
import { ref } from "vue"


const getPosts = () => {
    const posts = ref([])
      const error = ref(null)

      const load = async () => {
        try{
          const res = await projectFirestore.collection('posts').get()
          posts.value = res.docs.map(doc =>{
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          console.log(data)

        } catch(err) {
          error.value = err.message
        }
        
      }


      return { posts, error, load}
}


export default getPosts