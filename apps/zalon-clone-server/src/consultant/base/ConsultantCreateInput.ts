/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentCreateNestedManyWithoutConsultantsInput } from "./AppointmentCreateNestedManyWithoutConsultantsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ConsultantCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutConsultantsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutConsultantsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutConsultantsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutConsultantsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  availability?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  schedule?: InputJsonValue;
}

export { ConsultantCreateInput as ConsultantCreateInput };
