import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { User, getAuth } from 'firebase/auth'
import firebase_app from '@/Database/config'

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  refreshUser: () => Promise<void>
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        setUser: (user: User | null) => set({ user }),
        loading: true,
        setLoading: (loading: boolean) => set({ loading }),
        refreshUser: async () => {
          await getAuth(firebase_app).currentUser?.reload()
          set({ user: getAuth(firebase_app).currentUser })
          console.log('get refreshed user', get().user?.displayName)
        },
      }),
      { name: 'userStore470' }
    )
  )
)
