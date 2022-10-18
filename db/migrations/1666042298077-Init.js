module.exports = class Init1666042298077 {
  name = 'Init1666042298077'

  async up(db) {
    await db.query(`CREATE TABLE "reward" ("id" character varying NOT NULL, "balance" numeric NOT NULL, "timestamp" numeric NOT NULL, "account" text NOT NULL, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`)
  }

  async down(db) {
    await db.query(`DROP TABLE "reward"`)
  }
}
