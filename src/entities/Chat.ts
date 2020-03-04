import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  Column
} from 'typeorm';

import Message from './Message';
import User from './User';

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(
    () => Message,
    message => message.chat
  )
  messages: Message[];

  @Column({ nullable: true })
  passengerId: number;

  @Column({ nullable: true })
  driverId: number;

  @ManyToOne(
    () => User,
    user => user.chatsAsPassenger
  )
  passenger: User;

  @ManyToOne(
    () => User,
    user => user.chatsAsDriver
  )
  driver: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Chat;
