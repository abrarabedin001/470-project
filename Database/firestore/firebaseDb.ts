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
// const users = collection(db, 'user')