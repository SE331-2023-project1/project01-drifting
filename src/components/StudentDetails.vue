<!-- Assuming you have a route parameter to get the student ID -->
<script>
import StudentService from '../services/StudentService';
import { useStore } from '../store';

export default {
  data() {
    return {
      student: null
    };
  },
  async mounted() {
    const response = await StudentService.getStudentById(this.$route.params.id);
    this.student = response.data;
  },
  setup() {
    const store = useStore();
    const comments = store.state.comments;
    const newComment = ref('');

    const addComment = () => {
      store.addComment({ text: newComment.value });
      newComment.value = '';
    };

    return { comments, newComment, addComment };
  },
};
</script>
