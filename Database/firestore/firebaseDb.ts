// import { createChatForTeam } from '@/Database/firestore/firebaseDb';
// import { dateFormatOptions } from './firebaseDb';
import firebase_app from '../config'

import {
  getDocs,
  query,
  where,
  addDoc, collection, doc, getFirestore, runTransaction, setDoc, updateDoc, getDoc, arrayUnion, orderBy
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



export async function createUser(uid: string, displayName: string, email: string, photoURL: string) {
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
        email,
        photoURL,
        teams: [],
      });
      console.log("User created with UID: ", uid);
    }
  } catch (e) {
    console.error("Error accessing user: ", e);
  }
}



/////////////////////
const tasks = collection(db, 'tasks');


export const getAllTasksInTeam = async (teamId: string): Promise<(TaskDetails & { id: string })[]> => {
  try {
    const tasksQuery = query(tasks, where('teamId', '==', teamId));
    const querySnapshot = await getDocs(tasksQuery);
    const allTasks = querySnapshot.docs.map(doc => {
      return {
        id: doc.id, // This is the unique ID of the document
        ...doc.data()
        ,
        createdAt: doc.data().createdAt.toDate('en-us', { year: "numeric", month: "short", day: "numeric" }),
      } as TaskDetails & { id: string };
    });
    console.log('success: Retrieved all tasks in team');
    console.log('allTasks', allTasks);
    return allTasks;
  } catch (error) {
    console.error('error: Failed to retrieve all tasks in team', error);
    throw error;
  }
};
export const OverviewTasks= async (teamId: string): Promise<(TaskDetails & { id: string })[]> => {
  try {
    const tasksQuery = query(tasks, 
      where('teamId', '==', teamId),
      where('priority', '==', 'high') // Add this line to filter by high priority
    );
    const querySnapshot = await getDocs(tasksQuery);
    const overviewTasks = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id, // This is the unique ID of the document
        title: data.title,
        priority: data.priority,
        status: data.status,
        // Only include the fields you need
        createdAt: data.createdAt.toDate('en-us', { year: "numeric", month: "short", day: "numeric" }),
      } as TaskDetails & { id: string };
    });
    console.log('success: Retrieved overview tasks in team');
    console.log('overviewTasks', overviewTasks);
    return overviewTasks;
  } catch (error) {
    console.error('error: Failed to retrieve overview tasks in team', error);
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




export const createTeam = async (teamName: string, adminId: string, email: string): Promise<string> => {
  console.log('teamName', teamName);
  try {
    // Create a new team document reference in the "teams" collection
    const teamDocRef = doc(collection(db, "teams"));
    console.log('teamDocRef', teamDocRef);

    // Set the new team document with the provided team name and admin ID
    await setDoc(teamDocRef, { name: teamName, admin: adminId, createdAt: new Date() });
    console.log('success: Team created with ID:', teamDocRef.id);

    const membersCollection = collection(db, 'teams', teamDocRef.id, 'members');
    const memberDocRef = doc(membersCollection, adminId);
    await setDoc(memberDocRef, { userId: adminId, joinedAt: new Date(), email: email, role: 'admin' });
    console.log('success: Team member added');

    // Update the user's document with the new team ID in the "users" collection
    const userDocRef = doc(db, "users", adminId);
    await updateDoc(userDocRef, {
      teams: arrayUnion({ id: teamDocRef.id, name: teamName }) // Assuming 'teams' is an array of team IDs
    });
    const teamId = teamDocRef.id; // Get the team ID
    await createChatForTeam(teamId, [adminId]); // Create a chat for the team using the team ID and admin ID as the initial participant


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

// import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';

export const addTeamMemberByEmail = async (teamId: string, teamName: string, email: string, role: string): Promise<void> => {
  try {
    // Query the user's ID using their email
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    let userId = '';

    querySnapshot.forEach((doc) => {
      // Assuming each email is unique and can only have one user ID associated with it
      userId = doc.id;
    });

    // If no user found with that email, throw an error
    if (!userId) throw new Error('No user found with the provided displayName');

    // Use the user ID to add them as a team member
    const membersCollection = collection(db, 'teams', teamId, 'members');
    const memberDocRef = doc(membersCollection, userId);
    await setDoc(memberDocRef, { userId: userId, joinedAt: new Date(), email: email, role: role?.toLowerCase() || 'view' });
    console.log('success: Team member added');
    // Update the user's document with the new team ID in the "users" collection
    const teamDocRef = doc(collection(db, "teams"));
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      teams: arrayUnion({ id: teamDocRef.id, name: teamName }) // Assuming 'teams' is an array of team IDs
    });
  } catch (error) {
    console.error('error: Failed to add team member by displayName', error);
    throw error;
  }
}

export const updateTeamMemberRole = async (teamId: string, memberId: string, newRole: string): Promise<void> => {
  try {
    // Reference to the specific team member document
    const memberDocRef = doc(db, 'teams', teamId, 'members', memberId);

    // Update the role of the team member
    await updateDoc(memberDocRef, {
      role: newRole.toLowerCase()
    });

    console.log('success: Team member role updated');
  } catch (error) {
    console.error('error: Failed to update team member role', error);
    throw error;
  }
}

export const getTeamMembers = async (teamId: string): Promise<any[]> => {
  try {
    const membersCollection = collection(db, 'teams', teamId, 'members');
    const q = query(membersCollection);
    const querySnapshot = await getDocs(q);
    const members: { id: string, email: string, role: string, joinedAt: Date }[] = [];

    querySnapshot.forEach((memberDoc) => {
      // Push each member's data into the members array
      // You might want to include more or fewer details here depending on your needs
      members.push({
        id: memberDoc.id,
        ...memberDoc.data() as { email: string, role: string, joinedAt: Date },
      });
    });

    return members; // Returns an array of member objects
  } catch (error) {
    console.error('error: Failed to get team members', error);
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



//chat for team
const chatCollection = collection(db, 'teamChats');



// export const createChatForTeam = async (teamId: string, participants: string[]): Promise<string> => {
//   try {
//     // Create a new chat document
//     const chatDocRef = doc(chatCollection);
//     await setDoc(chatDocRef, {
//       teamId,
//       createdAt: new Date(),
//       participants
//     });

//     // Optionally, initialize the 'messages' subcollection with an empty document
//     // This step is not strictly necessary as Firestore allows adding to a subcollection directly
//     // But if you want to initialize it, you can do so like this:
//     const messagesCollectionRef = collection(chatDocRef, 'messages');
//     const initialMessageDocRef = doc(messagesCollectionRef);
//     await setDoc(initialMessageDocRef, {
//       // Add initial data for the message, or leave it empty
//     });

//     console.log('success: Chat created for team', teamId);
//     return chatDocRef.id;
//   } catch (error) {
//     console.error('error: Failed to create chat for team', error);
//     throw error;
//   }
// };

// export const addMessageForTeam = async (chatId: string, userId: string, text: string): Promise<void> => {
//   try {
//     const messageDocRef = doc(collection(db, 'teamChats', chatId, 'messages'));
//     let res = await setDoc(messageDocRef, {
//       userId,
//       text,
//       createdAt: new Date()
//     });
//     console.log('success: Message added');
//     return res;
//   } catch (error) {
//     console.error('error: Failed to add message', error);
//     throw error;
//   }
// }

// //receive messages
// export const getAllChatMessagesInTeam = async (teamId: string): Promise<any[]> => {
//   try {
//     const chatQuery = query(chatCollection, where('teamId', '==', teamId));
//     const querySnapshot = await getDocs(chatQuery);
//     const allMessages = querySnapshot.docs.map(doc => doc.data());
//     console.log('success: Retrieved all chat messages in team');
//     return allMessages;
//   } catch (error) {
//     console.error('error: Failed to retrieve all chat messages in team', error);
//     throw error;
//   }
// };



//chat for tasks

const teamChats = collection(db, 'teamChats');

export const createChatForTeam = async (teamId: string, participants: string[]): Promise<string> => {
  try {
    const chatDocRef = doc(teamChats, teamId);
    await setDoc(chatDocRef, {
      teamId,
      createdAt: new Date(),
      participants,
    });
    console.log('success: Chat created for task', teamId);
    return chatDocRef.id;
  } catch (error) {
    console.error('error: Failed to create chat for task', error);
    throw error;
  }
}




export const addMessage = async (chatId: string, userId: string, text: string): Promise<void> => {
  try {
    const messageDocRef = doc(collection(db, 'teamChats', chatId, 'messages'));
    await setDoc(messageDocRef, {
      userId,
      text,
      createdAt: new Date()
    });
    console.log('success: Message added');
  } catch (error) {
    console.error('error: Failed to add message', error);
    throw error;
  }
}

export const getChatMessages = async (chatId: string) => {
  try {
    // Define the path to the messages subcollection
    const messagesRef = collection(db, 'teamChats', chatId, 'messages');

    // Create a query to get all messages
    const q = query(messagesRef, orderBy('createdAt'));

    // Fetch the messages
    const querySnapshot = await getDocs(q);

    // Map the documents into an array
    const messages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log('success: Messages retrieved for chat', chatId);
    return messages;
  } catch (error) {
    console.error('error: Failed to retrieve messages for chat', chatId, error);
    throw error;
  }
}
