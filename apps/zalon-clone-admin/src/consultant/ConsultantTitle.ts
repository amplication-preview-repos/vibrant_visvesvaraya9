import { Consultant as TConsultant } from "../api/consultant/Consultant";

export const CONSULTANT_TITLE_FIELD = "id";

export const ConsultantTitle = (record: TConsultant): string => {
  return record.id?.toString() || String(record.id);
};
