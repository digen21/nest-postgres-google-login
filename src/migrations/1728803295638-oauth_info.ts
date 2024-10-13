import { MigrationInterface, QueryRunner } from 'typeorm';

export class oauth_info1728803295638 implements MigrationInterface {
  name = 'oauth_info1728803295638';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app_public"."oauth_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "provider" text NOT NULL, "provider_id" text NOT NULL, "access_token" text NOT NULL, "refresh_token" text NOT NULL, "expires_at" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "oauth_info_id_pkey" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "oauth_info_user_id_idx" ON "app_public"."oauth_info" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "oauth_info_provider_idx" ON "app_public"."oauth_info" ("provider") `,
    );
    await queryRunner.query(
      `CREATE INDEX "oauth_info_provider_id_idx" ON "app_public"."oauth_info" ("provider_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "oauth_info_created_at_idx" ON "app_public"."oauth_info" ("createdAt") `,
    );
    await queryRunner.query(
      `CREATE INDEX "oauth_info_updated_at_idx" ON "app_public"."oauth_info" ("updatedAt") `,
    );
    await queryRunner.query(
      `ALTER TABLE "app_public"."oauth_info" ADD CONSTRAINT "oauth_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "app_public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "app_public"."oauth_info" DROP CONSTRAINT "oauth_info_user_id_fkey"`,
    );
    await queryRunner.query(
      `DROP INDEX "app_public"."oauth_info_updated_at_idx"`,
    );
    await queryRunner.query(
      `DROP INDEX "app_public"."oauth_info_created_at_idx"`,
    );
    await queryRunner.query(
      `DROP INDEX "app_public"."oauth_info_provider_id_idx"`,
    );
    await queryRunner.query(
      `DROP INDEX "app_public"."oauth_info_provider_idx"`,
    );
    await queryRunner.query(`DROP INDEX "app_public"."oauth_info_user_id_idx"`);
    await queryRunner.query(`DROP TABLE "app_public"."oauth_info"`);
  }
}
