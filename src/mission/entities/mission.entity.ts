import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
// Update the import path below if the actual path is different
import { Freelancer } from '../../freelancer/entities/freelancer.entity';
import { Competence } from '../../competence/competence.entity';

@ObjectType()
@Entity()
export class Mission {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  titre: string;

  @Column()
  @Field()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @Field(() => Float)
  budget: number;

  @Column()
  @Field()
  dateDebut: Date;

  @Column()
  @Field()
  dateFin: Date;

  @Column()
  @Field()
  statut: string;

  @ManyToOne(() => Freelancer, { nullable: true })
  @Field(() => Freelancer, { nullable: true })
  freelancer?: Freelancer;

  @ManyToMany(() => Competence)
  @JoinTable()
  @Field(() => [Competence])
  competencesRequises: Competence[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
} 