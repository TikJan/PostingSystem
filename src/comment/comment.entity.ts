import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {Post} from "../post/post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    username: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    @ManyToOne(() => Post, (post) => post.id)
    post: number;
}
