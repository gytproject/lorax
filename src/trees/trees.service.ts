import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import ErrorList from 'src/config/errorList';
import TreeDTO from './dto/tree.dto';
import ITreeRepository from './interfaces/trees.repository.interface';
import ITreeService from './interfaces/trees.service.interface';
import { TreesRepository } from './trees.repository';

@Injectable()
export class TreesService implements ITreeService {

    constructor(
        @Inject(TreesRepository) private readonly treeRepository: ITreeRepository
    ){}

    async getAllTree (): Promise<TreeDTO[] | any>{
        return await this.treeRepository.getAllTrees()
    }

    async getTreeById(treeId: string): Promise<TreeDTO | any> {
        try {
            const findedTree = await this.treeRepository.getTreeById(treeId)

            if(!findedTree) throw new BadRequestException(ErrorList.treeNotFound)

            return findedTree

        } catch (error) {
            throw new BadRequestException(ErrorList.treeNotFound)
        }
    }

}
