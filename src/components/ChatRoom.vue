<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useChatStore } from '@/stores/chatStore'
import { useRoomStore } from '@/stores/roomStore'

const route = useRoute()
const chatStore = useChatStore()
const roomStore = useRoomStore()

const roomId = ref<string>(route.params.roomId as string)
const activeRoom = computed(() => roomStore.rooms.find((room) => room.room_id === roomId.value))
const newMessage = ref<string>('')

watch(
  () => route.params.roomId,
  (newVal) => {
    roomId.value = newVal as string
    chatStore.initRoom(roomId.value)
  },
  { immediate: true },
)

const messages = computed(() => chatStore.getMessages(roomId.value))

const sendMessage = (): void => {
  if (!newMessage.value.trim()) return
  chatStore.addMessage(roomId.value, newMessage.value)
  newMessage.value = ''
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="bg-blue-300 p-4 font-bold">
      {{ activeRoom?.name || 'General' }}
    </div>

    <div id="messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['flex', msg.isSelf ? 'justify-end' : 'justify-start']"
      >
        <div
          :class="[
            'max-w-xs px-4 py-2 rounded-xl',
            msg.isSelf
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-gray-200 text-black rounded-bl-none',
          ]"
        >
          {{ msg.text }}
        </div>
      </div>
    </div>

    <div class="p-4 flex gap-2 bg-gray-100">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        class="rounded px-3 py-2 w-full bg-white"
        placeholder="Type a message..."
      />
      <button
        @click="sendMessage"
        :disabled="!newMessage.trim()"
        class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Send
      </button>
    </div>
  </div>
</template>

<style scoped>
#messages {
  background-image: url('/images/double-bubble-outline.webp');
}
</style>
