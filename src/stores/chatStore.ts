import { defineStore } from 'pinia'

export interface Message {
  id: number
  user: string
  text: string
  isSelf?: boolean
}

export const useChatStore = defineStore('chatStore', {
  state: () => ({
    messagesPerRoom: {
      general: [
        { id: 1, user: 'system', text: 'Halo! Selamat datang di layanan pelanggan kami.' },
        {
          id: 2,
          user: 'me',
          text: 'Halo, saya mau tanya soal produk yang kemarin saya lihat.',
          isSelf: true,
        },
        { id: 3, user: 'system', text: 'Tentu! Produk apa yang dimaksud?' },
        { id: 4, user: 'me', text: 'Itu loh, yang headphone wireless warna hitam.', isSelf: true },
        {
          id: 5,
          user: 'system',
          text: 'Oh iya, itu masih ready stok. Apakah kamu ingin membelinya?',
        },
        { id: 6, user: 'me', text: 'Hmm, bisa dikirim ke luar Jawa?', isSelf: true },
        { id: 7, user: 'system', text: 'Bisa, pengiriman kami menjangkau seluruh Indonesia kok!' },
        { id: 8, user: 'me', text: 'Kira-kira ongkirnya berapa ya ke Makassar?', isSelf: true },
        {
          id: 9,
          user: 'system',
          text: 'Untuk Makassar, ongkir sekitar Rp25.000 - Rp30.000, tergantung ekspedisinya.',
        },
        { id: 10, user: 'me', text: 'Oke, aku pikir-pikir dulu deh ya.', isSelf: true },
        {
          id: 11,
          user: 'system',
          text: 'Baik! Kalau kamu butuh bantuan lain, tinggal chat aja 😊',
        },
        { id: 12, user: 'me', text: 'Eh bentar, kalau garansi gimana?', isSelf: true },
        { id: 13, user: 'system', text: 'Semua produk kami garansi resmi 1 tahun.' },
        { id: 14, user: 'me', text: 'Boleh deh. Sekalian tanya, bisa COD?', isSelf: true },
        { id: 15, user: 'system', text: 'Bisa! Tapi hanya untuk wilayah Jawa dan Bali ya.' },
        {
          id: 16,
          user: 'me',
          text: 'Waduh, saya di Makassar. Yah nggak bisa dong 😅',
          isSelf: true,
        },
        {
          id: 17,
          user: 'system',
          text: 'Hehe, iya nih. Tapi kalau transfer bank atau e-wallet aman kok!',
        },
        { id: 18, user: 'me', text: 'Oke deh. Makasih infonya ya, Mbak/Mas CS!', isSelf: true },
        { id: 19, user: 'system', text: 'Sama-samaa! Semoga harimu menyenangkan ✨' },
      ],
    } as Record<string, Message[]>,
  }),

  actions: {
    initRoom(roomId: string) {
      if (!this.messagesPerRoom[roomId]) {
        this.messagesPerRoom[roomId] = [
          {
            id: Date.now(),
            user: 'Bot',
            text: `Welcome to room ${roomId}`,
            isSelf: false,
          },
        ]
      }
    },

    addMessage(roomId: string, text: string) {
      const newMsg: Message = {
        id: Date.now(),
        user: 'You',
        text,
        isSelf: true,
      }

      if (!this.messagesPerRoom[roomId]) {
        this.initRoom(roomId)
      }

      this.messagesPerRoom[roomId].push(newMsg)
    },

    getMessages(roomId: string): Message[] {
      return this.messagesPerRoom[roomId] || []
    },
  },
})
