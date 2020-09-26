export default class TreeDTO {

    private readonly _id: string;
    private readonly type: number;
    private readonly name: string;
    private readonly description: string;
    private readonly price: number;
    private readonly createdAt: Date;
    private readonly updatedAt: Date;

    constructor(tree: Partial<TreeDTO>){
       Object.assign(this, tree)
    }

}
