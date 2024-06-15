import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "./AppointmentTitle";
import { CONSULTANT_TITLE_FIELD } from "../consultant/ConsultantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appointmentDate" source="appointmentDate" />
        <ReferenceField
          label="consultant"
          source="consultant.id"
          reference="Consultant"
        >
          <TextField source={CONSULTANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Feedback"
          target="appointmentId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="appointment"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <TextField label="review" source="review" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
