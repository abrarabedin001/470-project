import firebase_app from '../config'
// import { AnalysisDetails, AnalysisType, User } from '@/types/analysis'
import {
  collection,
  doc,
  getFirestore,
  getDocs,
  query,
  where,
  getDoc,
  orderBy,
  updateDoc,
  addDoc,
  setDoc,
} from 'firebase/firestore'

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