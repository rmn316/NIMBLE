import { QueryRunner } from "typeorm";

export class UserCreateTable1561803165082 {

    /**
     * create user table migration
     * @param {QueryRunner} queryRunner
     * @returns {Promise<void>}
     */
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'email',
                    type: 'character varying',
                    nullable: false,
                },
                {
                    name: 'password',
                    type: 'character varying',
                    nullable: false,
                },
            ]
        }), true);
    }

    /**
     * Rollback create user table migration
     * @param {QueryRunner} queryRunner
     * @returns {Promise<void>}
     */
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
