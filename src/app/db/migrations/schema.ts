import { pgTable, foreignKey, serial, text, integer, timestamp, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const tstatus = pgEnum("tstatus", ['todo', 'inprogress', 'done'])


export const task = pgTable("task", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	description: text().notNull(),
	status: tstatus().notNull(),
	duration: integer(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	projectId: integer("project_id").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [project.id],
			name: "task_project_id_project_id_fk"
		}),
]);

export const project = pgTable("project", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
});
