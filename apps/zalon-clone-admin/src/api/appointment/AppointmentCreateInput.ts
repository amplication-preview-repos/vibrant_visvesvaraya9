import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { FeedbackCreateNestedManyWithoutAppointmentsInput } from "./FeedbackCreateNestedManyWithoutAppointmentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  consultant?: ConsultantWhereUniqueInput | null;
  feedbacks?: FeedbackCreateNestedManyWithoutAppointmentsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
