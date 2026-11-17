#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/5a9e872e0df447a92f814356e62943dbb9787ed994df0ff53d972423abb604d7/contract';
import endContract from '../../snapshots/5a9e872e0df447a92f814356e62943dbb9787ed994df0ff53d972423abb604d7/contract.json' with { type: 'json' };
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
          col('year', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
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
