export interface SocialLink {
  name: string;
  label: string;
  href: string;
  iconClass: string;
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
