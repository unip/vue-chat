<script setup lang="ts">
import RoomList from '@/components/RoomList.vue'
import ChatRoom from '@/components/ChatRoom.vue'
</script>

<template>
  <div class="flex h-screen">
    <RoomList class="w-1/3" />
    <ChatRoom class="w-2/3" />
  </div>
</template>
