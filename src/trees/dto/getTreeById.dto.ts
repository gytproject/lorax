import { IsString } from "class-validator";

export default class GetTreeByIdDTO {

    @IsString()
    readonly id: string

}