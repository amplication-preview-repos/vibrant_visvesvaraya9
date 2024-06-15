import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type FeedbackUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  rating?: number | null;
  review?: string | null;
};
