import { Appointment } from "../appointment/Appointment";

export type Feedback = {
  appointment?: Appointment | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  review: string | null;
  updatedAt: Date;
};
