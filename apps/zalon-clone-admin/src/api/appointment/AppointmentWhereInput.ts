import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  consultant?: ConsultantWhereUniqueInput;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
