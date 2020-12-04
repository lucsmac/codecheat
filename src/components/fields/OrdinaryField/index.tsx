import { Field } from "./styles";

export default function OrdinaryField({ handleChange, name = '' }) {
  return (
    <Field name={name} onChange={handleChange} />
  )
}