import { Appointment } from "../appointment/Appointment";
import { JsonValue } from "type-fest";

export type Consultant = {
  appointments?: Array<Appointment>;
  availability: JsonValue;
  createdAt: Date;
  id: string;
  schedule: JsonValue;
  updatedAt: Date;
};
