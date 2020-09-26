import GetTreeByIdDTO from "../dto/getTreeById.dto";
import TreeDTO from "../dto/tree.dto";

export default interface ITreeService {
    getAllTree(): Promise<TreeDTO[]>
    getTreeById(treeId: string): Promise<TreeDTO>
}