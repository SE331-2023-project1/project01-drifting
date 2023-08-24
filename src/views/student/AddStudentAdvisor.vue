<template>
  <div>
    <div v-if="showMessage" class="mt-3 mb-3 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert"><div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Addition was successful!</p>
      <p class="text-sm">Thank you!</p>
    </div>
  </div>
</div>
    <form @submit.prevent="submit">
      <!-- Role Selector -->
      <label>Select Role:
        <select v-model="role" @change="resetForm">
          <option value="student">Add Student</option>
          <option value="advisor">Add Advisor</option>
        </select>
      </label>
      <br />
      <!-- Student Input Fields -->
      <div v-if="role === 'student'">
        <h3 class="text-[rgb(29,161,242)] text-xl font-bold">Add Student</h3>
        <div class="flex space-x-4">
          <div class="w-40">
            <h1 class="font-bold">Name:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_name"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.student.name" />
              <label for="floating_filled_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
            </div>
          </div>
          <div class="w-40">
            <h1 class="font-bold">Surname:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_surname"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.student.surname" />
              <label for="floating_filled_surname"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Surname</label>
            </div>
          </div>
          <div class="w-40">
            <h1 class="font-bold">StudentId:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_surname"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.student.studentId" />
              <label for="floating_filled_surname"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">StudentId</label>
            </div>
          </div>
        </div>
        <!-- 2nd row -->
        <div class="flex space-x-4">
          <div class="w-96">
            <h1 class="font-bold">Profile Image url:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_name"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.student.profileImage" />
              <label for="floating_filled_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Profile
                Image url</label>
            </div>
          </div>
          <div class="w-40">
            <h1 class="font-bold">Course :</h1>
            <div class="relative">
              <input type="text" id="floating_filled_surname"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.student.courseList" />
              <label for="floating_filled_surname"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Course
              </label>
            </div>
          </div>
        </div>
        <div class="w-40">
          <h1 class="font-bold">Teacher ID:</h1>
          <div class="relative">
            <input type="text" id="floating_filled_surname"
              class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" " v-model="form.student.teacherId" />
            <label for="floating_filled_surname"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Teacher
              ID:</label>
          </div>
        </div>
      </div>
      <!-- Teacher Input Fields -->
      <div v-if="role === 'advisor'">
        <h3 class="text-[rgb(121,66,173)] text-xl font-bold">Add Advisor</h3>
        <div class="flex space-x-4">
          <div class="w-40">
            <h1 class="font-bold">Name:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_name"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.teacher.name" />
              <label for="floating_filled_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
            </div>
          </div>
          <div class="w-40">
            <h1 class="font-bold">Surname:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_surname"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.teacher.surname" />
              <label for="floating_filled_surname"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Surname</label>
            </div>
          </div>
          <div class="w-40">
            <h1 class="font-bold">Teaching Subjects:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_surname"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.teacher.Teachingsubjects" />
              <label for="floating_filled_surname"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Teaching Subjects:</label>
            </div>
          </div>
        </div>
        <!-- 2nd row -->
        <div class="flex space-x-4">
          <div class="w-96">
            <h1 class="font-bold">Profile Image url:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_name"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.teacher.profileImage" />
              <label for="floating_filled_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Profile
                Image url</label>
            </div>
          </div>
          <div class="w-40">
            <h1 class="font-bold">Department:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_surname"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.teacher.department" />
              <label for="floating_filled_surname"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Department
              </label>
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-40">
            <h1 class="font-bold">Phone Number:</h1>
            <div class="relative">
              <input type="text" id="floating_filled_name"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " v-model="form.teacher.phonenumber" />
              <label for="floating_filled_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone Number</label>
            </div>
          </div>
          
        </div>




       
      </div>
      <!-- Submit Button -->

      <button type="submit"
        class="mt-6 w-48 relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
        <span
          class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
          <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span class="relative text-white">Add</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";











export default {
  setup() {
    const router = useRouter(); // Importing router to navigate
    const showMessage = ref(false); // A state to toggle the flash message
    const role = ref("student"); // Define role with default value as 'student'

    // Define your form object
    const form = reactive({
      student: {
        name: "",
        surname: "",
        studentId: "",
        profileImage: "",
        courseList: "",
        teacherId: "",
      },
      teacher: {
        teacherId: "",
        name: "",
        surname: "",
        Teachingsubjects: "",
        department: "",
        phonenumber: "",
        JoinedDate: "",
        profileImage: "",
      },
    });

    const resetForm = () => {
      // Resetting the form object
      form.student = {
        name: "",
        surname: "",
        studentId: "",
        profileImage: "",
        courseList: "",
        teacherId: "",
      };
      form.teacher = {
        teacherId: "",
        name: "",
        surname: "",
        Teachingsubjects: "",
        department: "",
        phonenumber: "",
        JoinedDate: "",
        profileImage: "",
      };
    };

    const submit = () => {
      // Show flash message
      showMessage.value = true;

      // After a short delay, redirect to the homepage
      setTimeout(() => {
        router.push("/"); // Redirect to homepage
      }, 2000); // 2-second delay
    };

    return { form, submit, showMessage, role, resetForm };
  },
  
};
</script>

<style>
.flash-message {
  color: green;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
