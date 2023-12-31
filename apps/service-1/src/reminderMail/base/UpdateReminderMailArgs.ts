/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReminderMailWhereUniqueInput } from "./ReminderMailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReminderMailUpdateInput } from "./ReminderMailUpdateInput";

@ArgsType()
class UpdateReminderMailArgs {
  @ApiProperty({
    required: true,
    type: () => ReminderMailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReminderMailWhereUniqueInput)
  @Field(() => ReminderMailWhereUniqueInput, { nullable: false })
  where!: ReminderMailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReminderMailUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReminderMailUpdateInput)
  @Field(() => ReminderMailUpdateInput, { nullable: false })
  data!: ReminderMailUpdateInput;
}

export { UpdateReminderMailArgs as UpdateReminderMailArgs };
