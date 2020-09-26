import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { throwError } from 'rxjs';
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

    async getAllTree (): Promise<TreeDTO[]>{
       try {
            const allTrees = await this.treeRepository.getAllTrees()
            return allTrees.map(tree => tree.toObject())
       } catch (error) {
            console.log(`TreesRepository :: getAllTree :: ${error.toString()}`)
            throw new BadRequestException(ErrorList.treesNotFound)
       }
    }

    async getTreeById(treeId: string): Promise<TreeDTO> {
        try {
            const findedTree = await this.treeRepository.getTreeById(treeId)            
            if(!findedTree) throw new BadRequestException(ErrorList.treeNotFound)
            return findedTree.toObject()
        } catch (error) {
            console.log(`TreesRepository :: getTreeById :: ${error.toString()}`)
            throw new BadRequestException(ErrorList.treeNotFound)
        }
    }

}
