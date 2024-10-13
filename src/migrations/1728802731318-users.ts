import { MigrationInterface, QueryRunner } from 'typeorm';

export class users1728802731318 implements MigrationInterface {
  name = ' users1728802731318';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app_public"."users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" text, "email" text NOT NULL, "mobile" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "uniq_user_email" UNIQUE ("email"), CONSTRAINT "uniq_user_mobile" UNIQUE ("mobile"), CONSTRAINT "user_id_pkey" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "user_email_idx" ON "app_public"."users" ("email") `,
    );
    await queryRunner.query(
      `CREATE INDEX "user_mobile_idx" ON "app_public"."users" ("mobile") `,
    );
    await queryRunner.query(
      `CREATE INDEX "users_created_at_idx" ON "app_public"."users" ("createdAt") `,
    );
    await queryRunner.query(
      `CREATE INDEX "users_updated_at_idx" ON "app_public"."users" ("updatedAt") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "app_public"."users_updated_at_idx"`);
    await queryRunner.query(`DROP INDEX "app_public"."users_created_at_idx"`);
    await queryRunner.query(`DROP INDEX "app_public"."user_mobile_idx"`);
    await queryRunner.query(`DROP INDEX "app_public"."user_email_idx"`);
    await queryRunner.query(`DROP TABLE "app_public"."users"`);
  }
}
