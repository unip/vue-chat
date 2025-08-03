import { defineStore } from 'pinia'
import roomList from '@/data/list_rooms.json'

export interface Room {
  room_id: string
  name: string
  last_customer_comment_text: string | null
  user_avatar_url: string
}

export const useRoomStore = defineStore('roomStore', {
  state: () => ({
    rooms: [] as Room[],
  }),

  actions: {
    fetchMockRooms() {
      this.rooms = roomList.data.customer_rooms
    },
  },
})
