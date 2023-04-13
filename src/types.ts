export interface SocialLink {
  name: string;
  label: string;
  href: string;
  iconClass: string;
}

export enum OverlaySide {
  LEFT = "left",
  FULL = "full",
  RIGHT = "right",
}

export interface AuthorizeOverlay {
  title: string;
  subtitle?: string;
  side: OverlaySide;
}

export enum FieldType {
  TEXT = "text",
  PHONE = "tel",
  PASSWORD = "password",
  EMAIL = "email",
  DATE = "date",
  TIME = "time",
  TEXTAREA = "textarea",
  SELECT = "select",
}

export type FieldValues = Record<string, any>;

export interface FormField {
  name: string;
  label?: string;
  placeholder?: string;
  type: FieldType;
  error?: ErrorMessage;
}

export enum AuthorizeEvent {
  LOGIN = "login",
  SIGNUP = "signup",
}

export interface AuthorizeForm {
  name: string;
  title: string;
  eventType?: AuthorizeEvent;
  links?: SocialLink[];
  fields: FormField[];
  overlay?: AuthorizeOverlay;
}

export interface ErrorMessage {
  message: string;
}

export interface Notification {
  type: NotificationTypes;
  message: string;
}

export enum NotificationTypes {
  ERROR = "ERROR",
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  INFORMATION = "INFORMATION",
}
