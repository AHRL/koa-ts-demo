import { getMongoRepository, MongoRepository } from 'typeorm'
import { validate } from 'class-validator'
import { Service } from 'typedi'
import { User } from 'entities'
import { IResponse } from '../interfaces'

@Service()
export class UsersService {
  repository: MongoRepository<User>

  constructor() {
    this.repository = getMongoRepository(User)
  }

  async add(user: User): Promise<IResponse> {
    try {
      const res = await this.repository.insert(user)
      return { status: 1, msg: '添加成功', data: res.raw.ops[0]}
    } catch (err) {
      return { status: 0, msg: '添加失败', data: err }
    }
  }

  async delete(username: string): Promise<IResponse> {
    try {
      const findRes = await this.repository.findOne({ username })
      const res = await this.repository.remove(findRes)
      return { status: 1, msg: '删除成功', data: res }
    } catch (err) {
      return { status: 0, msg: '删除失败', data: err }
    }
  }

  async modify(option: {username: string, newAge: number}): Promise<any> {
    try {
      const res = await this.repository.update({username: option.username}, { age: option.newAge })
      return { status: 1, msg: '修改成功', data: res }
    } catch (err) {
      return { status: 0, msg: '修改失败', data: err }
    }
  }

  async search(option?: object): Promise<IResponse> {
    try {
      const res = await this.repository.find()
      return { status: 1, msg: '查找成功', data: res}
    } catch (err) {
      return { status: 0, msg: '查找失败', data: err }
    }
  }
}