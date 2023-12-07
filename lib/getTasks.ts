import { getAllTasksInTeam } from "@/Database/firestore/firebaseDb"
import axios from 'axios';
import { set } from "date-fns";
export let getTasks = async (teamId: string, setTasks: (res: any) => void) => {
  if (teamId) {

    try {
      let res = await axios.get('/api/tasks', {
        params: {
          teamId: teamId
        }
      })
      setTasks(res.data)

    } catch { }

  } else {
    setTasks([])
  }
}