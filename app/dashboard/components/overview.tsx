
// OverviewPage.tsx

import React, { useEffect, useState } from 'react';
import { DataTable } from '@/app/dashboard/tasks/components/data-table';
import { columns } from '@/app/dashboard/tasks/components/columns';
import { OverviewTasks } from '@/Database/firestore/firebaseDb';
import { useUserStore } from '@/Store/userStore';

export default function OverviewPage() {
  const teamId: any = useUserStore((state) => state.currrentTeam?.value);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    if (teamId) {
      OverviewTasks(teamId).then((res) => {
        setTasks(res);
      });
    } else {
      setTasks([]);
    }
  }, [teamId]);

  return (
    <>
      {teamId && (
        <div className="flex h-full flex-1 flex-col p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-black">
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Priority</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id} className="text-white border-b">
                  <td className="py-2 px-4">{task.title}</td>
                  <td className="py-2 px-4">{task.priority}</td>
                  <td className="py-2 px-4">{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </>
  );
}
