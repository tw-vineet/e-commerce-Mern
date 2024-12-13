import { TextField } from "@mui/material"



interface Iprops {
  type: string
  label: string
  styleProps?: any
  name: string
  variant?: "outlined" | "standard" | "filled"

}



export default function Input({
  type,
  label,
  styleProps,
  name,
  variant,

}: Iprops) {

  return (
    <>
      <TextField
        type={type}
        label={label}
        name={name}
        sx={{ ...styleProps }}
        variant={variant}
        size="small"



      />

    </>
  )
}
