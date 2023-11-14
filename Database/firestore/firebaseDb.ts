import firebase_app from '../config'

import {
  getDocs,
  query,
  where,
  addDoc, collection, doc, getFirestore, runTransaction, setDoc, updateDoc, getDoc
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
  console.log('createUser', uid)
  const userRef = doc(db, "users", uid); // Specify the collection and document ID

  try {
    await setDoc(userRef, {
      uid,
      createdAt: new Date(),
      updatedAt: new Date(),
      displayName,
    });
    console.log("User created with UID: ", uid);
  } catch (e) {
    console.error("Error creating user: ", e);
  }
  // const userSnap = await getDoc(userDoc)
  // return userSnap.data()
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

export const getAllTasksInTeam = async (teamId: string): Promise<TaskDetails[]> => {
  try {
    const tasksQuery = query(tasks, where('teamId', '==', teamId));
    const querySnapshot = await getDocs(tasksQuery);
    const allTasks = querySnapshot.docs.map(doc => doc.data() as TaskDetails);
    console.log('success: Retrieved all tasks in team');
    return allTasks;
  } catch (error) {
    console.error('error: Failed to retrieve all tasks in team', error);
    throw error;
  }
}

export const createTask = async (details: TaskDetails): Promise<string> => {
  try {
    const taskDocRef = doc(tasks);
    await setDoc(taskDocRef, { ...details, status: 'Open', createdAt: new Date() });
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


// export const createTeam = async (teamName: string, adminId: string): Promise<void> => {
//   try {
//     const docRef = await addDoc(collection(db, 'teams'), {
//       name: 'Test Team',
//       admin: 'Test Admin',
//       createdAt: new Date(),
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// }

// export async function addSampleData() {
//   let teamId = 'UMcdZGjAIjfsQ8OJ0E4e '
//   try {
//     const teamDocRef = doc(db, 'teams', teamId);
//     console.log("teamDocRef", teamDocRef)
//     const teamDocSnap = await getDoc(teamDocRef);
//     console.log("teamDocSnap", teamDocSnap)

//     if (teamDocSnap.exists()) {
//       console.log('Team data:', teamDocSnap.data());
//       return teamDocSnap.data();
//     } else {
//       console.log('No such team!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting team:', error);
//     throw error;
//   }
// }


export const createTeam = async (teamName: string, adminId: string): Promise<string> => {
  console.log('teamName', teamName);
  try {
    const teamDocRef = doc(teams);
    console.log('teamDocRef', teamDocRef);
    await setDoc(teamDocRef, { name: teamName, admin: adminId, createdAt: new Date() });
    console.log('success: Team created with ID:', teamDocRef.id);
    return teamDocRef.id;
  } catch (error) {
    console.error('error: Failed to create team', error);
    throw error;
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

//chat section
const chatCollection = collection(db, 'chats');

// send messages
export const sendMessage = async (teamId: string, senderId: string, message: string, image?: string): Promise<string> => {
  try {
    const messageDocRef = doc(chatCollection);
    await setDoc(messageDocRef, {
      teamId,
      senderId,
      message,
      image,
      createdAt: new Date(),
    });
    console.log('success: Message sent');
    return messageDocRef.id;
  } catch (error) {
    console.error('error: Failed to send message', error);
    throw error;
  }
};

//receive messages
export const getAllChatMessagesInTeam = async (teamId: string): Promise<any[]> => {
  try {
    const chatQuery = query(chatCollection, where('teamId', '==', teamId));
    const querySnapshot = await getDocs(chatQuery);
    const allMessages = querySnapshot.docs.map(doc => doc.data());
    console.log('success: Retrieved all chat messages in team');
    return allMessages;
  } catch (error) {
    console.error('error: Failed to retrieve all chat messages in team', error);
    throw error;
  }
};