import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConsultantWhereInput = {
  appointments?: AppointmentListRelationFilter;
  availability?: JsonFilter;
  id?: StringFilter;
  schedule?: JsonFilter;
};
