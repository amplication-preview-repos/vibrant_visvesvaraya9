import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  review?: SortOrder;
  updatedAt?: SortOrder;
};
