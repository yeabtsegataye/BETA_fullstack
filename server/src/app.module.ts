import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';
import { AdsModule } from './ads/ads.module';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';
import { FiendsModule } from './fiends/fiends.module';
// import { DatabaseModule } from './database/database.module';
// import { databaseProviders } from './database/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './post/entities/post.entity';
import { Ad } from './ads/entities/ad.entity';
import { Chat } from './chat/entities/chat.entity';
import { Comment } from './comments/entities/comment.entity';
import { Fiend } from './fiends/entities/fiend.entity';
import { Message } from './message/entities/message.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'tati',
    password: '123',
    database: 'social',
    entities: [
      Posts,Ad,Chat,Comment,Fiend,Message,User
    ],
    synchronize: true,
  }),UsersModule, MessageModule, ChatModule, AdsModule, PostModule, CommentsModule, FiendsModule, AuthModule, ],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
