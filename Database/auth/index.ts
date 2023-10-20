// import { useUserStore } from '@/lib/stores/userStore'
import firebase_app from '../config'
import { FirebaseError } from 'firebase/app'
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  updateProfile,
} from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'

export const auth = getAuth(firebase_app)
import { db } from '../firestore/firebaseDb'
import {
  doc,
  updateDoc,
} from 'firebase/firestore'

export async function signIn(email: string, password: string) {
  let result = null,
    error = null

  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e as FirebaseError
  }

  return { result, error }
}

export async function signOutUser(onSignOut: () => void) {
  await signOut(auth)
  onSignOut()
  console.log('User signed out')
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()
  let result = null,
    error = null

  try {
    result = await signInWithPopup(auth, provider)
  } catch (e) {
    error = e as FirebaseError
  }

  return { result, error }
}

export async function getCurrentUser() {
  await auth.currentUser?.reload()
  return auth.currentUser
}

export function subscribeToAuthChanges(
  onAuthStateChanged: (user: User | null) => void
) {
  return auth.onAuthStateChanged((user) => {
    onAuthStateChanged(user)
  })
}

export const updateUserName = async (userName: string) => {
  const user = auth.currentUser
  if (user) {
    await updateProfile(user, {
      displayName: userName,
    })
    console.log('User name updated!')
  }
}

export const updateUserProfileImage = async (file: File, customId: string) => {
  const user = auth.currentUser
  const storageRef = ref(getStorage(firebase_app), `images/${customId}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  const analysisDetailsDocRef = doc(db, 'user', customId)

  if (user && url) {
    await updateProfile(user, {
      photoURL: url,
    })
    await updateDoc(analysisDetailsDocRef, {
      photoUrl: url,
    }).catch((error) => {
      console.log(error)
    })
    return url
  }



  return null
}
