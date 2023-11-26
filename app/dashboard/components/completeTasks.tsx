// count.tsx

import React, { useEffect, useState } from 'react';
import { DataTable } from '@/app/dashboard/tasks/components/data-table';
import { columns } from '@/app/dashboard/tasks/components/columns';
import { CompleteTasks } from '@/Database/firestore/firebaseDb';
import { useUserStore } from '@/Store/userStore';

export default function TasksComplete() {
  const teamId: any = useUserStore((state) => state.currrentTeam?.value);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    if (teamId) {
        CompleteTasks(teamId).then((res) => {
        setTasks(res);
        console.log('tasks', tasks);
      });
    } else {
      setTasks([]);
    }
  }, [teamId]);

  return (
    <>
          <p className="text-center font-medium">
            {tasks.length}
          </p>
    </>
  );
}
