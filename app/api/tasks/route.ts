import { createTask } from "@/Controller/firestore/firebaseDb"
import user from "@/lib/token"

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth();
// let user = onAuthStateChanged(auth, (user) => {
//   if (user) {
//     return user
//   } else {
//     return null
//   }
// });


export async function POST(request: Request) {
  console.log(user)

  try {
    if (user) {
      console.log(user)
      const body = await request.json()
      console.log(body)
      let res = await createTask(body)
      let something = JSON.stringify(res)
      return Response.json({ "hello": something })

    }
    return Response.json({ message: 'Success' });
  } catch (error) {
    console.error('Failed to create task', error);
    return Response.json({ error: 'Internal Server Error' });
  }
}
export async function GET(req: Request) {
  const data = await req.json();
  console.log(data);
  return new Response("Hello, Next.js!");
}