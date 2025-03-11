import { db } from '@/app/db';
import { taskTable } from '@/app/db/schema';
import { eq } from 'drizzle-orm';
import { TaskList } from './task-list';

type Params = Promise<{ id: string }>

export default async function Project(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const int_id = Number(id)
  
  const tasks = await db.select().from(taskTable).where(eq(taskTable.projectID, int_id));
  return <TaskList projectID={int_id} tasks={tasks}/>;
  
}