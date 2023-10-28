import { createTeam } from '@/Database/firestore/firebaseDb';
import TeamForm from '@/components/CreateTeamForm';
import React from 'react'

export default function ExpPage() {
  const adminId = '123'; // Replace with actual admin ID

  const handleTeamSubmit = async (teamDetails:any) => {
    console.log('Team Details:', teamDetails);
    // Here, you can call the createTeam function to save the team details to your database
    try {
      const teamId = await createTeam(teamDetails.name, teamDetails.adminId);
      console.log('Team Created with ID:', teamId);
    } catch (error) {
      console.error('Error creating team:', error);
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Create Team</h1>
      <TeamForm onSubmit={handleTeamSubmit} adminId={adminId} />
    </div>
  );
}
