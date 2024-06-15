import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  contactDetails?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
