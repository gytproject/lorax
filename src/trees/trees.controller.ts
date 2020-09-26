import { Controller, Get, Inject, Param } from '@nestjs/common';
import GetTreeByIdDTO from './dto/getTreeById.dto';
import TreeDTO from './dto/tree.dto';
import ITreeService from './interfaces/trees.service.interface';
import { TreesService } from './trees.service';

@Controller('trees')
export class TreesController {

    constructor(
        @Inject(TreesService) private readonly treeService: ITreeService
    ) {}

    @Get()
    async findAll(): Promise<TreeDTO[]> {
        return await this.treeService.getAllTree()
    }

    @Get((':id'))
    async getTreeById(@Param() treeData: GetTreeByIdDTO): Promise<any> {
       return await this.treeService.getTreeById(treeData.id)
    }


}
