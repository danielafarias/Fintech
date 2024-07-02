import React from 'react'

type DateInputProps = React.ComponentProps<"input"> & {
    label: string;
    id: string;
};

const generalStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "var(--color-2)",
    padding: "var(--gap-s) .75rem",
    backgroundColor: "var(--color-4)",
    borderRadius: "var(--gap)"
};

const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "var(--gap-s)",
    fontWeight: "600",
    ...generalStyle
};

const inputStyle: React.CSSProperties = {
    border: "none",
    fontFamily: "monospace",
    ...generalStyle
};

export const DateInput = ({ label, id, ...rest }: DateInputProps) => {
  return (
    <div>
        <label htmlFor={id} style={labelStyle}>{label}</label>
        <input id={id} name={id} type="date" {...rest} style={inputStyle} />
    </div>
  )
}
