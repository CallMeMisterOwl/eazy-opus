import { db } from '@/app/db';
import { taskTable } from '@/app/db/schema';
import { eq } from 'drizzle-orm';
import { TaskList } from './task-list';

export default async function Project({ params: { id } }: { params: { id: number } }) {
  const tasks = await db.select().from(taskTable).where(eq(taskTable.projectID, id));
  return <TaskList projectID={id} tasks={tasks}/>;
  
}