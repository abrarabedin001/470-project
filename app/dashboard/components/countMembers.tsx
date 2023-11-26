'use client'

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { useEffect, useState } from 'react'
import { useUserStore } from '@/Store/userStore'
import { getTeamMembers } from '@/Database/firestore/firebaseDb'
import { TeamMembers } from '@/lib/type'
export function CountMembers() {
  const [email, setEmail] = useState('')
  const teamId = useUserStore((state) => state.currrentTeam?.value)
  const teamName = useUserStore((state) => state.currrentTeam?.label)
  const teamMembers = useUserStore((state) => state.teamMembers)
  const setTeamMembers = useUserStore((state) => state.setTeamMembers)
  useEffect(() => {
    setTeamMembers()
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
