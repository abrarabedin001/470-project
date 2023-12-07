'use client'
// import { promises as fs } from 'fs'

import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { UserNav } from './components/user-nav'

import {
  AlertDialog,
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

import { useUserStore } from '@/Store/userStore'

import { useEffect, useState } from 'react'
import 'react-chat-elements/dist/main.css'
import user from '@/lib/token'

// import { AssignTeamForm } from '@/components/AssignTeamForm'

export default function TaskPage() {
  let teamId: any = useUserStore((state) => state.currrentTeam?.value)
  let getTasks = useUserStore((state) => state.getTasks)
  const userId = useUserStore((state) => state.user?.uid)

  const teamMembers = useUserStore((state) => state.teamMembers)

  let userPermission = teamMembers?.filter((member) => member.id == userId)[0]

  let tasks = useUserStore((state) => state.tasks)
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)

  useEffect(() => {
    getTasks()
    console.log('tasks baby!', tasks)
  }, [teamId])
  useEffect(() => {
    console.log('tasks baby!', tasks)
  }, [tasks])

  return (
    <>
      {teamId && (
        <>
          <div className="flex h-full flex-1 flex-col space-y-8 p-8 ">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your tasks!
                </p>
              </div>
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
          {userPermission?.role != 'view' && (
            <div>
              <AlertDialog open={showNewTeamDialog}>
                <AlertDialogTrigger>
                  <Button onClick={() => setShowNewTeamDialog(true)}>
                    Create Tasks
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Create Your Tasks:</AlertDialogTitle>
                    <AlertDialogDescription>
                      <TaskForm
                        close={() => {
                          setShowNewTeamDialog(false)
                          getTasks()
                        }}
                      ></TaskForm>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={() => setShowNewTeamDialog((prev) => !prev)}
                    >
                      Cancel
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </>
      )}
    </>
  )
}
