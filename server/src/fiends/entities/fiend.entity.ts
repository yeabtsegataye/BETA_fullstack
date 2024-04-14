import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Fiend {
  @PrimaryGeneratedColumn()
  id: bigint;

  @ManyToOne(() => User, (user) => user.current_user)
  userID: User;

  @ManyToOne(() => User, (user) => user.Friends)
  Friends: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
