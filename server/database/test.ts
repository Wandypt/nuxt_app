import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 插入一条数据
  // await prisma.user.create({
  //   data: {
  //     id: 7,
  //     username: 'wwp',
  //     password: 'wuweipeng427@gmail.com',
  //     nickname: 'fool4t',
  //     avatar: 'tt',
  //     sex: 'male',
  //   },
  // })
  // 更新数据
  // const post = await prisma.user.update({
  //   where: { id: 7 },
  //   data: { nickname: 'wandy' },
  // })

  // // eslint-disable-next-line no-console
  // console.log(post)
  // 查询所有用户
  const allUsers = await prisma.user.findMany()

  // console.log(allUsers)
  // eslint-disable-next-line no-console
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
