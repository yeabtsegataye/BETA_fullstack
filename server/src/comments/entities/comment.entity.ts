import { Posts } from "../../post/entities/post.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id : bigint;

    @Column()
    comment : string;

    @ManyToOne(() => User, user => user.commenters)
    commenter: User;

    @ManyToOne(() => Posts, post => post.post)
    post: Posts;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
