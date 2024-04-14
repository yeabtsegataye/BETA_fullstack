import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Ad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Title : string;

    @Column()
    Description: string;

    @Column()
    Price : number;

    @Column()
    IMG : string;

    @ManyToOne(() => User, user => user.ads)
    user: User;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
