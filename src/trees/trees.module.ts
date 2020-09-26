import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import TreeDTO from './dto/tree.dto';
import { Tree, TreeSchema } from './schemas/tree.schema';
import { TreesController } from './trees.controller';
import { TreesRepository } from './trees.repository';
import { TreesService } from './trees.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tree', schema: TreeSchema }])
  ],
  controllers: [TreesController],
  providers: [TreesService, TreesRepository],
})
export class TreesModule {}
