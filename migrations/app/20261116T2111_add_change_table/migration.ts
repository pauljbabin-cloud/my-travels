#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/4662bd63a69736d894d411f9574a149244a0b88733256b4ff04b5747f09c3bf0/contract';
import endContract from '../../snapshots/4662bd63a69736d894d411f9574a149244a0b88733256b4ff04b5747f09c3bf0/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/edf0e46a231f9f8a3d1bd339df67d7bec78524ae46294f2d1988f2438256098e/contract';
import startContract from '../../snapshots/edf0e46a231f9f8a3d1bd339df67d7bec78524ae46294f2d1988f2438256098e/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, sql } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
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
