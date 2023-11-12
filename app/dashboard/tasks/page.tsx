'use client'
// import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Image from 'next/image'
import { z } from 'zod'

import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { UserNav } from './components/user-nav'
import { taskSchema } from './data/schema'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import TaskForm from '@/components/TaskForm'
import { getAllTasksInTeam } from '@/Database/firestore/firebaseDb'
import { useUserStore } from '@/Controller/userStore'
import { ta } from 'date-fns/locale'
import { useEffect, useState } from 'react'

// export const metadata: Metadata = {
//   title: 'Tasks',
//   description: 'A task and issue tracker build using Tanstack Table.',
// }

// Simulate a database read for tasks.
async function getTasks(teamId: string) {
  // if (teamId) {
  //   try {
  //     let promise = await getAllTasksInTeam(teamId)
  //     console.log('promise', promise)
  //     return z.array(taskSchema).parse(promise)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const data = await fs.readFile(
  //   path.join(process.cwd(), 'app/dashboard/tasks/data/tasks.json')
  // )

  // const tasks = JSON.parse(data.toString())
  const tasks = [
    {
      id: 'YHcgsHl2AQDl7eiVS6wc',
      label: 'bug',
      priority: 'high',
      status: 'backlog',
      teamId: '9AbAbz2YjCBMWxpwVSS5',
      title: 'another fix 2',
      createdAt: { seconds: 1699790113, nanoseconds: 331000000 },
    },
  ]

  return z.array(taskSchema).parse(tasks)
}

export default function TaskPage() {
  let teamId = useUserStore((state) => state.currrentTeam?.value)
  let [tasks, setTasks] = useState<any[]>([])
  useEffect(() => {
    if (teamId) {
      getAllTasksInTeam(teamId).then((res) => {
        setTasks(res)
      })
    }
  }, [teamId])
  // async function getData(teamId: string) {
  //   tasks = await getTasks(teamId)
  //   return tasks
  // }

  // getData(teamId!).then((res) => {
  //   // JSON.parse(data.toString())
  //   tasks = res
  //   console.log('tasks', tasks)
  //   tasks = [
  //     {
  //       id: 'YHcgsHl2AQDl7eiVS6wc',
  //       label: 'bug',
  //       priority: 'high',
  //       status: 'backlog',
  //       teamId: '9AbAbz2YjCBMWxpwVSS5',
  //       title: 'another fix 2',
  //       // createdAt: { seconds: 1699790113, nanoseconds: 331000000 },
  //     },
  //   ]
  // })

  // tasks = [
  //   {
  //     id: 'YHcgsHl2',
  //     label: 'bug',
  //     priority: 'high',
  //     status: 'backlog',
  //     teamId: '9AbAbz2YjCBMWxpwVSS5',
  //     title: 'another fix 2 sdf asd asdfa sdf',
  //     createdAt: { seconds: 1699790113, nanoseconds: 331000000 },
  //   },
  // ]

  return (
    <>
      {teamId && (
        <>
          <div className="md:hidden">
            <Image
              src="/examples/tasks-light.png"
              width={1280}
              height={998}
              alt="Playground"
              className="block dark:hidden"
            />
            <Image
              src="/examples/tasks-dark.png"
              width={1280}
              height={998}
              alt="Playground"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your tasks for this month!
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <UserNav />
              </div>
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
          <div>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Open</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Create Your Tasks:</AlertDialogTitle>
                  <AlertDialogDescription>
                    <TaskForm></TaskForm>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </>
      )}
    </>
  )
}
