#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/2fbe8509f4d9511becb04917845ea17ad8f8b0b5fc6bb6afc9128faba8132b51/contract';
import endContract from '../../snapshots/2fbe8509f4d9511becb04917845ea17ad8f8b0b5fc6bb6afc9128faba8132b51/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/edf0e46a231f9f8a3d1bd339df67d7bec78524ae46294f2d1988f2438256098e/contract';
import startContract from '../../snapshots/edf0e46a231f9f8a3d1bd339df67d7bec78524ae46294f2d1988f2438256098e/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey, sql } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'Trips',
        columns: [
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('image', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('lat', 'float8', { notNull: true, codecRef: { codecId: 'pg/float8@1' } }),
          col('lng', 'float8', { notNull: true, codecRef: { codecId: 'pg/float8@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('type', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('year', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addColumnWithTemporaryDefault({
        schema: 'public',
        table: 'Home',
        column: 'image',
        type: 'text',
        temporaryDefault: sql`''`,
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
