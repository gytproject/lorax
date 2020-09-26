import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose'

@Schema({
    timestamps: true,
    versionKey: false
})
export class Tree extends Document {

  @Prop({ required: true, type: Number })
  type: number;

  @Prop({ required: true, type: String })
  name: string

  @Prop({ required: true, type: String })
  description: string

  @Prop({ required: false, type: Number })
  price: number
  
}

export const TreeSchema = SchemaFactory.createForClass(Tree);