import { AppointmentCreateNestedManyWithoutUsersInput } from "./AppointmentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutUsersInput;
  contactDetails?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  profilePicture?: string | null;
  roles: InputJsonValue;
  username: string;
};
