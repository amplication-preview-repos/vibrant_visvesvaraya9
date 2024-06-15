import { Consultant } from "../consultant/Consultant";
import { Feedback } from "../feedback/Feedback";
import { User } from "../user/User";

export type Appointment = {
  appointmentDate: Date | null;
  consultant?: Consultant | null;
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
