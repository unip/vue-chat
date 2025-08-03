<script setup lang="ts">
import { useRoomStore } from '@/stores/roomStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const roomStore = useRoomStore()
const route = useRoute()

onMounted(() => {
  roomStore.fetchMockRooms()
})
</script>

<template>
  <div class="overflow-y-auto">
    <h2 class="text-lg font-bold mb-2 sticky top-0 bg-white p-4">Rooms</h2>
    <ul class="overflow-hidden">
      <li class="">
        <RouterLink
          to="/room/general"
          class="flex gap-2 hover:bg-blue-50 hover:text-blue-800 font-semibold text-sm px-4 py-2 w-full"
          :class="{
            'border-l-4 border-blue-500 bg-blue-50 font-semibold':
              route.params.roomId === 'general',
          }"
        >
          <img
            src="https://randomuser.me/api/portraits/lego/1.jpg"
            class="w-8 h-8 rounded-full overflow-hidden bg-gray-100"
            alt="avatar"
          />
          <div>Room General</div>
        </RouterLink>
      </li>
      <li :id="room.room_id" v-for="room in roomStore.rooms" :key="room.room_id" class="">
        <RouterLink
          :to="`/room/${room.room_id}`"
          class="flex gap-2 hover:bg-blue-50 hover:text-blue-800 font-semibold text-sm px-4 py-2 w-full"
          :class="{
            'border-l-4 border-blue-500 bg-blue-50 font-semibold':
              route.params.roomId === room.room_id,
          }"
        >
          <img
            :src="room.user_avatar_url"
            class="w-8 h-8 rounded-full overflow-hidden bg-gray-100"
            alt="avatar"
          />
          <div>
            Room {{ room.room_id }}
            <p v-if="room.last_customer_comment_text" class="text-xs text-gray-500 truncate">
              <strong>{{ room.name }}:</strong> {{ room.last_customer_comment_text }}
            </p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
