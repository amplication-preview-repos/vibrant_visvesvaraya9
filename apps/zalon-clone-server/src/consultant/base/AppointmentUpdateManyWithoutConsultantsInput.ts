/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AppointmentUpdateManyWithoutConsultantsInput {
  @Field(() => [AppointmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AppointmentWhereUniqueInput],
  })
  connect?: Array<AppointmentWhereUniqueInput>;

  @Field(() => [AppointmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AppointmentWhereUniqueInput],
  })
  disconnect?: Array<AppointmentWhereUniqueInput>;

  @Field(() => [AppointmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AppointmentWhereUniqueInput],
  })
  set?: Array<AppointmentWhereUniqueInput>;
}

export { AppointmentUpdateManyWithoutConsultantsInput as AppointmentUpdateManyWithoutConsultantsInput };
