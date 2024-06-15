import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FeedbackWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
  review?: StringNullableFilter;
};
