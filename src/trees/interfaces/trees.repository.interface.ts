import { Tree } from "../schemas/tree.schema";

export default interface ITreeRepository {
    getAllTrees(): Promise<Tree[]>
    getTreeById(treeId: string): Promise<Tree>
}