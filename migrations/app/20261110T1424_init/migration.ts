#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/8a1350e12ac723e3939fdcd98a5bb3462cce6fd47fdc6a3f4b88e89b5c34acfb/contract';
import endContract from '../../snapshots/8a1350e12ac723e3939fdcd98a5bb3462cce6fd47fdc6a3f4b88e89b5c34acfb/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/9017a75895ba0c15d892ffce35f2caab1d50273e132c0cca4565a1fd7ee6d0a0/contract';
import startContract from '../../snapshots/9017a75895ba0c15d892ffce35f2caab1d50273e132c0cca4565a1fd7ee6d0a0/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
