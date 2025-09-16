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
      username: 'postgres',   // замени на свой логин
      password: 'password',   // замени на свой пароль
      database: 'mydb',       // замени на имя своей БД
      entities: [UserEntity, PostEntity],
      synchronize: true,      // ⚠️ для разработки true (авто-создание таблиц)
    }),
    UserModule,
    PostModule,
  ],
})
export class AppModule {}
