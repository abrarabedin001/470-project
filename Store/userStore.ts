import { getTasks } from '@/lib/getTasks';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { User, getAuth } from 'firebase/auth'
import firebase_app from '@/Database/config'
import { getUserTeams } from '@/Database/firestore/firebaseDb'
import { TeamMembers } from '@/lib/type'

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  refreshUser: () => Promise<void>
  loading: boolean
  setLoading: (loading: boolean) => void
  teamList: { id: string, name: string }[];
  setTeamList: () => void;
  currrentTeam: {
    label: string;
    value: string;
  } | null;
  setCurrentTeam: (team: { label: string, value: string } | null) => void;
  teamMembers: TeamMembers | null;
  setTeamMembers: (members: TeamMembers) => void;
  tasks: any[];
  getTasks: () => void;
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
        teamList: [],
        setTeamList: () => {
          if (get().user != null) {
            getUserTeams(get().user?.uid!).then(
              (teams) => {
                console.log('teams', teams)
                set({ teamList: teams })
              }
            )
          } else {
            // set({ teamList: [] })
            set({ teamList: [] })
            console.log('user is null')
          }

          // set({ teamList: list }),
        },
        currrentTeam: null,
        setCurrentTeam: (team: { label: string, value: string } | null) => set({ currrentTeam: team }),
        teamMembers: null,
        setTeamMembers: (members: TeamMembers) => set({ teamMembers: members }),
        tasks: [],
        getTasks: () => {
          getTasks(get().currrentTeam?.value!, (res: any) => {
            set({ tasks: res })
          })
        }
      }),
      { name: 'userStore470' }
    )
  )
)
