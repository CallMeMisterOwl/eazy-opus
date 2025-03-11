import { db } from '@/app/db';
import { taskTable } from '@/app/db/schema';
import { eq } from 'drizzle-orm';
import { TaskList } from './task-list';

type Params = Promise<{ id: string }>

export default async function Project(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  console.log("Raw Params:", params); // Debugging
  const int_id = Number(id)
  console.log("Converted Project ID:", id);

  if (isNaN(int_id)) {
    throw new Error("Invalid Project ID");
  }
  const tasks = await db.select().from(taskTable).where(eq(taskTable.projectID, int_id));
  console.log("Fetched Tasks:", tasks);
  return <TaskList projectID={int_id} tasks={tasks}/>;
  
}