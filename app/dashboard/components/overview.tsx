
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
  <div className="flex h-full flex-1 flex-col p-8">
    <div className="overflow-x-auto">
      <table className="custom-table">
        <thead>
          <tr>
            <th className="table-header">Title</th>
            <th className="table-header">Priority</th>
            <th className="table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((tasks, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{tasks.title}</td>
              <td>{tasks.priority}</td>
              <td>{tasks.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>
  );
}
