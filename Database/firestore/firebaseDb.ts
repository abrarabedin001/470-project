import firebase_app from '../config'

import {
  getDocs,
  query,
  where,
  addDoc, collection, doc, getFirestore, runTransaction, setDoc, updateDoc, getDoc, arrayUnion
} from 'firebase/firestore';
import { BugDetails, TaskDetails } from '../../lib/type';
export const db = getFirestore(firebase_app)
console.log('Firebase App Initialized:', firebase_app);
const users = collection(db, 'user')
console.log('Firestore Instance Created:', db);



export const dateFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
} as Intl.DateTimeFormatOptions



export async function createUser(uid: string, displayName: string) {
  console.log('Checking for user with UID:', uid);
  const userRef = doc(db, "users", uid); // Specify the collection and document ID

  try {
    // Check if the user already exists
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      // If the user exists, log and do nothing
      console.log(`User with UID: ${uid} already exists.`);
    } else {
      // If the user does not exist, create a new user document
      await setDoc(userRef, {
        uid,
        createdAt: new Date(),
        updatedAt: new Date(),
        displayName,
        teams: [],
      });
      console.log("User created with UID: ", uid);
    }
  } catch (e) {
    console.error("Error accessing user: ", e);
  }
}


/////////////////////
const bugs = collection(db, 'bugs');

export const getAllBugsInTeam = async (teamId: string): Promise<BugDetails[]> => {
  try {
    const bugsQuery = query(bugs, where('teamId', '==', teamId));
    const querySnapshot = await getDocs(bugsQuery);
    const allBugs = querySnapshot.docs.map(doc => doc.data() as BugDetails);
    console.log('success: Retrieved all bugs in team');
    return allBugs;
  } catch (error) {
    console.error('error: Failed to retrieve all bugs in team', error);
    throw error;
  }
}

export const logBug = async (details: BugDetails): Promise<string> => {
  try {
    const bugDocRef = doc(bugs);
    await setDoc(bugDocRef, { ...details, status: 'Open', createdAt: new Date() });
    console.log('success: Bug logged');
    return bugDocRef.id;
  } catch (error) {
    console.error('error: Failed to log bug', error);
    throw error;
  }
}

export const assignBug = async (bugId: string, assigneeId: string): Promise<void> => {
  try {
    const bugDocRef = doc(bugs, bugId);
    await updateDoc(bugDocRef, { assigneeId });
    console.log('success: Bug assigned');
  } catch (error) {
    console.error('error: Failed to assign bug', error);
    throw error;
  }
}

export const updateBugStatus = async (bugId: string, status: string): Promise<void> => {
  try {
    const bugDocRef = doc(bugs, bugId);
    await updateDoc(bugDocRef, { status, updateAt: new Date() });
    console.log('success: Bug status updated');
  } catch (error) {
    console.error('error: Failed to update bug status', error);
    throw error;
  }
}

export const deleteBug = async (bugId: string): Promise<void> => {
  try {
    const bugDocRef = doc(bugs, bugId);
    await runTransaction(db, async (transaction) => {
      transaction.delete(bugDocRef);
    });
    console.log('success: Bug deleted');
  } catch (error) {
    console.error('error: Failed to delete bug', error);
    throw error;
  }
}



/////////////////////
const tasks = collection(db, 'tasks');

// export const getAllTasksInTeam = async (teamId: string): Promise<TaskDetails[]> => {
//   try {
//     const tasksQuery = query(tasks, where('teamId', '==', teamId));
//     const querySnapshot = await getDocs(tasksQuery);
//     const allTasks = querySnapshot.docs.map(doc => doc.data() as TaskDetails);
//     console.log('success: Retrieved all tasks in team');
//     return allTasks;
//   } catch (error) {
//     console.error('error: Failed to retrieve all tasks in team', error);
//     throw error;
//   }
// }

export const getAllTasksInTeam = async (teamId: string): Promise<(TaskDetails & { id: string })[]> => {
  try {
    const tasksQuery = query(tasks, where('teamId', '==', teamId));
    const querySnapshot = await getDocs(tasksQuery);
    const allTasks = querySnapshot.docs.map(doc => {
      return {
        id: doc.id, // This is the unique ID of the document
        ...doc.data()
      } as TaskDetails & { id: string };
    });
    console.log('success: Retrieved all tasks in team');
    return allTasks;
  } catch (error) {
    console.error('error: Failed to retrieve all tasks in team', error);
    throw error;
  }
};

