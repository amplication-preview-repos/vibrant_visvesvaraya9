import { AppointmentUpdateManyWithoutConsultantsInput } from "./AppointmentUpdateManyWithoutConsultantsInput";
import { InputJsonValue } from "../../types";

export type ConsultantUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutConsultantsInput;
  availability?: InputJsonValue;
  schedule?: InputJsonValue;
};
