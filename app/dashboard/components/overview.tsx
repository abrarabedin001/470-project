// OverviewPage.tsx

import React, { useEffect, useState } from 'react'
import { DataTable } from '@/app/dashboard/tasks/components/data-table'
import { columns } from '@/app/dashboard/tasks/components/columns'
import { OverviewTasks } from '@/Database/firestore/firebaseDb'
import { useUserStore } from '@/Store/userStore'

export default function OverviewPage() {
  const teamId: any = useUserStore((state) => state.currrentTeam?.value)
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    if (teamId) {
      OverviewTasks(teamId).then((res) => {
        setTasks(res)
        console.log('tasks', tasks)
      })
    } else {
      setTasks([])
    }
  }, [teamId])

  return (
    <>
      {/* <div className="flex h-full flex-1 flex-col p-8 overflow-y-auto"> */}
      <div className="card px-4 pb-4 max-h-[250px] overflow-y-auto custom-scrollbar rounded-2xl">
        <table className="owcustom-table-white dark:owcustom-table text-gray-700 dark:text-silver-700 rounded-2xl">
          <thead className="">
            <tr className="rounded-xl">
              <th
                className="owtable-header-light dark:owtable-header custom-head-1"
                style={{ width: '32%' }}
              >
                Title
              </th>
              <th
                className="owtable-header-light dark:owtable-header"
                style={{ width: '16%' }}
              >
                Priority
              </th>
              <th
                className="owtable-header-light dark:owtable-header"
                style={{ width: '18%' }}
              >
                Status
              </th>
              <th
                className="owtable-header-light dark:owtable-header custom-head-2"
                style={{ width: '34%' }}
              >
                CreatedAt
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border divide-y divide-solid divide-x">
                <td
                  className="text-center owtable-body text-black dark:text-white max-w-[100px]"
                  style={{
                    width: '32%',
                    wordWrap: 'break-word',
                    hyphens: 'auto',
                  }}
                >
                  {task.title}
                </td>
                <td
                  className="text-center owtable-body text-black dark:text-white"
                  style={{ width: '16%' }}
                >
                  {task.priority}
                </td>
                <td
                  className="text-center owtable-body text-black dark:text-white"
                  style={{ width: '18%' }}
                >
                  {task.status}
                </td>
                <td
                  className="text-center owtable-body text-black dark:text-white"
                  style={{ width: '34%' }}
                >
                  {task.createdAt.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* </div> */}
    </>
  )
}
