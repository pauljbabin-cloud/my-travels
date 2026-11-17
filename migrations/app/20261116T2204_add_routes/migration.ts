#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/2fbe8509f4d9511becb04917845ea17ad8f8b0b5fc6bb6afc9128faba8132b51/contract';
import startContract from '../../snapshots/2fbe8509f4d9511becb04917845ea17ad8f8b0b5fc6bb6afc9128faba8132b51/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/35854e3656e39e47c21130a489bd8a21aa06bea9084fcaa30b88a320e083594a/contract';
import endContract from '../../snapshots/35854e3656e39e47c21130a489bd8a21aa06bea9084fcaa30b88a320e083594a/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'Routes',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('lat', 'float8', { notNull: true, codecRef: { codecId: 'pg/float8@1' } }),
          col('lng', 'float8', { notNull: true, codecRef: { codecId: 'pg/float8@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('type', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('year', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
