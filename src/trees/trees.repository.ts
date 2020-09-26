import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import SchemaList from 'src/config/schemaList';
import ITreeRepository from './interfaces/trees.repository.interface';
import { Tree } from './schemas/tree.schema';

@Injectable()
export class TreesRepository implements ITreeRepository {
    
    constructor(
        @InjectModel(SchemaList.Tree.Token) private treeModel: Model<Tree>
    ){}

    async getAllTrees(): Promise<Tree[]> {
        return await this.treeModel
            .find()
            .sort({ name: 1 })
            .select({ __v: false })
            .exec()
    }

    async getTreeById(treeId: string): Promise<Tree> {
        return await this.treeModel
            .findOne({ _id: treeId })
            .exec()
    }



}
