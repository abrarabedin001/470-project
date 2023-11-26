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
export function CountMembers() {
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
    <>
      {teamMembers && (
        <div className="font-large">
        {String(Object.values(teamMembers).length).padStart(2, '0')}
        </div>
      )}
      
    </>

)
      }
