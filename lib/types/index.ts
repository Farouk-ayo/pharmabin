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

export interface LoginInputs {
  emailAddress: string;
  password: string;
}

// DASHBOARD TYPES
export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  date: string;
}
export interface NotificationModalProps {
  isOpen: boolean;
  closeModal: () => void;
  notifications: Notification[];
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
