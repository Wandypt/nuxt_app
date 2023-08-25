import { getNewBanner } from '../database/repositories/bannerRepository'
import { getNewColumns } from '../database/repositories/columnRepository'
import { getNewCourses } from '../database/repositories/courseRepository'

export default defineEventHandler(async (e) => {
  try {
    const banners = await getNewBanner()
    const columns = await getNewColumns()
    const courses = await getNewCourses()
    return { ok: true, data: { banners, columns, courses } }
  }
  catch (error) {
    return sendError(e, createError('获取数据失败'))
  }
})
