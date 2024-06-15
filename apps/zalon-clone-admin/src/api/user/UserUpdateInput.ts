import { AppointmentUpdateManyWithoutUsersInput } from "./AppointmentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutUsersInput;
  contactDetails?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  profilePicture?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
