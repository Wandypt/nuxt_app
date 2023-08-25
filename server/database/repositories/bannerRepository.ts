import type { Banner } from '@prisma/client'
import prisma from '~/server/database/client'

export async function getNewBanner(): Promise<Banner[] | null> {
  const result = await prisma.banner.findMany({
    orderBy: { id: 'desc' },
    take: 6,
  })
  return result
}
