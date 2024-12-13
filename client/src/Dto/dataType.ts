export interface loginDetails {
  loginEmail: string | undefined
  loginPassword: string
}
export interface signUpDetails {
  userName: String
  userEmail: String
  userPhone: String
  userPassword: String
}

export interface buttonCs {
  width: string
  background: string
  "border-radius": string
  "margin-top"?: string
  color?: string
  border?: string
  "margin-bottom"?: string
}

export interface buttonCsp {
  width: number
  background: string
  "border-radius": string
  "margin-top"?: string
  color?: string
  border?: string
  "margin-bottom"?: string
}
