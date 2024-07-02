import React from 'react'

type DateInputProps = React.ComponentProps<"input"> & {
    label: string;
    id: string;
};

export const DateInput = ({ label, id, ...rest }: DateInputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="date" {...rest} />
    </div>
  )
}
