import { Post, JsonController, Body, Param } from 'routing-controllers'
import { UsersService } from '../services'
import { User } from '../entities'

@JsonController()
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {
    this.usersService = usersService
  }

  @Post('/add')
  async add(@Body({ required: true }) user: User): Promise<any> {
    try {
      const searchRes = await this.usersService.search({username: user.username})
      if (searchRes.status === 1 && (searchRes.data as Array<object>).length > 0) {
        return { status: 0, msg: '该用户已存在'}
      }
      const addRes = await this.usersService.add(user)
      return addRes
    } catch (err) {
      return { status: 0, msg: '添加失败', err}
    }
  }

  @Post('/delete')
  async delete(@Body({ required: true }) options: { username: string }): Promise<any> {
    try {
      const deleteRes = await this.usersService.delete(options.username)
      return deleteRes
    } catch (err) {
      return { status: 0, msg: '删除失败', err}
    }
  }

  @Post('/modify')
  async modify(@Body({ required: true }) option: { username: string, newAge: number }): Promise<any> {
    try {
      const modifyRes = await this.usersService.modify(option)
      return modifyRes
    } catch (err) {
      return { status: 0, msg: '修改失败', err}
    }
  }

  @Post('/all')
  async all(): Promise<any> {
    try {
      const searchRes = await this.usersService.search()
      return searchRes
    } catch (err) {
      return { status: 0, msg: '查找失败', err}
    }
  }
}