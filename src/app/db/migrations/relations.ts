import { relations } from "drizzle-orm/relations";
import { project, task } from "./schema";

export const taskRelations = relations(task, ({one}) => ({
	project: one(project, {
		fields: [task.projectId],
		references: [project.id]
	}),
}));

export const projectRelations = relations(project, ({many}) => ({
	tasks: many(task),
}));