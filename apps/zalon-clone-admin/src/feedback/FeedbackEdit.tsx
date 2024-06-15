import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="review" multiline source="review" />
      </SimpleForm>
    </Edit>
  );
};
