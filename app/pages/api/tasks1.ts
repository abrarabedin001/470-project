import { createTask } from '@/Database/firestore/firebaseDb';
import { TaskDetails } from '@/lib/type';
import type { NextApiRequest, NextApiResponse } from 'next';
// import { createTask, TaskDetails } from '../../your-task-module'; // Import your createTask function and TaskDetails type

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    // Parse the request body to get task details
    const details: TaskDetails = req.body;

    // Validate the details if necessary (e.g., check for required fields)
    // ...

    // Call your createTask function with the parsed details
    const taskId = await createTask(details);

    // Send back the ID of the created task
    res.status(200).json({ taskId });
  } catch (error) {
    console.error('Failed to create task', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
