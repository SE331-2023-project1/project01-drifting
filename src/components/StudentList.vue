<template>
    <div>
      <student-card v-for="student in paginatedStudents" :key="student.id" :student="student" @view-details="viewDetails" />
      <button @click="previousPage" v-if="currentPage > 0">Previous</button>
      <button @click="nextPage" v-if="currentPage < maxPage">Next</button>
    </div>
  </template>
  
  <script>
  import StudentCard from './StudentCard.vue';
  
  export default {
    components: { StudentCard },
    props: ['students', 'currentPage'],
    computed: {
      paginatedStudents() {
        return this.students.slice(this.currentPage * 3, (this.currentPage + 1) * 3);
      },
      maxPage() {
        return Math.ceil(this.students.length / 3) - 1;
      },
    },
    methods: {
      viewDetails(student) {
        this.$emit('view-details', student);
      },
      previousPage() {
        this.$emit('previous-page');
      },
      nextPage() {
        this.$emit('next-page');
      },
    },
  };
  </script>
  