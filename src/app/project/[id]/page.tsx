import { db } from '@/app/db';
import { projectTable, taskTable } from '@/app/db/schema';
import { eq } from 'drizzle-orm';
import { TaskList } from './task-list';

export default async function Project({ params}: { params: { id: number } }) {
  const { id } = await params;
  const tasks = await db.select().from(taskTable).where(eq(taskTable.projectID, id));
  return <TaskList projectID={id} tasks={tasks}/>;
  
}