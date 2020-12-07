import { Field } from "./styles";

export default function OrdinaryField({ handleChange, value = '', name = '' }) {
  return (
    <Field value={value} name={name} onChange={handleChange} />
  )
}