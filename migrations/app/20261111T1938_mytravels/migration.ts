#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/8a1350e12ac723e3939fdcd98a5bb3462cce6fd47fdc6a3f4b88e89b5c34acfb/contract';
import startContract from '../../snapshots/8a1350e12ac723e3939fdcd98a5bb3462cce6fd47fdc6a3f4b88e89b5c34acfb/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/8db07a9a7851974cf5baf8da16e1ed9314a52fc076f3f7904f726a876aad0c83/contract';
import endContract from '../../snapshots/8db07a9a7851974cf5baf8da16e1ed9314a52fc076f3f7904f726a876aad0c83/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropIndex({ schema: 'public', table: 'Trip', index: 'Trip_actionKey_key' }),
      this.alterColumnType({
        schema: 'public',
        table: 'Trip',
        column: 'createdAt',
        type: 'timestamptz',
        using: placeholder('Trip.createdAt:convert'),
      }),
      this.addUnique({
        schema: 'public',
        table: 'Trip',
        constraint: 'Trip_actionKey_key',
        columns: ['actionKey'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'TripDetail',
        index: 'TripDetail_tripId_idx_75da6d97',
        columns: ['tripId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Waypoint',
        index: 'Waypoint_tripId_idx_75da6d97',
        columns: ['tripId'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
