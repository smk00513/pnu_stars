import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from 'src/comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/comment/comment.entity';

@Module({
  imports: [
    CommentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pnu_stars',
      entities: [Comment],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
