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
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  deleteUser,
  // updateProfile,
} from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
export const auth = getAuth(firebase_app)

import { db } from '../firestore/firebaseDb'
import {
  doc,
  updateDoc,
} from 'firebase/firestore'
import { fa } from '@faker-js/faker'
const googleAuthProvider = new GoogleAuthProvider();
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
export async function signUp(userName: string, email: string, password: string) {
  let result = null,
    error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
    if (result.user) {
      // Update the user's display name
      await updateProfile(result.user, {
        displayName: userName,
      });
    }
  } catch (e) {
    error = e as FirebaseError
  }

  return { result, error }
}

export async function signUpWithGoogle() {
  let user: any = null,
    error: any = null
  try {
    let result = await signInWithPopup(auth, googleAuthProvider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    user = result.user;
  } catch (e) {
    error = error as FirebaseError
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

  }

  return { user, error }

}

export async function signOutUser(onSignOut: () => void) {
  await signOut(auth)
  onSignOut()
  console.log('User signed out')
}

export async function signInWithGoogle() {
  let user = false,
    error = null
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      user = true;
      GoogleAuthProvider.credentialFromResult(result);



    }).catch((error) => {
      // Handle Errors here.
      error = error as FirebaseError
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  return { user, error }
}

export async function getCurrentUser() {
  await auth.currentUser?.reload()
  return auth.currentUser
}

export function subscribeToAuthChanges(
  onAuthStateChanged: (user: User | null) => void
) {
  console.log("auth", auth.currentUser?.getIdToken)
  return auth.onAuthStateChanged((user) => {
    onAuthStateChanged(user)
  })
}

export async function getUserCustomClaims() {
  let res = await auth.currentUser?.getIdToken(true)
  console.log(res)
  return res
}

export async function resetPassword(email: string) {
  let result = null,
    error = null;
  try {
    await sendPasswordResetEmail(auth, email);
    result = 'Password reset email sent!';
  } catch (e) {
    error = e as FirebaseError;
  }
  return { result, error };
}

const user1 = auth.currentUser;
export async function checkEmailInDatabase(email: string) {
  let result = 0
  try {
    console.log(email)
    await createUserWithEmailAndPassword(auth, email, '123456')
      .then(function (user) {
        if (user1 != null) {
          deleteUser(user1).then(() => {
            // User deleted.
            console.log("delete hoise")
          }).catch((error) => {
            // An error ocurred
            // ...
          });
        }
        // Email doesn't exist, you can handle this case
        console.log('Email does not exist');
        result = 0;
      })
      .catch(async function (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('hello vai')
          // Email already exists, handle this case
          result = 1;
          console.log('Email already exists');
        } else {
          // Handle other errors
          console.error(error.message);
        }
      });


  } catch (error) {
    console.error('Error checking email in database:', error);
    throw error as FirebaseError;
  }
  return { result };
}





// export const updateUserProfileImage = async (file: File, customId: string) => {
//   const user = auth.currentUser
//   const storageRef = ref(getStorage(firebase_app), `images/${customId}`)
//   await uploadBytes(storageRef, file)
//   const url = await getDownloadURL(storageRef)
//   const analysisDetailsDocRef = doc(db, 'user', customId)

//   if (user && url) {
//     await updateProfile(user, {
//       photoURL: url,
//     })
//     await updateDoc(analysisDetailsDocRef, {
//       photoUrl: url,
//     }).catch((error) => {
//       console.log(error)
//     })
//     return url
//   }



//   return null
// }
