import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import SchemaList from 'src/config/schemaList';
import { TreesController } from './trees.controller';
import { TreesRepository } from './trees.repository';
import { TreesService } from './trees.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: SchemaList.Tree.Token, schema: SchemaList.Tree.Schema }
      ]
    )
  ],
  controllers: [TreesController],
  providers: [TreesService, TreesRepository],
})
export class TreesModule {}
