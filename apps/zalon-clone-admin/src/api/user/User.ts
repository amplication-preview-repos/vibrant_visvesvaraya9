import { Appointment } from "../appointment/Appointment";
import { JsonValue } from "type-fest";

export type User = {
  appointments?: Array<Appointment>;
  contactDetails: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  profilePicture: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
