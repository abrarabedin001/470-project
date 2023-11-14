import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
let user = onAuthStateChanged(auth, (user) => {
  if (user) {
    return user
  } else {
    return null
  }
});

export default user