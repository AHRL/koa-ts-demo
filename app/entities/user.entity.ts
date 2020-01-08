import { MaxLength, IsNotEmpty} from 'class-validator'
import { Entity, BaseEntity, ObjectIdColumn, Column } from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: number

  @MaxLength(10, { message: 'username too long' })
  @IsNotEmpty({ message: 'must include username' })
  @Column()
  username: string

  @IsNotEmpty({ message: 'must include age' })
  @Column()
  age: number
}