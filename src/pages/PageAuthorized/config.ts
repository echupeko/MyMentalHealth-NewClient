import { AuthorizeEvent, AuthorizeForm, FieldType, OverlaySide, SocialLink } from "@/types";

const links: SocialLink[] = [
  { name: "facebook", label: "Facebook", href: "#", iconClass: "fa-facebook-f" },
  { name: "google+", label: "Google Plus", href: "#", iconClass: "fa-google-plus-g" },
  { name: "linkedin", label: "LinkedIn", href: "#", iconClass: "fa-linkedin-in" },
];

export const forms: AuthorizeForm[] = [
  {
    name: "signUp",
    title: "Создать Аккаунт",
    links: links,
    eventType: AuthorizeEvent.SIGNUP,
    fields: [
      { name: "email", label: "Почта", placeholder: "Введите email", type: FieldType.EMAIL },
      { name: "username", label: "Имя пользователя", placeholder: "Введите логин", type: FieldType.TEXT },
      { name: "password", label: "Пароль", placeholder: "Введите пароль", type: FieldType.PASSWORD },
    ],
    overlay: {
      title: "С Возвращением!",
      subtitle: "Чтобы поддерживать с нами связь, пожалуйста, войдите в систему, указав свои личные данные",
      side: OverlaySide.LEFT,
    },
  },
  {
    name: "signIn",
    title: "Вход",
    links: links,
    eventType: AuthorizeEvent.LOGIN,
    fields: [
      { name: "email", label: "Почта", placeholder: "Введите email", type: FieldType.EMAIL },
      { name: "password", label: "Пароль", placeholder: "Введите пароль", type: FieldType.PASSWORD },
    ],
    overlay: {
      title: "Здравствуй, Друг!",
      subtitle: "Введите свои личные данные и начните путешествие с нами",
      side: OverlaySide.RIGHT,
    },
  },
];
