import 'dotenv/config';
import { definePrismaConfig } from 'prisma/config';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';
import { nextjsBuild } from '@prisma/composer/nextjs/control';
import { prismaCloud, prismaState } from '@prisma/composer-prisma-cloud/control';

export default definePrismaConfig({
  orm: ormConfig({
    contract: './src/prisma/contract.prisma',
    db: {
      connection: process.env['DATABASE_URL']!,
    },
  }),
});
