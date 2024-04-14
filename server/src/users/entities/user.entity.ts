// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ad } from '../../ads/entities/ad.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Posts } from 'src/post/entities/post.entity';
import { Fiend } from 'src/fiends/entities/fiend.entity';
import { Message } from 'src/message/entities/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({nullable: false,unique: true})
  email: string;

  @Column()
  Password: string;
  
  @Column()
  phone: string;
  
  // Define the relationship with Ads
  @OneToMany(() => Ad, ad => ad.user)
  ads: Ad[];

  @OneToMany(() => Chat, chat => chat.sender)
  chatSender: Chat[];

  // Each user can be a receiver in multiple chats.
  @OneToMany(() => Chat, chat => chat.receiver)
  chatReceiver: Chat[];

  @OneToMany(() => Comment, Comment => Comment.commenter)
  commenters: Comment[];

  @OneToMany(() => Fiend, friend => friend.userID)
  current_user: Fiend[];
  
  @OneToMany(() => Fiend, friend => friend.Friends)
  Friends: Fiend[];

  @OneToMany(() => Posts, post => post.posterID)
  PosterID: Posts[];

  @OneToMany(() => Message, message => message.sender)
  sentMessages: Message[];

  // Each user can receive multiple messages.
  @OneToMany(() => Message, message => message.receiver)
  receivedMessages: Message[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
