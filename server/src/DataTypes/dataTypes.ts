import { ObjectId } from "mongodb";

export type jwtCredential = {
    userId: ObjectId,
    isAdmin: boolean
}