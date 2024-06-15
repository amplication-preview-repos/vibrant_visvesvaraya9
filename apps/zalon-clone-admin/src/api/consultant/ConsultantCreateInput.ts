import { AppointmentCreateNestedManyWithoutConsultantsInput } from "./AppointmentCreateNestedManyWithoutConsultantsInput";
import { InputJsonValue } from "../../types";

export type ConsultantCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutConsultantsInput;
  availability?: InputJsonValue;
  schedule?: InputJsonValue;
};
