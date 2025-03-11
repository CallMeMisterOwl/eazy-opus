import { db } from '@/app/db';
import { taskTable } from '../../db/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { title, description, projectID } = await request.json();
  
  if (!title || !description || !projectID) {
    return NextResponse.json(
      { error: 'Task title, description and project ID are required' },
      { status: 400 },
    );
  }
  await db.insert(taskTable).values({ title, description, status: 'inprogress', projectID });
  return NextResponse.json({ message: 'Task inserted successfully' }, { status: 200 });

}

