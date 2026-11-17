#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/4662bd63a69736d894d411f9574a149244a0b88733256b4ff04b5747f09c3bf0/contract';
import startContract from '../../snapshots/4662bd63a69736d894d411f9574a149244a0b88733256b4ff04b5747f09c3bf0/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/5a9e872e0df447a92f814356e62943dbb9787ed994df0ff53d972423abb604d7/contract';
import endContract from '../../snapshots/5a9e872e0df447a92f814356e62943dbb9787ed994df0ff53d972423abb604d7/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

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
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
