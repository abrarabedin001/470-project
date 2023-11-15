'use client'
import { createTeam } from '@/Database/firestore/firebaseDb'
import {
  addMessage,
  addMessageForTeam,
  createChatForTask,
  createChatForTeam,
} from '@/Database/firestore/firebaseDb'
import TeamForm from '@/components/CreateTeamForm'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ExpPage() {
  let createChat = async () => {
    // let res = await createChatForTask('123', ['123', '456'])
    let res = await addMessage('Wn8viTPGjrYLX0ulIBIF', '123', '456')
    console.log(res)
    return res
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Create Team</h1>
      {/* <TeamForm onSubmit={handleTeamSubmit} adminId={adminId} /> */}
      <Button onClick={createChat}> submit</Button>
    </div>
  )
}
