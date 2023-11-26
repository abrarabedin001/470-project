import { getAllTasksInTeam } from "@/Database/firestore/firebaseDb"

export let getTasks = async (teamId: string, setTasks: (res: any) => void) => {
  if (teamId) {
    getAllTasksInTeam(teamId).then((res) => {
      setTasks(res)
    })
  } else {
    setTasks([])
  }
}