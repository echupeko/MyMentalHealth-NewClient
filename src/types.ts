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
