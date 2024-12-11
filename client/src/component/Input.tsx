import { TextField } from "@mui/material"



interface props {
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
  
}: props) {
  
  return (
    <>
      <TextField
        type={type}
        label={label}
        name={name}
        sx={{ ...styleProps}}
        variant={variant}
        size="small"


        
      />
             
    </>
  )
}
