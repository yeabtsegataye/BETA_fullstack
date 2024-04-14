import { Comment } from "src/comments/entities/comment.entity";
import { Message } from "src/message/entities/message.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id : bigint;

    @Column({nullable: true})
    hashtag : string;

    @Column({nullable: false})
    Description : string;

    @Column()
    IMG : string;

    @Column()
    Comment_count : number;

    @Column()
    Like_count : number;

    @Column()
    Shear_count : number;

    @ManyToOne(() => User, post => post.PosterID)
    posterID: User;
    
    @OneToMany(() => Comment, Comment => Comment.post)
    post: Comment[];

    @OneToMany(() => Message, message => message.PostID)
    postId: Message[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
