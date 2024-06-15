import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { FeedbackUpdateManyWithoutAppointmentsInput } from "./FeedbackUpdateManyWithoutAppointmentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  consultant?: ConsultantWhereUniqueInput | null;
  feedbacks?: FeedbackUpdateManyWithoutAppointmentsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
