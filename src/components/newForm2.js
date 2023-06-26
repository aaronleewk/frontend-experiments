import * as React from "react";
import { useForm, useController } from "react-hook-form";

function Input(props) {

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function NewForm2() {
  const { handleSubmit, control, formState: { errors }} = useForm({
    defaultValues: {
      FirstName: ""
    },
    mode: "onChange"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Use Controller</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="FirstName" rules={{ required: true }} />
        <input type="submit" />
      </form>
    </div>
  );
}
