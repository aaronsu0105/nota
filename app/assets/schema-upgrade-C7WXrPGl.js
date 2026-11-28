import{p as a}from"./main-V-GLesso.js";const A=[{table:"StudyTask",column:"deletedAt",ddl:'ALTER TABLE "StudyTask" ADD COLUMN "deletedAt" DATETIME'},{table:"StudyTask",column:"deletedMeta",ddl:'ALTER TABLE "StudyTask" ADD COLUMN "deletedMeta" TEXT'},{table:"CalendarEvent",column:"deletedAt",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "deletedAt" DATETIME'},{table:"CalendarEvent",column:"deletedMeta",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "deletedMeta" TEXT'},{table:"CalendarEvent",column:"externalId",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "externalId" TEXT'},{table:"CalendarEvent",column:"externalCalendarId",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "externalCalendarId" TEXT'},{table:"CalendarEvent",column:"externalUrl",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "externalUrl" TEXT'},{table:"CalendarEvent",column:"location",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "location" TEXT'},{table:"CalendarEvent",column:"meetingUrl",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "meetingUrl" TEXT'},{table:"RecurringItem",column:"deletedAt",ddl:'ALTER TABLE "RecurringItem" ADD COLUMN "deletedAt" DATETIME'},{table:"RecurringItem",column:"deletedMeta",ddl:'ALTER TABLE "RecurringItem" ADD COLUMN "deletedMeta" TEXT'},{table:"Flashcard",column:"sourceChunkId",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "sourceChunkId" TEXT'},{table:"Flashcard",column:"page",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "page" INTEGER'},{table:"Flashcard",column:"sourceMethod",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "sourceMethod" INTEGER'},{table:"FlashDeck",column:"kind",ddl:`ALTER TABLE "FlashDeck" ADD COLUMN "kind" TEXT NOT NULL DEFAULT 'term'`},{table:"Flashcard",column:"kind",ddl:`ALTER TABLE "Flashcard" ADD COLUMN "kind" TEXT NOT NULL DEFAULT 'term'`},{table:"Flashcard",column:"example",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "example" TEXT'},{table:"Flashcard",column:"objective",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "objective" TEXT'},{table:"Flashcard",column:"visual",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "visual" TEXT'},{table:"Flashcard",column:"concept",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "concept" TEXT'},{table:"Flashcard",column:"lecture",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "lecture" TEXT'},{table:"Flashcard",column:"section",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "section" TEXT'},{table:"FlashDeck",column:"sections",ddl:'ALTER TABLE "FlashDeck" ADD COLUMN "sections" TEXT'},{table:"Document",column:"pairedWithId",ddl:'ALTER TABLE "Document" ADD COLUMN "pairedWithId" TEXT'},{table:"Document",column:"pairedBy",ddl:'ALTER TABLE "Document" ADD COLUMN "pairedBy" TEXT'},{table:"NoteDoc",column:"myNotesMd",ddl:`ALTER TABLE "NoteDoc" ADD COLUMN "myNotesMd" TEXT NOT NULL DEFAULT ''`},{table:"RecurringItem",column:"skipDates",ddl:`ALTER TABLE "RecurringItem" ADD COLUMN "skipDates" TEXT NOT NULL DEFAULT '[]'`},{table:"Flashcard",column:"sourceCheck",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "sourceCheck" TEXT'},{table:"Flashcard",column:"state",ddl:`ALTER TABLE "Flashcard" ADD COLUMN "state" TEXT NOT NULL DEFAULT 'new'`},{table:"Flashcard",column:"queue",ddl:`ALTER TABLE "Flashcard" ADD COLUMN "queue" TEXT NOT NULL DEFAULT 'new'`},{table:"Flashcard",column:"remainingSteps",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "remainingSteps" INTEGER NOT NULL DEFAULT 0'},{table:"Flashcard",column:"leech",ddl:'ALTER TABLE "Flashcard" ADD COLUMN "leech" BOOLEAN NOT NULL DEFAULT false'},{table:"CalendarEvent",column:"doneAt",ddl:'ALTER TABLE "CalendarEvent" ADD COLUMN "doneAt" DATETIME'}],n=["MailMessage"],c=[{table:"FlashDeck",create:[`CREATE TABLE "FlashDeck" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "documentIds" TEXT NOT NULL DEFAULT '[]',
        "focus" TEXT,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`]},{table:"Flashcard",create:[`CREATE TABLE "Flashcard" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "deckId" TEXT NOT NULL,
        "front" TEXT NOT NULL,
        "back" TEXT NOT NULL,
        "category" TEXT,
        "documentId" TEXT,
        "sourceChunkId" TEXT,
        "page" INTEGER,
        "sourceMethod" INTEGER,
        "dueAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "intervalDays" REAL NOT NULL DEFAULT 0,
        "ease" REAL NOT NULL DEFAULT 2.5,
        "reps" INTEGER NOT NULL DEFAULT 0,
        "lapses" INTEGER NOT NULL DEFAULT 0,
        "lastReviewedAt" DATETIME,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "Flashcard_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "FlashDeck" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      )`,'CREATE INDEX IF NOT EXISTS "Flashcard_deckId_dueAt_idx" ON "Flashcard"("deckId", "dueAt")']},{table:"FlashReview",create:[`CREATE TABLE "FlashReview" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "cardId" TEXT NOT NULL,
        "deckId" TEXT NOT NULL,
        "rating" INTEGER NOT NULL,
        "fromQueue" TEXT NOT NULL,
        "interval" INTEGER NOT NULL,
        "ease" REAL NOT NULL,
        "before" TEXT NOT NULL,
        "at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "FlashReview_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Flashcard" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      )`,'CREATE INDEX IF NOT EXISTS "FlashReview_deckId_at_idx" ON "FlashReview"("deckId", "at")','CREATE INDEX IF NOT EXISTS "FlashReview_cardId_idx" ON "FlashReview"("cardId")']},{table:"BuddyCase",create:[`CREATE TABLE "BuddyCase" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "folderId" TEXT NOT NULL,
        "condition" TEXT NOT NULL,
        "presentation" TEXT NOT NULL,
        "task" TEXT NOT NULL,
        "objective" TEXT,
        "keyPoints" TEXT NOT NULL DEFAULT '[]',
        "sources" TEXT NOT NULL DEFAULT '[]',
        "status" TEXT NOT NULL DEFAULT 'open',
        "attempts" INTEGER NOT NULL DEFAULT 0,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "solvedAt" DATETIME
      )`,'CREATE INDEX IF NOT EXISTS "BuddyCase_folderId_status_idx" ON "BuddyCase"("folderId", "status")']}];async function t(T){return(await a.$queryRawUnsafe("SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?",T)).length>0}async function s(T,E){return(await a.$queryRawUnsafe(`PRAGMA table_info("${T}")`)).some(e=>e.name===E)}const d=`"state" = 'new' AND ("lastReviewedAt" IS NOT NULL OR "reps" > 0)`,r=[`UPDATE "Flashcard" SET "state" = 'review', "queue" = 'review' WHERE ${d} AND "intervalDays" >= 1`,`UPDATE "Flashcard" SET "state" = 'relearning', "queue" = 'learn', "remainingSteps" = 1 WHERE ${d} AND "reps" > 0`,`UPDATE "Flashcard" SET "state" = 'learning', "queue" = 'learn', "remainingSteps" = 2 WHERE ${d}`];async function D(){const T=[];for(const e of c)if(!await t(e.table)){for(const L of e.create)await a.$executeRawUnsafe(L);T.push(`table ${e.table}`)}for(const e of A)!await t(e.table)||await s(e.table,e.column)||(await a.$executeRawUnsafe(e.ddl),T.push(`column ${e.table}.${e.column}`));let E=0;for(const e of r)E+=await a.$executeRawUnsafe(e);E&&T.push(`${E} reviewed flashcards given their Anki state`);for(const e of n)await t(e)&&(await a.$executeRawUnsafe(`DROP TABLE "${e}"`),T.push(`dropped ${e}`));return(await a.appSetting.deleteMany({where:{key:{startsWith:"mail."}}})).count&&T.push("removed the Outlook sign-in"),T}export{D as upgradeSchema};
