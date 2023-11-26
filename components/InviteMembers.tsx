'use client'

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Avatar from 'react-avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
  removeTeamMemberByEmail,
  updateTeamMemberRole,
} from '@/Database/firestore/firebaseDb'
import { get } from 'http'

export function InviteMembers() {
  const [email, setEmail] = useState('')
  const userId = useUserStore((state) => state.user?.uid)
  const teamId = useUserStore((state) => state.currrentTeam?.value)
  const teamName = useUserStore((state) => state.currrentTeam?.label)
  const teamMembers = useUserStore((state) => state.teamMembers)
  const setTeamMembers = useUserStore((state) => state.setTeamMembers)

  let userPermission = teamMembers?.filter((member) => member.id == userId)[0]
  console.log('userPermission:', userPermission)

  useEffect(() => {
    setTeamMembers()
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
                      <Avatar
                        name={`${member?.email}`}
                        size="30"
                        round={true}
                      />
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {member.email}
                        </p>
                      </div>
                    </div>
                    {/* {userPermission?.email} */}
                    {userPermission?.role == 'admin' ? (
                      <div className="flex flex-row justify-end space-x-4">
                        <Select
                          onValueChange={(e) => {
                            if (e == 'kickout') {
                              console.log('remove member')
                              if (teamId) {
                                removeTeamMemberByEmail(
                                  teamId,
                                  member.email
                                ).then((e) => setTeamMembers())
                              }
                            } else {
                              updateTeamMemberRole(teamId!, member.id, e)
                            }

                            setTeamMembers()
                          }}
                          defaultValue={member.role}
                        >
                          <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="edit">Can edit</SelectItem>
                            <SelectItem value="view">Can view</SelectItem>
                            <SelectItem value="kickout">Kick out</SelectItem>
                          </SelectContent>
                        </Select>
                        <button
                          onClick={() => {
                            ;() => {}
                          }}
                        >
                          Kick out
                        </button>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
