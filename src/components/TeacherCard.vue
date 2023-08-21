<script setup lang="ts">
import { Teacher } from "@/type";
import type { PropType } from "vue";

const props = defineProps({
  teacher: {
    type: Object as PropType<Teacher>,
    require: true,
  },
});
</script>

<template>
  <article>
    <RouterLink
      :to="{
        name: 'teacher-detail',
        params: { teacherId: teacher?.teacherId },
      }"
    >
      <div class="card-wrapper">
        <div class="card-body">
          <img
            class="pic w-24 h-24 object-cover mb-3 rounded-full shadow-lg"
            :src="teacher?.profileImage"
          />
          <h2>
            {{ teacher?.name }} {{ teacher?.surname }}
            <span>({{ teacher?.teacherId }})</span>
          </h2>
          <p>{{ teacher?.teacherId }}</p>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>
.card-wrapper {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 8px;
  background-color: rgb(211, 251, 255);
  margin: 1rem;
}


.card-body h2 {
  margin: 0 0 12px 0;
  font-size: 1.6rem;
  font-weight: bold;
}

.card-body h2 > span {
  font-size: 16px;
  color: #818181;
}

.card-body .card-email {
  margin: 0 0 12px 0;
  color: #818181;
}

.card-body p {
  margin: 0 0 12px 0;
}
</style>
