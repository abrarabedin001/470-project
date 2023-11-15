import { createChatForTask } from "@/Database/firestore/firebaseDb"
import user from "@/lib/token"



export async function POST(request: Request) {
  console.log(user)

  try {
    if (user) {
      console.log(user)
      const { taskId, participants } = await request.json()

      let res = await createChatForTask(taskId, participants)
      let something = JSON.stringify(res)
      return Response.json({ "hello": something })

    }
    return Response.json({ message: 'Success' });
  } catch (error) {
    console.error('Failed to create chat for task', error);
    return Response.json({ error: 'Internal Server Error' });
  }
}
export async function GET(req: Request) {
  const data = await req.json();
  console.log(data);
  return new Response("Hello, Next.js!");
}