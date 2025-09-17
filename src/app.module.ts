import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { UserEntity } from './modules/user/user.entity';
import { PostEntity } from './modules/post/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  
      password: 'password',   
      database: 'mydb',      
      entities: [UserEntity, PostEntity],
      synchronize: true,     
    }),
    UserModule,
    PostModule,
  ],
})
export class AppModule {}
