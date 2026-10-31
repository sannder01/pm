import { sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
export const profiles = sqliteTable('profiles', {
  userId: text('user_id').primaryKey(),
  displayName: text('display_name').notNull(),
  createdAt: text('created_at').notNull().default(''),
});
export const completions = sqliteTable('completions', {
  userId: text('user_id').notNull(),
  lessonId: text('lesson_id').notNull(),
  completedAt: text('completed_at').notNull(),
}, table => [primaryKey({columns:[table.userId,table.lessonId]})]);
