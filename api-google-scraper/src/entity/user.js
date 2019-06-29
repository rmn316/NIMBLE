import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id;

  @Column({type: 'character varying', nullable: false})
  email;

  @Column({type: 'character varying', nullable: false})
  password;
}
