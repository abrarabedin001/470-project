import firebase_app from '../config'
// import { AnalysisDetails, AnalysisType, User } from '@/types/analysis'
import {



  getDocs,
  query,
  where,
  getDoc,
  orderBy,

  addDoc,

} from 'firebase/firestore'
import { collection, doc, getFirestore, runTransaction, setDoc, updateDoc } from 'firebase/firestore';


export const dateFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
} as Intl.DateTimeFormatOptions

export const db = getFirestore(firebase_app)
const users = collection(db, 'user')

export async function createUser(uid: string) {
  const userDoc = doc(db, 'user', uid)
  await setDoc(userDoc, {
    uid,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  // const userSnap = await getDoc(userDoc)
  // return userSnap.data()
}

const bugs = collection(db, 'bugs');

export const logBug = async (details) => {
  const bugDocRef = doc(bugs);
  await setDoc(bugDocRef, { ...details, status: 'Open', createdAt: new Date() });
  return bugDocRef.id;
}

export const assignBug = async (bugId, assigneeId) => {
  const bugDocRef = doc(bugs, bugId);
  await updateDoc(bugDocRef, { assigneeId });
}

export const updateBugStatus = async (bugId, status) => {
  const bugDocRef = doc(bugs, bugId);
  await updateDoc(bugDocRef, { status });
}



const tasks = collection(db, 'tasks');

export const createTask = async (details) => {
  const taskDocRef = doc(tasks);
  await setDoc(taskDocRef, { ...details, status: 'Open', createdAt: new Date() });
  return taskDocRef.id;
}

export const assignTask = async (taskId, assigneeId) => {
  const taskDocRef = doc(tasks, taskId);
  await updateDoc(taskDocRef, { assigneeId });
}

export const updateTask = async (taskId, updates) => {
  const taskDocRef = doc(tasks, taskId);
  await updateDoc(taskDocRef, updates);
}

const teams = collection(db, 'teams');

export const createTeam = async (teamName, adminId) => {
  const teamDocRef = doc(teams);
  await setDoc(teamDocRef, { name: teamName, admin: adminId, createdAt: new Date() });
  return teamDocRef.id;
}

export const addTeamMember = async (teamId, memberId) => {
  const membersCollection = collection(db, 'teams', teamId, 'members');
  const memberDocRef = doc(membersCollection, memberId);
  await setDoc(memberDocRef, { joinedAt: new Date() });
}

export const removeTeamMember = async (teamId, memberId) => {
  const memberDocRef = doc(db, 'teams', teamId, 'members', memberId);
  await runTransaction(db, async (transaction) => {
    transaction.delete(memberDocRef);
  });
}

export const assignTeamRole = async (teamId, memberId, role) => {
  const memberDocRef = doc(db, 'teams', teamId, 'members', memberId);
  await updateDoc(memberDocRef, { role });
}

export const deleteTeam = async (teamId) => {
  const teamDocRef = doc(teams, teamId);
  await runTransaction(db, async (transaction) => {
    transaction.delete(teamDocRef);
  });
}
