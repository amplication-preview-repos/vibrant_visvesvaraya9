import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type FeedbackCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  rating?: number | null;
  review?: string | null;
};
