import { createTask, getAllTasksInTeam } from "@/Database/firestore/firebaseDb"
import user from "@/lib/token"
import { NextRequest } from "next/server"

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

export async function GET(req: NextRequest) {
  const url = new URL(req.url)

  const teamId = url.searchParams.get("teamId")
  // const take = url.searchParams.get("take")
  if (!teamId) {
    return Response.json({ error: 'Missing teamId' });
  }
  let res = await getAllTasksInTeam(teamId)
  console.log('axios call:', res)
  return Response.json(res);
  return new Response("Hello, Next.js!");
}