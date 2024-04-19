import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  category: string;
}
