import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { TreesModule } from './trees/trees.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    TreesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
