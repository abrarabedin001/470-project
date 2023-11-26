'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { statuses } from '../data/data'
import { priorities } from '../data/data'
import { taskSchema } from '../data/schema'

import {
  deleteTask,
  updateTaskPriority,
  updateTaskStatus,
} from '@/Database/firestore/firebaseDb'
import { useUserStore } from '@/Store/userStore'
// import { getTasks } from '@/lib/getTasks'
interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original)
  const userId = useUserStore((state) => state.user?.uid)

  const teamMembers = useUserStore((state) => state.teamMembers)

  let userPermission = teamMembers?.filter((member) => member.id == userId)[0]

  // let teamId: any = useUserStore((state) => state.currrentTeam?.value)
  let getTasks = useUserStore((state) => state.getTasks)
  console.log('userPermission:', userPermission)

  return (
    userPermission?.role != 'view' && (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={task.status}>
                {statuses.map((label) => (
                  <DropdownMenuRadioItem
                    key={label.value}
                    value={label.value}
                    onClick={(e) => {
                      updateTaskStatus(task.id, label.value).then((res) => {
                        getTasks()
                      })
                      // console.log(label.value, task.id)
                    }}
                  >
                    {label.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Priority</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={task.priority}>
                {priorities.map((label) => (
                  <DropdownMenuRadioItem
                    key={label.value}
                    value={label.value}
                    onClick={(e) => {
                      updateTaskPriority(task.id, label.value).then((res) => {
                        getTasks()
                      })
                      // console.log(label.value, task.id)
                    }}
                  >
                    {label.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              deleteTask(row.getValue('id'))
              getTasks()
            }}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  )
}
