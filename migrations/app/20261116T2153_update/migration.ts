#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/2fbe8509f4d9511becb04917845ea17ad8f8b0b5fc6bb6afc9128faba8132b51/contract';
import endContract from '../../snapshots/2fbe8509f4d9511becb04917845ea17ad8f8b0b5fc6bb6afc9128faba8132b51/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/5a9e872e0df447a92f814356e62943dbb9787ed994df0ff53d972423abb604d7/contract';
import startContract from '../../snapshots/5a9e872e0df447a92f814356e62943dbb9787ed994df0ff53d972423abb604d7/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.alterColumnType({
        schema: 'public',
        table: 'Trips',
        column: 'year',
        type: 'text',
        operationClass: 'widening',
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