export const createTask = async (details: TaskDetails): Promise<string> => {
  try {
    const taskDocRef = doc(tasks);
    await setDoc(taskDocRef, { ...details, createdAt: new Date() });
    console.log('success: Task created');
    return taskDocRef.id;
  } catch (error) {
    console.error('error: Failed to create task', error);
    throw error;
  }
}

export const assignTask = async (taskId: string, assigneeId: string): Promise<void> => {
  try {
    const taskDocRef = doc(tasks, taskId);
    await updateDoc(taskDocRef, { assigneeId });
    console.log('success: Task assigned');
  } catch (error) {
    console.error('error: Failed to assign task', error);
    throw error;
  }
}

export const updateTask = async (taskId: string, updates: Record<string, any>): Promise<void> => {
  try {
    const taskDocRef = doc(tasks, taskId);
    await updateDoc(taskDocRef, updates);
    console.log('success: Task updated');
  } catch (error) {
    console.error('error: Failed to update task', error);
    throw error;
  }
}

export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    const taskDocRef = doc(tasks, taskId);
    await runTransaction(db, async (transaction) => {
      transaction.delete(taskDocRef);
    });
    console.log('success: Task deleted');
  } catch (error) {
    console.error('error: Failed to delete task', error);
    throw error;
  }
}

/////////////////////
const teams = collection(db, 'teams');




export const createTeam = async (teamName: string, adminId: string): Promise<string> => {
  console.log('teamName', teamName);
  try {
    // Create a new team document reference in the "teams" collection
    const teamDocRef = doc(collection(db, "teams"));
    console.log('teamDocRef', teamDocRef);

    // Set the new team document with the provided team name and admin ID
    await setDoc(teamDocRef, { name: teamName, admin: adminId, createdAt: new Date() });
    console.log('success: Team created with ID:', teamDocRef.id);

    // Update the user's document with the new team ID in the "users" collection
    const userDocRef = doc(db, "users", adminId);
    await updateDoc(userDocRef, {
      teams: arrayUnion({ id: teamDocRef.id, name: teamName }) // Assuming 'teams' is an array of team IDs
    });

    return teamDocRef.id;
  } catch (error) {
    console.error('error: Failed to create team', error);
    throw error;
  }
}
export const getUserTeams = async (userId: string): Promise<{ id: string, name: string }[]> => {
  try {
    // Reference to the user's document in the "users" collection
    const userDocRef = doc(db, "users", userId);

    // Get the user's document
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      // Get the data from the user's document
      const userData = userSnap.data();

      // Access the 'teams' array from the user's data
      const teams = userData.teams || []; // If 'teams' does not exist, default to an empty array

      console.log(`Retrieved teams for user ${userId}:`, teams);
      return teams;
    } else {
      // Handle the case where the user does not exist
      console.log(`No user found with ID: ${userId}`);
      return []; // Return an empty array if the user does not exist
    }
  } catch (error) {
    console.error('Error retrieving user teams:', error);
    throw error; // Rethrow the error after logging it
  }
}

export const addTeamMember = async (teamId: string, memberId: string): Promise<void> => {
  try {
    const membersCollection = collection(db, 'teams', teamId, 'members');
    const memberDocRef = doc(membersCollection, memberId);
    await setDoc(memberDocRef, { joinedAt: new Date() });
    console.log('success: Team member added');
  } catch (error) {
    console.error('error: Failed to add team member', error);
    throw error;
  }
}

export const removeTeamMember = async (teamId: string, memberId: string): Promise<void> => {
  try {
    const memberDocRef = doc(db, 'teams', teamId, 'members', memberId);
    await runTransaction(db, async (transaction) => {
      transaction.delete(memberDocRef);
    });
    console.log('success: Team member removed');
  } catch (error) {
    console.error('error: Failed to remove team member', error);
    throw error;
  }
}

export const assignTeamRole = async (teamId: string, memberId: string, role: string): Promise<void> => {
  try {
    const memberDocRef = doc(db, 'teams', teamId, 'members', memberId);
    await updateDoc(memberDocRef, { role });
    console.log('success: Team role assigned');
  } catch (error) {
    console.error('error: Failed to assign team role', error);
    throw error;
  }
}

export const deleteTeam = async (teamId: string): Promise<void> => {
  try {
    const teamDocRef = doc(teams, teamId);
    await runTransaction(db, async (transaction) => {
      transaction.delete(teamDocRef);
    });
    console.log('success: Team deleted');
  } catch (error) {
    console.error('error: Failed to delete team', error);
    throw error;
  }

}


