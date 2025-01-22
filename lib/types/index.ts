export interface RegisteredUser {
  _id?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  organizationName: string;
  City: string;
  State: string;
  localGovt: string;
  zipCode: number;
  Others?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface CustomerService {
  _id?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  organizationName: string;
  Message: string;
  createdAt?: string;
  updatedAt?: string;
}
