export interface ILoginDetails {
  loginEmail: string | undefined
  loginPassword: string
}
export interface ISignUpDetails {
  userName: String
  userEmail: String
  userPhone: String
  userPassword: String
}

export interface IFooterData {
  Support: string[]
  Account: string[]
  "Quick Links": string[]
}

export interface IButtonStyle {
  width: string
  background: string
  borderRadius: string
  color?: string
  border?: string
  marginTop?: string
  marginBottom?: string
}
