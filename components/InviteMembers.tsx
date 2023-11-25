'use client'

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Avatar from 'react-avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'
import { useUserStore } from '@/Store/userStore'
import {
  addTeamMemberByEmail,
  getTeamMembers,
  updateTeamMemberRole,
} from '@/Database/firestore/firebaseDb'
import { TeamMembers } from '@/lib/type'
export function InviteMembers() {
  const [email, setEmail] = useState('')
  const teamId = useUserStore((state) => state.currrentTeam?.value)
  const teamName = useUserStore((state) => state.currrentTeam?.label)
  const teamMembers = useUserStore((state) => state.teamMembers)
  const setTeamMembers = useUserStore((state) => state.setTeamMembers)
  useEffect(() => {
    let func = async () => {
      if (teamId) {
        try {
          console.log('teamId:', teamId)
          let res = await getTeamMembers(teamId)
          console.log('teamMembers:', res)
          setTeamMembers(res as unknown as TeamMembers)
        } catch {
          console.log('error')
        }
      }
    }
    func()
  }, [teamId])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="secondary"
            className="shrink-0"
            onClick={() => {
              console.log('add member')
              if (teamId && teamName) {
                addTeamMemberByEmail(teamId, teamName, email, 'view')
              }
            }}
          >
            Add
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">People with access</h4>
          <div className="grid gap-6">
            {teamMembers &&
              Object.values(teamMembers).map((member: any) => (
                <>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      {/* <Avatar>
                        <AvatarImage src="/avatars/03.png" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar> */}
                      <Avatar
                        name={`${member?.email}`}
                        size="30"
                        round={true}
                      />
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {member.email}
                          {/* hello */}
                        </p>
                      </div>
                    </div>
                    <Select
                      onValueChange={(e) =>
                        updateTeamMemberRole(teamId!, member.id, e)
                      }
                      defaultValue={member.role}
                    >
                      <SelectTrigger className="ml-auto w-[110px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="edit">Can edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
