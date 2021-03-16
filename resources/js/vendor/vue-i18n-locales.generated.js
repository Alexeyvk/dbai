export default {
    "be": {
        "auth": {
            "failed": "E-mail ці пароль не існуюць.",
            "throttle": "Занадта шмат спробаў увахода. Паўтарыце спробу праз {seconds} seconds."
        },
        "pagination": {
            "previous": "&laquo; Previous",
            "next": "Next &raquo;"
        },
        "alerts": {
            "admin": {
                "common": {
                    "search": {
                        "noResult": "Не знойдзена",
                        "noMatchResult": "Няма супадзенняў"
                    }
                },
                "login": {
                    "error": "Уліковыя дадзеныя не адпавядаюць нашым."
                },
                "feedback": {
                    "error": "Памылка адпраўкі!",
                    "success": "Паведамленне паспяхова адпраўлена"
                },
                "forms": {
                    "success": "Поспех",
                    "data_written": "Дадзеныя запісаныя",
                    "error": "Праблемы",
                    "smthgwrong": "Нешта пайшло не так"
                }
            }
        },
        "passwords": {
            "password": "Пароль павінен змяшчаць не менш за шэсць сімвалаў.",
            "reset": "Ваш пароль быў зменены!",
            "sent": "На ваш e-mail адпраўлена спасылка для аднаўлення пароля",
            "token": "Гэты пароль няправільны.",
            "user": "Карыстальніка з такім e-mail адрасам знайсці немагчыма."
        },
        "mails": {
            "layout": {
                "hello": "Вітаем!",
                "regards": "З павагай"
            }
        },
        "buttons": {
            "admin": {
                "common": {
                    "delete": "Выдаліць",
                    "cancel": "Скасаваць",
                    "edit": "Рэдагаваць",
                    "apply": "Прыстасаваць",
                    "enableSelected": "Уключыць выбраныя",
                    "disableSelected": "Адключыць выбраныя",
                    "removeSelected": "Выдаліць выбраныя",
                    "create": "Стварыць",
                    "back": "Назад",
                    "save": "Захаваць",
                    "info": "Справка",
                    "cancellation": "Адмена",
                    "print": "Раздрукаваць",
                    "email": "Даслаць e-mail"
                },
                "support": "Дапамажы Камандзе Doika",
                "login": {
                    "submit": "Лагін"
                },
                "feedback": {
                    "submit": "Даслаць"
                },
                "users": {
                    "create": "Стварыць новага карыстальніка"
                },
                "campaigns": {
                    "create": "Стварыць кампанию",
                    "save": "Захаваць кампанию",
                    "delete": "Выдалiць!",
                    "uploadImage": "Загрузіць малюнак",
                    "deleteImage": "Выдаліць малюнак"
                },
                "notifications": {
                    "header": {
                        "onePay": "Для аднаразовых плацяжоў",
                        "subscriptions": "Для падпісак",
                        "mailing": "Наладкі рассыльшчыка"
                    },
                    "description": "Апісанне",
                    "change": "Змяніць паведамленне"
                }
            },
            "widget": {
                "back": "Назад",
                "confirm": "Пацвердзіць",
                "proceed": "Працягнуць",
                "oneTime": "Плацеж",
                "subscribe": "Падпіска",
                "email": "Email для падзякі"
            }
        },
        "validation": {
            "accepted": "The {attribute} must be accepted.",
            "active_url": "The {attribute} is not a valid URL.",
            "after": "The {attribute} must be a date after {date}.",
            "after_or_equal": "The {attribute} must be a date after or equal to {date}.",
            "alpha": "The {attribute} may only contain letters.",
            "alpha_dash": "The {attribute} may only contain letters, numbers, and dashes.",
            "alpha_num": "The {attribute} may only contain letters and numbers.",
            "array": "The {attribute} must be an array.",
            "before": "The {attribute} must be a date before {date}.",
            "before_or_equal": "The {attribute} must be a date before or equal to {date}.",
            "between": {
                "numeric": "The {attribute} must be between {min} and {max}.",
                "file": "The {attribute} must be between {min} and {max} kilobytes.",
                "string": "The {attribute} must be between {min} and {max} characters.",
                "array": "The {attribute} must have between {min} and {max} items."
            },
            "boolean": "The {attribute} field must be true or false.",
            "confirmed": "The {attribute} confirmation does not match.",
            "date": "The {attribute} is not a valid date.",
            "date_format": "The {attribute} does not match the format {format}.",
            "different": "The {attribute} and {other} must be different.",
            "digits": "The {attribute} must be {digits} digits.",
            "digits_between": "The {attribute} must be between {min} and {max} digits.",
            "dimensions": "The {attribute} has invalid image dimensions.",
            "distinct": "The {attribute} field has a duplicate value.",
            "email": "The {attribute} must be a valid email address.",
            "exists": "The selected {attribute} is invalid.",
            "file": "The {attribute} must be a file.",
            "filled": "The {attribute} field must have a value.",
            "image": "The {attribute} must be an image.",
            "in": "The selected {attribute} is invalid.",
            "in_array": "The {attribute} field does not exist in {other}.",
            "integer": "The {attribute} must be an integer.",
            "ip": "The {attribute} must be a valid IP address.",
            "ipv4": "The {attribute} must be a valid IPv4 address.",
            "ipv6": "The {attribute} must be a valid IPv6 address.",
            "json": "The {attribute} must be a valid JSON string.",
            "max": {
                "numeric": "The {attribute} may not be greater than {max}.",
                "file": "The {attribute} may not be greater than {max} kilobytes.",
                "string": "The {attribute} may not be greater than {max} characters.",
                "array": "The {attribute} may not have more than {max} items."
            },
            "mimes": "The {attribute} must be a file of type: {values}.",
            "mimetypes": "The {attribute} must be a file of type: {values}.",
            "min": {
                "numeric": "The {attribute} must be at least {min}.",
                "file": "The {attribute} must be at least {min} kilobytes.",
                "string": "The {attribute} must be at least {min} characters.",
                "array": "The {attribute} must have at least {min} items."
            },
            "not_in": "The selected {attribute} is invalid.",
            "numeric": "The {attribute} must be a number.",
            "present": "The {attribute} field must be present.",
            "regex": "The {attribute} format is invalid.",
            "required": "The {attribute} field is required.",
            "required_if": "The {attribute} field is required when {other} is {value}.",
            "required_unless": "The {attribute} field is required unless {other} is in {values}.",
            "required_with": "The {attribute} field is required when {values} is present.",
            "required_with_all": "The {attribute} field is required when {values} is present.",
            "required_without": "The {attribute} field is required when {values} is not present.",
            "required_without_all": "The {attribute} field is required when none of {values} are present.",
            "same": "The {attribute} and {other} must match.",
            "size": {
                "numeric": "The {attribute} must be {size}.",
                "file": "The {attribute} must be {size} kilobytes.",
                "string": "The {attribute} must be {size} characters.",
                "array": "The {attribute} must contain {size} items."
            },
            "string": "The {attribute} must be a string.",
            "timezone": "The {attribute} must be a valid zone.",
            "unique": "The {attribute} has already been taken.",
            "uploaded": "The {attribute} failed to upload.",
            "url": "The {attribute} format is invalid.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": []
        },
        "labels": {
            "http": {
                "404": {
                    "title": "404",
                    "description": ""
                }
            },
            "emailserver": "Паштовы сэрвер",
            "recurrent": "Падпіска",
            "single": "Аднаразовы плацёж",
            "admin": {
                "title": "Кіраванне",
                "datatables": {
                    "showPerPage": "Паказаць",
                    "entriesPerPage": "запісаў на старонке",
                    "search": "Пошук",
                    "actions": "Дзеянні",
                    "info": "Даведка"
                },
                "common": {
                    "search": "Пошук",
                    "footer": {
                        "EU": "Гэта дадатак было створана і падтрымліваецца пры фінансавай падтрымцы Еўрапейскага Саюза.",
                        "left": "Powered by",
                        "with": "with",
                        "by": "by"
                    },
                    "confirmation": "Вы ўпэўнены?"
                },
                "newMenu": {
                    "header": "Дадаць",
                    "campaign": "Новая кампанія",
                    "user": "Новы карыстальнік"
                },
                "languageMenu": {
                    "header": "Мова",
                    "be": "Беларуская",
                    "ru": "Руская",
                    "en": "Английская"
                },
                "accountMenu": {
                    "header": "Профіль",
                    "avatar": "Аватар карыстальніка",
                    "logout": "Выйсці"
                },
                "rightMenu": {
                    "divider": {
                        "configuration": "Канфігурацыя модуля",
                        "access": "Кіраванне доступам",
                        "help": "Частыя пытанні",
                        "feedback": "Зваротная сувязь"
                    }
                },
                "login": {
                    "title": "Уваход у сістэму",
                    "email": "E-mail адрас",
                    "placeholder": {
                        "email": "E-mail адрас",
                        "password": "Пароль"
                    },
                    "password": "Пароль",
                    "remember": "Запомніць мяне",
                    "reset": {
                        "link": "Забыліся пароль?",
                        "title": "Скід пароля",
                        "submit": "Адправіць спасылку на скід пароля",
                        "header": "Лагін"
                    },
                    "header": "Лагін"
                },
                "campaigns": {
                    "title": "Спіс кампаній",
                    "header": "Спіс кампаній",
                    "breadcrumb": "Спіс кампаній",
                    "name": "Назва кампаніі",
                    "status": "Статус кампаніі",
                    "backers": "Ахвярадаўцы",
                    "recurrent": "Падпіска",
                    "average": "Сярэдні чэк",
                    "received": "Сабраная сума",
                    "goal": "Мэтавая сума",
                    "days": "Колькасць дзён да заканчэння",
                    "description": "Апісанне",
                    "image": "Выява кампаніі",
                    "uploadImage": "Загрузіць малюнак",
                    "proportionsImage": "(аптымальныя суадносіны бакоў 2х1)",
                    "allowedImageTypes": "Магчымы фармат: png gif jpg jpeg.",
                    "paymentSystem": "Плацёжная сістэма",
                    "startAt": "Дата пачатку",
                    "finishAt": "Дата заканчэння",
                    "colors": "Канфігурацыя колераў",
                    "preview": "Прагляд кампаніі",
                    "active": "Дзеючая",
                    "amount": "Патрэбная сума",
                    "topBanner": "Верхні банэр",
                    "progressBar": "Паласа прагрэсу",
                    "options": "Параметры",
                    "placeholder": {
                        "shortcode": "Шорткод",
                        "header": "Стварыць кампанію",
                        "breadcrumb": "Стварыць",
                        "name": "Назва",
                        "image": "Файл не абраны",
                        "amount": "Сума грыўняў"
                    },
                    "create": {
                        "title": "Стварыць кампанію",
                        "header": "Стварыць кампанію",
                        "breadcrumb": "Стварыць кампанію"
                    },
                    "edit": {
                        "title": "Рэдагаваць кампанію",
                        "header": "Рэдагаваць кампанію",
                        "breadcrumb": "Рэдагаваць"
                    }
                },
                "transactions": {
                    "title": "Спіс ахвяраванняў",
                    "header": "Спіс ахвяраванняў",
                    "breadcrumb": "Спіс ахвяраванняў",
                    "date": "Дата",
                    "campaign": "Кампанія",
                    "amount": "Сума",
                    "backer": "Ахвярадаўца",
                    "recurrent": "Падпіска на кампанію",
                    "status": "Статус аплаты",
                    "currency": "Валюта",
                    "created_at": "Дата стварэння",
                    "backerStatus": "Статус карты",
                    "statuses": {
                        "success": "Паспяхова",
                        "failed": "Не паспяхова",
                        "error": "Не завершана"
                    },
                    "show": {
                        "title": "Паказаць плацёж",
                        "header": "Паказаць плацёж",
                        "breadcrumb": "Паказаць"
                    },
                    "placeholder": {
                        "date": "Дата",
                        "campaign": "Кампанія",
                        "amount": "Сума",
                        "backer": "Ахвярадаўца",
                        "recurrent": "Падпіска на кампанію",
                        "status": "Статус аплаты",
                        "backerStatus": "Статус карты"
                    }
                },
                "paymentSystems": {
                    "title": "Плацежныя сістэмы"
                },
                "layout": {
                    "title": "Знешні выгляд",
                    "font": "Колер шрыфта",
                    "background": "Колер фона",
                    "progressBar": "Колер паласы прагрэсу",
                    "button": "Колер кнопак"
                },
                "notifications": {
                    "title": "Паведамленні",
                    "name": "Назва паведамлення",
                    "text": "Апішыце лаканічна змест паведамлня",
                    "caution": "Выдаленая кампанія больш не ўзновіцца. Усе падпіскі прыпыняцца!"
                },
                "settings": {
                    "title": "Налады",
                    "payments": {
                        "header": "Злучэнне з плацежнай сістэмай",
                        "bePaidIdMarket": "Bepaid Market ID",
                        "artPayIdMarket": "Artpay Market Id",
                        "fondyIdMarket": "Fondy Market ID",
                        "bePaidKeyMarket": "Bepaid Market key",
                        "artPayKeyMarket": "Artpay Market key",
                        "fondyKeyMarket": "Fondy Market key",
                        "paymentInterval": "Абярыце інтэрвал рэкурэнтага плацяжу",
                        "paymentInterval1D": "1 дзень",
                        "paymentInterval1H": "1 гадзіна",
                        "paymentInterval1M": "1 месяц",
                        "paymentInterval1Y": "1 год",
                        "test": "Адключыць тэставыя плацяжы",
                        "maxPayment": "Максімальны плацёж, бел.руб",
                        "minPayment": "Мінімальны плацёж, бел.руб",
                        "termsOfUse": "Тэкст умовы карыстання модулем",
                        "placeholder": {
                            "bePaidIdMarket": "Bepaid Market ID",
                            "artPayIdMarket": "Artpay Market Id",
                            "fondyIdMarket": "Fondy Market ID",
                            "bePaidKeyMarket": "Bepaid Market key",
                            "artPayKeyMarket": "Artpay Market key",
                            "fondyKeyMarket": "Fondy Market key",
                            "test": "Адключыць тэставыя плацяжы",
                            "maxPayment": "Максімальны плацёж, бел.руб",
                            "minPayment": "Мінімальны плацёж, бел.руб"
                        }
                    },
                    "layout": {
                        "header": "Параметры макета"
                    },
                    "notifications": {
                        "address": "Адрас сэрвера",
                        "port": "Порт сэрвера",
                        "user": "Карыстальнік электроннай пошты",
                        "password": "Пароль",
                        "email": "Адрас электроннай пошты",
                        "header": "Наладка паведамленняў",
                        "reccurentTemplate": "Шаблон электроннага ліста для рэкурэнтных плацяжоў",
                        "singleTemplate": "Удзячнасць за зроблены плацеж на пошту",
                        "placeholder": {
                            "address": "Адрас сэрвера",
                            "port": "Порт сэрвера",
                            "user": "Карыстальнік электроннай пошты",
                            "password": "Пароль",
                            "email": "Адрас электроннай пошты"
                        }
                    }
                },
                "help": {
                    "title": "Агульная інфа",
                    "header": "Як карыстацца модулем"
                },
                "feedback": {
                    "title": "Зваротная сувязь",
                    "header": "Зваротная сувязь",
                    "email": "Ваш Email",
                    "name": "Імя",
                    "message": "Паведамленне",
                    "placeholder": {
                        "email": "Ваш Email",
                        "name": "Імя",
                        "message": "Напішыце Ваш зварот"
                    }
                },
                "users": {
                    "title": "Спіс карыстальнікаў",
                    "breadcrumb": "Спіс карыстальнікаў",
                    "header": "Спіс карыстальнікаў",
                    "email": "E-mail",
                    "name": "Імя",
                    "active": "Дзеючая",
                    "createdAt": "Дата стварэння",
                    "updatedAt": "Дата абнаўлення",
                    "message": "Паведамленне",
                    "password": "Пароль",
                    "passwordConfirmation": "Паўтарыце пароль",
                    "placeholder": {
                        "email": "E-mail",
                        "name": "Імя",
                        "message": "Напішыце Ваша паведамленне",
                        "password": "Пароль",
                        "passwordConfirmation": "Паўтарыце пароль"
                    },
                    "create": {
                        "breadcrumb": "Стварыць",
                        "header": "Стварыць карыстальніка"
                    },
                    "edit": {
                        "breadcrumb": "Рэдагаваць",
                        "header": "Рэдагаванне карыстальніка"
                    }
                }
            },
            "widget": {
                "title": "Дадзеныя карыстальніка",
                "name": "Імя Прозвішча",
                "email": "Пошта",
                "phone": "Тэлефон",
                "mask": "(+375)",
                "input": "Iншая сума",
                "invalidFeedback": "Калі ласка, увядзіце суму плацяжу",
                "received": "Сабраная сума",
                "needed": "Мэтавая сума",
                "thanks": "Вялікі дзякуй за дапамогу!",
                "paymentInfo": "Я згаджаюся з правіламі",
                "terms": "Правілы данэйта"
            }
        }
    },
    "en": {
        "auth": {
            "failed": "These credentials do not match our records.",
            "throttle": "Too many login attempts. Please try again in {seconds} seconds."
        },
        "pagination": {
            "previous": "&laquo; Previous",
            "next": "Next &raquo;"
        },
        "alerts": {
            "admin": {
                "common": {
                    "search": {
                        "noResult": "Not found",
                        "noMatchResult": "No match"
                    }
                },
                "login": {
                    "error": "These credentials do not match our records."
                },
                "feedback": {
                    "error": "Sending error!",
                    "success": "Message sent successfully"
                },
                "forms": {
                    "success": "Success",
                    "data_written": "Data written",
                    "error": "Error",
                    "smthgwrong": "Something went wrong"
                }
            }
        },
        "passwords": {
            "password": "Passwords must be at least eight characters and match the confirmation.",
            "reset": "Your password has been reset!",
            "sent": "We have e-mailed your password reset link!",
            "token": "This password reset token is invalid.",
            "user": "We can't find a user with that e-mail address."
        },
        "mails": {
            "layout": {
                "hello": "Hello!",
                "regards": "Best regards"
            }
        },
        "buttons": {
            "admin": {
                "common": {
                    "delete": "Delete",
                    "cancel": "Cancel",
                    "edit": "Edit",
                    "apply": "Apply",
                    "enableSelected": "Enable selected",
                    "disableSelected": "Disable selected",
                    "removeSelected": "Remove selected",
                    "create": "Create",
                    "back": "Back",
                    "save": "Save",
                    "info": "Info",
                    "cancellation": "Cancel",
                    "print": "Print",
                    "email": "Send email"
                },
                "support": "Help Doika Team",
                "login": {
                    "submit": "Login"
                },
                "feedback": {
                    "submit": "Send"
                },
                "users": {
                    "create": "Create new user"
                },
                "campaigns": {
                    "create": "Create campaign",
                    "save": "Save campaign",
                    "delete": "Delete!",
                    "uploadImage": "Upload image",
                    "deleteImage": "Delete image"
                },
                "notifications": {
                    "header": {
                        "onePay": "For one-time payments",
                        "subscriptions": "For subscriptions",
                        "mailing": "Mailer settings"
                    },
                    "description": "Description",
                    "change": "Change notification"
                }
            },
            "widget": {
                "back": "Back",
                "confirm": "Confirm",
                "proceed": "Proceed",
                "oneTime": "Payment",
                "subscribe": "Subscribe",
                "email": "Confirmation email"
            }
        },
        "validation": {
            "accepted": "The {attribute} must be accepted.",
            "active_url": "The {attribute} is not a valid URL.",
            "after": "The {attribute} must be a date after {date}.",
            "after_or_equal": "The {attribute} must be a date after or equal to {date}.",
            "alpha": "The {attribute} may only contain letters.",
            "alpha_dash": "The {attribute} may only contain letters, numbers, dashes and underscores.",
            "alpha_num": "The {attribute} may only contain letters and numbers.",
            "array": "The {attribute} must be an array.",
            "before": "The {attribute} must be a date before {date}.",
            "before_or_equal": "The {attribute} must be a date before or equal to {date}.",
            "between": {
                "numeric": "The {attribute} must be between {min} and {max}.",
                "file": "The {attribute} must be between {min} and {max} kilobytes.",
                "string": "The {attribute} must be between {min} and {max} characters.",
                "array": "The {attribute} must have between {min} and {max} items."
            },
            "boolean": "The {attribute} field must be true or false.",
            "confirmed": "The {attribute} confirmation does not match.",
            "date": "The {attribute} is not a valid date.",
            "date_equals": "The {attribute} must be a date equal to {date}.",
            "date_format": "The {attribute} does not match the format {format}.",
            "different": "The {attribute} and {other} must be different.",
            "digits": "The {attribute} must be {digits} digits.",
            "digits_between": "The {attribute} must be between {min} and {max} digits.",
            "dimensions": "The {attribute} has invalid image dimensions.",
            "distinct": "The {attribute} field has a duplicate value.",
            "email": "The {attribute} must be a valid email address.",
            "exists": "The selected {attribute} is invalid.",
            "file": "The {attribute} must be a file.",
            "filled": "The {attribute} field must have a value.",
            "gt": {
                "numeric": "The {attribute} must be greater than {value}.",
                "file": "The {attribute} must be greater than {value} kilobytes.",
                "string": "The {attribute} must be greater than {value} characters.",
                "array": "The {attribute} must have more than {value} items."
            },
            "gte": {
                "numeric": "The {attribute} must be greater than or equal {value}.",
                "file": "The {attribute} must be greater than or equal {value} kilobytes.",
                "string": "The {attribute} must be greater than or equal {value} characters.",
                "array": "The {attribute} must have {value} items or more."
            },
            "image": "The {attribute} must be an image.",
            "in": "The selected {attribute} is invalid.",
            "in_array": "The {attribute} field does not exist in {other}.",
            "integer": "The {attribute} must be an integer.",
            "ip": "The {attribute} must be a valid IP address.",
            "ipv4": "The {attribute} must be a valid IPv4 address.",
            "ipv6": "The {attribute} must be a valid IPv6 address.",
            "json": "The {attribute} must be a valid JSON string.",
            "lt": {
                "numeric": "The {attribute} must be less than {value}.",
                "file": "The {attribute} must be less than {value} kilobytes.",
                "string": "The {attribute} must be less than {value} characters.",
                "array": "The {attribute} must have less than {value} items."
            },
            "lte": {
                "numeric": "The {attribute} must be less than or equal {value}.",
                "file": "The {attribute} must be less than or equal {value} kilobytes.",
                "string": "The {attribute} must be less than or equal {value} characters.",
                "array": "The {attribute} must not have more than {value} items."
            },
            "max": {
                "numeric": "The {attribute} may not be greater than {max}.",
                "file": "The {attribute} may not be greater than {max} kilobytes.",
                "string": "The {attribute} may not be greater than {max} characters.",
                "array": "The {attribute} may not have more than {max} items."
            },
            "mimes": "The {attribute} must be a file of type: {values}.",
            "mimetypes": "The {attribute} must be a file of type: {values}.",
            "min": {
                "numeric": "The {attribute} must be at least {min}.",
                "file": "The {attribute} must be at least {min} kilobytes.",
                "string": "The {attribute} must be at least {min} characters.",
                "array": "The {attribute} must have at least {min} items."
            },
            "not_in": "The selected {attribute} is invalid.",
            "not_regex": "The {attribute} format is invalid.",
            "numeric": "The {attribute} must be a number.",
            "present": "The {attribute} field must be present.",
            "regex": "The {attribute} format is invalid.",
            "required": "The {attribute} field is required.",
            "required_if": "The {attribute} field is required when {other} is {value}.",
            "required_unless": "The {attribute} field is required unless {other} is in {values}.",
            "required_with": "The {attribute} field is required when {values} is present.",
            "required_with_all": "The {attribute} field is required when {values} are present.",
            "required_without": "The {attribute} field is required when {values} is not present.",
            "required_without_all": "The {attribute} field is required when none of {values} are present.",
            "same": "The {attribute} and {other} must match.",
            "size": {
                "numeric": "The {attribute} must be {size}.",
                "file": "The {attribute} must be {size} kilobytes.",
                "string": "The {attribute} must be {size} characters.",
                "array": "The {attribute} must contain {size} items."
            },
            "starts_with": "The {attribute} must start with one of the following: {values}",
            "string": "The {attribute} must be a string.",
            "timezone": "The {attribute} must be a valid zone.",
            "unique": "The {attribute} has already been taken.",
            "uploaded": "The {attribute} failed to upload.",
            "url": "The {attribute} format is invalid.",
            "uuid": "The {attribute} must be a valid UUID.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": []
        },
        "labels": {
            "http": {
                "404": {
                    "title": "404",
                    "description": ""
                }
            },
            "admin": {
                "title": "Administration",
                "datatables": {
                    "showPerPage": "Show",
                    "entriesPerPage": "entries per page",
                    "search": "Search",
                    "actions": "Actions",
                    "info": ""
                },
                "common": {
                    "search": "Search",
                    "footer": {
                        "EU": "This application has been created and maintained with the financial assistance of the European Union.",
                        "left": "Powered by",
                        "with": "with",
                        "by": "by"
                    },
                    "confirmation": "Are you sure?"
                },
                "newMenu": {
                    "header": "Add",
                    "campaign": "New campaign",
                    "user": "New user"
                },
                "languageMenu": {
                    "header": "Language",
                    "be": "Belarussian",
                    "ru": "Russian",
                    "en": "English"
                },
                "accountMenu": {
                    "header": "My profile",
                    "avatar": "User avatar",
                    "logout": "Logout"
                },
                "rightMenu": {
                    "divider": {
                        "configuration": "MODULE CONFIGURATION",
                        "access": "ACCESS MANAGEMENT",
                        "help": "FAQ",
                        "feedback": "FEEDBACK"
                    }
                },
                "login": {
                    "title": "Administration",
                    "email": "Email",
                    "placeholder": {
                        "email": "Email",
                        "password": "Password"
                    },
                    "password": "Password",
                    "remember": "Remember",
                    "reset": {
                        "link": "Forget password?",
                        "title": "Password reset",
                        "submit": "Send reset password link",
                        "header": "Login"
                    },
                    "header": "Login"
                },
                "campaigns": {
                    "title": "Campaigns",
                    "header": "Campaigns List",
                    "breadcrumb": "Campaigns",
                    "name": "Title",
                    "status": "Status",
                    "backers": "Backers",
                    "recurrent": "Recurrent",
                    "average": "Average",
                    "received": "received",
                    "goal": "Goal",
                    "days": "Days",
                    "description": "Description",
                    "image": "Title image",
                    "uploadImage": "Upload image",
                    "proportionsImage": "(optimal aspect ratio 2х1)",
                    "allowedImageTypes": "Allowed types: png gif jpg jpeg.",
                    "paymentSystem": "Payment system",
                    "startAt": "Start at",
                    "finishAt": "Finish at",
                    "colors": "Colors configuration",
                    "preview": "Campaign preview",
                    "active": "Active",
                    "topBanner": "Top banner",
                    "progressBar": "Progress bar",
                    "options": "Options",
                    "placeholder": {
                        "shortcode": "Shortcode",
                        "header": "Create campaign",
                        "breadcrumb": "Create",
                        "name": "Title",
                        "image": "No file chosen",
                        "amount": "The amount of hryvnia"
                    },
                    "create": {
                        "title": "Create campaign",
                        "header": "Create campaign",
                        "breadcrumb": "Create"
                    },
                    "edit": {
                        "title": "Edit campaign",
                        "header": "Edit campaign",
                        "breadcrumb": "Edit"
                    }
                },
                "payments": {
                    "title": "Payments",
                    "header": "Payments list",
                    "breadcrumb": "Payments",
                    "date": "Date",
                    "campaign": "Campaign",
                    "amount": "Required sum",
                    "backer": "Backer",
                    "recurrent": "Recurrent",
                    "status": "Payment status",
                    "backerStatus": "Backer status",
                    "statuses": {
                        "success": "Success",
                        "failed": "Failed",
                        "error": "Error"
                    },
                    "show": {
                        "title": "Show payment",
                        "header": "Show payment",
                        "breadcrumb": "Show"
                    },
                    "placeholder": {
                        "date": "Date",
                        "campaign": "Campaign",
                        "amount": "Amount",
                        "backer": "Backer",
                        "recurrent": "Recurrent",
                        "status": "Payment status",
                        "backerStatus": "Backer status"
                    }
                },
                "settings": {
                    "title": "Settings",
                    "payments": {
                        "header": "Payment systems options",
                        "bePaidIdMarket": "Bepaid Market Id",
                        "artPayIdMarket": "Artpay Market Id",
                        "fondyIdMarket": "Fondy Market ID",
                        "bePaidKeyMarket": "Bepaid Market key",
                        "artPayKeyMarket": "Artpay Market key",
                        "fondyKeyMarket": "Fondy Market key",
                        "test": "Turn off test payments",
                        "maxPayment": "Max payment amount",
                        "minPayment": "Min payment amount",
                        "termsOfUse": "Terms of use",
                        "placeholder": {
                            "bePaidIdMarket": "Bepaid Market Id",
                            "artPayIdMarket": "Artpay Market Id",
                            "fondyIdMarket": "Fondy Market ID",
                            "bePaidKeyMarket": "Bepaid Market key",
                            "artPayKeyMarket": "Artpay Market key",
                            "fondyKeyMarket": "Fondy Market key",
                            "test": "Turn off test payments",
                            "maxPayment": "Max payment amount",
                            "minPayment": "Min payment amount"
                        }
                    },
                    "layout": {
                        "header": "Layout options"
                    },
                    "notifications": {
                        "address": "Server address",
                        "port": "Server port",
                        "user": "Email user",
                        "password": "Email password",
                        "email": "Email address",
                        "header": "Notifications options",
                        "reccurentTemplate": "Recurrent payments email template",
                        "singleTemplate": "Single payment email template",
                        "placeholder": {
                            "address": "Server address",
                            "port": "Server port",
                            "user": "Email user",
                            "password": "Email password",
                            "email": "Email address"
                        },
                        "title": "Notifications",
                        "name": "Notification title",
                        "text": "Describe the contents of the notification in a concise form",
                        "caution": "The deleted campaign will not resume. All subscriptions will be suspended!"
                    }
                },
                "help": {
                    "title": "FAQ",
                    "header": "Frequently asked questions"
                },
                "feedback": {
                    "title": "Feedback",
                    "header": "Feedback",
                    "email": "Your Email",
                    "name": "Name",
                    "message": "Message",
                    "placeholder": {
                        "email": "Your Email",
                        "name": "Name",
                        "message": "Write your message"
                    }
                },
                "users": {
                    "title": "Users",
                    "breadcrumb": "List",
                    "header": "User List",
                    "email": "Email",
                    "name": "Name",
                    "active": "Active",
                    "createdAt": "Created at",
                    "updatedAt": "Updated at",
                    "message": "Message",
                    "password": "Password",
                    "passwordConfirmation": "Repeat password",
                    "placeholder": {
                        "email": "Email",
                        "name": "Name",
                        "message": "Write your message",
                        "password": "Password"
                    },
                    "create": {
                        "breadcrumb": "Create",
                        "header": "Create user"
                    },
                    "edit": {
                        "breadcrumb": "Edit",
                        "header": "Edit user"
                    }
                }
            },
            "widget": {
                "paymentInfo": "Terms of Use",
                "input": "Other amount",
                "invalidFeedback": "Please enter payment amount",
                "received": "received",
                "needed": "Needed"
            }
        }
    },
    "ru": {
        "auth": {
            "failed": "Такие e-mail и пароль не существуют.",
            "throttle": "Слишком много попыток входа. Повторите попытку через {seconds} seconds."
        },
        "pagination": {
            "previous": "&laquo; Previous",
            "next": "Next &raquo;"
        },
        "alerts": {
            "admin": {
                "common": {
                    "search": {
                        "noResult": "Не найдено",
                        "noMatchResult": "Нет совпадений"
                    }
                },
                "login": {
                    "error": "Такие e-mail и пароль не существуют."
                },
                "feedback": {
                    "error": "Ошибка отправки!",
                    "success": "Сообщение успешно отправлено"
                },
                "forms": {
                    "success": "Успешно",
                    "data_written": "Данные записаны",
                    "error": "Ошибка",
                    "smthgwrong": "Что-то пошло не так"
                }
            }
        },
        "passwords": {
            "password": "Пароль должен состоять минимум из шести символов и соответствовать подтвержденному.",
            "reset": "Ваш пароль был сброшен!",
            "sent": "Мы отправили вам ссылку для сброса пароля по электронной почте!",
            "token": "Этот токен сброса пароля недействителен.",
            "user": "Мы не можем найти пользователя с таким адресом электронной почты."
        },
        "mails": {
            "layout": {
                "hello": "Здравствуйте!",
                "regards": "С уважением"
            }
        },
        "buttons": {
            "admin": {
                "common": {
                    "delete": "Удалить",
                    "cancel": "Отменить",
                    "edit": "Редактировать",
                    "apply": "Применить",
                    "enableSelected": "Включить выбранные",
                    "disableSelected": "Отключить выбранные",
                    "removeSelected": "Удалить выбранные",
                    "create": "Создать",
                    "back": "Назад",
                    "save": "Сохранить",
                    "info": "Справка",
                    "cancellation": "Отмена",
                    "print": "Распечатать",
                    "email": "Отправить e-mail"
                },
                "support": "Помоги Команде Doika",
                "login": {
                    "submit": "Логин"
                },
                "feedback": {
                    "submit": "Отправить"
                },
                "users": {
                    "create": "Создать нового пользователя"
                },
                "campaigns": {
                    "create": "Создать кампанию",
                    "save": "Сохранить кампанию",
                    "delete": "Удалить!",
                    "uploadImage": "Загрузить изображение",
                    "deleteImage": "Удалить изображение"
                },
                "notifications": {
                    "header": {
                        "onePay": "Для одноразовых платежей",
                        "subscriptions": "Для подписок",
                        "mailing": "Настройки рассыльщика"
                    },
                    "description": "Описание",
                    "change": "Изменить уведомление"
                }
            },
            "widget": {
                "back": "Назад",
                "confirm": "Подтвердить",
                "proceed": "Оплатить",
                "oneTime": "Разовый",
                "subscribe": "Регулярный",
                "email": "Email подтверждения"
            }
        },
        "validation": {
            "accepted": "The {attribute} must be accepted.",
            "active_url": "The {attribute} is not a valid URL.",
            "after": "The {attribute} must be a date after {date}.",
            "after_or_equal": "The {attribute} must be a date after or equal to {date}.",
            "alpha": "The {attribute} may only contain letters.",
            "alpha_dash": "The {attribute} may only contain letters, numbers, and dashes.",
            "alpha_num": "The {attribute} may only contain letters and numbers.",
            "array": "The {attribute} must be an array.",
            "before": "The {attribute} must be a date before {date}.",
            "before_or_equal": "The {attribute} must be a date before or equal to {date}.",
            "between": {
                "numeric": "The {attribute} must be between {min} and {max}.",
                "file": "The {attribute} must be between {min} and {max} kilobytes.",
                "string": "The {attribute} must be between {min} and {max} characters.",
                "array": "The {attribute} must have between {min} and {max} items."
            },
            "boolean": "The {attribute} field must be true or false.",
            "confirmed": "The {attribute} confirmation does not match.",
            "date": "The {attribute} is not a valid date.",
            "date_format": "The {attribute} does not match the format {format}.",
            "different": "The {attribute} and {other} must be different.",
            "digits": "The {attribute} must be {digits} digits.",
            "digits_between": "The {attribute} must be between {min} and {max} digits.",
            "dimensions": "The {attribute} has invalid image dimensions.",
            "distinct": "The {attribute} field has a duplicate value.",
            "email": "The {attribute} must be a valid email address.",
            "exists": "The selected {attribute} is invalid.",
            "file": "The {attribute} must be a file.",
            "filled": "The {attribute} field must have a value.",
            "image": "The {attribute} must be an image.",
            "in": "The selected {attribute} is invalid.",
            "in_array": "The {attribute} field does not exist in {other}.",
            "integer": "The {attribute} must be an integer.",
            "ip": "The {attribute} must be a valid IP address.",
            "ipv4": "The {attribute} must be a valid IPv4 address.",
            "ipv6": "The {attribute} must be a valid IPv6 address.",
            "json": "The {attribute} must be a valid JSON string.",
            "max": {
                "numeric": "The {attribute} may not be greater than {max}.",
                "file": "The {attribute} may not be greater than {max} kilobytes.",
                "string": "The {attribute} may not be greater than {max} characters.",
                "array": "The {attribute} may not have more than {max} items."
            },
            "mimes": "The {attribute} must be a file of type: {values}.",
            "mimetypes": "The {attribute} must be a file of type: {values}.",
            "min": {
                "numeric": "The {attribute} must be at least {min}.",
                "file": "The {attribute} must be at least {min} kilobytes.",
                "string": "The {attribute} must be at least {min} characters.",
                "array": "The {attribute} must have at least {min} items."
            },
            "not_in": "The selected {attribute} is invalid.",
            "numeric": "The {attribute} must be a number.",
            "present": "The {attribute} field must be present.",
            "regex": "The {attribute} format is invalid.",
            "required": "The {attribute} field is required.",
            "required_if": "The {attribute} field is required when {other} is {value}.",
            "required_unless": "The {attribute} field is required unless {other} is in {values}.",
            "required_with": "The {attribute} field is required when {values} is present.",
            "required_with_all": "The {attribute} field is required when {values} is present.",
            "required_without": "The {attribute} field is required when {values} is not present.",
            "required_without_all": "The {attribute} field is required when none of {values} are present.",
            "same": "The {attribute} and {other} must match.",
            "size": {
                "numeric": "The {attribute} must be {size}.",
                "file": "The {attribute} must be {size} kilobytes.",
                "string": "The {attribute} must be {size} characters.",
                "array": "The {attribute} must contain {size} items."
            },
            "string": "The {attribute} must be a string.",
            "timezone": "The {attribute} must be a valid zone.",
            "unique": "The {attribute} has already been taken.",
            "uploaded": "The {attribute} failed to upload.",
            "url": "The {attribute} format is invalid.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": []
        },
        "labels": {
            "http": {
                "404": {
                    "title": "404",
                    "description": ""
                }
            },
            "admin": {
                "title": "Управление",
                "datatables": {
                    "showPerPage": "Показать",
                    "entriesPerPage": "записей на странице",
                    "search": "Поиск",
                    "actions": "Действия",
                    "info": "Справка"
                },
                "common": {
                    "search": "Поиск",
                    "footer": {
                        "EU": "Это приложение было создано и поддерживается при финансовой поддержке Европейского Союза.",
                        "left": "Powered by",
                        "with": "with",
                        "by": "by"
                    },
                    "confirmation": "Вы уверены?"
                },
                "newMenu": {
                    "header": "Добавить",
                    "campaign": "Новая кампания",
                    "user": "Новый пользователь"
                },
                "languageMenu": {
                    "header": "Язык",
                    "be": "Белорусский",
                    "ru": "Русский",
                    "en": "Английский"
                },
                "accountMenu": {
                    "header": "Профиль",
                    "avatar": "Аватар пользователя",
                    "logout": "Выйти"
                },
                "rightMenu": {
                    "divider": {
                        "configuration": "Конфигурация модуля",
                        "access": "Управление доступом",
                        "help": "FAQ",
                        "feedback": "Обратная связь"
                    }
                },
                "login": {
                    "title": "Вход в систему",
                    "email": "E-mail адрес",
                    "placeholder": {
                        "email": "E-mail адрес",
                        "password": "Пароль"
                    },
                    "password": "Пароль",
                    "remember": "Запомнить меня",
                    "reset": {
                        "link": "Забыли пароль?",
                        "title": "Сброс пароля",
                        "submit": "Отправить ссылку на сброс пароля",
                        "header": "Логин"
                    },
                    "header": "Логин"
                },
                "campaigns": {
                    "title": "Список кампаний",
                    "header": "Список кампаний",
                    "breadcrumb": "Список кампаний",
                    "name": "Название кампании",
                    "status": "Статус кампании",
                    "backers": "Жертвователи",
                    "recurrent": "Подписка",
                    "average": "Средний чек",
                    "received": "Собранная сумма",
                    "goal": "Целевая сумма",
                    "days": "Количество дней до окончания",
                    "description": "Описание",
                    "image": "Изображение для кампании",
                    "uploadImage": "Загрузить изображение",
                    "proportionsImage": "(оптимальное соотношение сторон 2х1)",
                    "allowedImageTypes": "Допустимый формат: png gif jpg jpeg.",
                    "paymentSystem": "Платежная система",
                    "startAt": "Дата начала",
                    "finishAt": "Дата окончания",
                    "colors": "Конфигурация цветов",
                    "preview": "Просмотр кампании",
                    "active": "Действующая",
                    "topBanner": "Верхний баннер",
                    "progressBar": "Полоса прогресса",
                    "options": "Параметры",
                    "placeholder": {
                        "shortcode": "Шорткод",
                        "header": "Создать кампанию",
                        "breadcrumb": "Создать",
                        "name": "Название",
                        "image": "Файл не выбран",
                        "amount": "Сумма гривен"
                    },
                    "create": {
                        "title": "Создать кампанию",
                        "header": "Создать кампанию",
                        "breadcrumb": "Создать кампанию"
                    },
                    "edit": {
                        "title": "Редактировать кампанию",
                        "header": "Редактировать кампанию",
                        "breadcrumb": "Редактировать"
                    }
                },
                "payments": {
                    "title": "Список пожертвований",
                    "header": "Список пожертвований",
                    "breadcrumb": "Список пожертвований",
                    "date": "Дата",
                    "campaign": "Кампания",
                    "amount": "Необходимая сумма",
                    "backer": "Жертвователь",
                    "recurrent": "Подписка на кампанию",
                    "status": "Статус оплаты",
                    "backerStatus": "Статус карты",
                    "statuses": {
                        "success": "Успешно",
                        "failed": "Не успешно",
                        "error": "Не завершено"
                    },
                    "show": {
                        "title": "Показать платеж",
                        "header": "Показать платеж",
                        "breadcrumb": "Показать"
                    },
                    "placeholder": {
                        "date": "Дата",
                        "campaign": "Кампания",
                        "amount": "Сумма",
                        "backer": "Жертвователь",
                        "recurrent": "Подписка на кампанию",
                        "status": "Статус оплаты",
                        "backerStatus": "Статус карты"
                    }
                },
                "settings": {
                    "title": "Настройки",
                    "payments": {
                        "header": "Объединение с платёжной системой",
                        "bePaidIdMarket": "Bepaid Market ID",
                        "artPayIdMarket": "Artpay Market Id",
                        "fondyIdMarket": "Fondy Market ID",
                        "bePaidKeyMarket": "Bepaid Market key",
                        "artPayKeyMarket": "Artpay Market key",
                        "fondyKeyMarket": "Fondy Market key",
                        "test": "Отключить тестовые платежи",
                        "maxPayment": "Максимальный платеж, бел.руб",
                        "minPayment": "Минимальный платеж, бел.руб",
                        "termsOfUse": "Текст условий сервиса сбора пожертвований",
                        "placeholder": {
                            "bePaidIdMarket": "Bepaid Market ID",
                            "artPayIdMarket": "Artpay Market Id",
                            "fondyIdMarket": "Fondy Market ID",
                            "bePaidKeyMarket": "Bepaid Market key",
                            "artPayKeyMarket": "Artpay Market key",
                            "fondyKeyMarket": "Fondy Market key",
                            "test": "Отключить тестовые платежи",
                            "maxPayment": "Максимальный платеж, бел.руб",
                            "minPayment": "Минимальный платеж, бел.руб"
                        }
                    },
                    "layout": {
                        "header": "Параметры макета"
                    },
                    "notifications": {
                        "address": "Адрес сервера",
                        "port": "Порт сервера",
                        "user": "Пользователь электронной почты",
                        "password": "Пароль",
                        "email": "Адрес электронной почты",
                        "header": "Настройка сообщений",
                        "reccurentTemplate": "Шаблон электронного письма для рекуррентных платежей",
                        "singleTemplate": "Благодарность за сделанный платеж на почту",
                        "placeholder": {
                            "address": "Адрес сервера",
                            "port": "Порт сервера",
                            "user": "Пользователь электронной почты",
                            "password": "Пароль",
                            "email": "Адрес электронный почты"
                        },
                        "title": "Уведомления",
                        "name": "Название уведомления",
                        "text": "Опишите лаконично содержание уведомления",
                        "caution": "Удаленная кампания не возобновится. Все подписки будут приостановлены!"
                    }
                },
                "help": {
                    "title": "FAQ",
                    "header": "Как пользоваться модулем"
                },
                "feedback": {
                    "title": "Обратная связь",
                    "header": "Обратная связь",
                    "email": "Ваш Email",
                    "name": "Имя",
                    "message": "Сообщение",
                    "placeholder": {
                        "email": "Ваш Email",
                        "name": "Имя",
                        "message": "Напишите Ваше обращение"
                    }
                },
                "users": {
                    "title": "Список пользователей",
                    "breadcrumb": "Список пользователей",
                    "header": "Список пользователей",
                    "email": "E-mail",
                    "name": "Имя",
                    "active": "Действующая",
                    "createdAt": "Дата создания",
                    "updatedAt": "Дата обновления",
                    "message": "Сообщение",
                    "password": "Пароль",
                    "passwordConfirmation": "Повторите пароль",
                    "placeholder": {
                        "email": "E-mail",
                        "name": "Имя",
                        "message": "Напишите Ваше сообщение",
                        "password": "Password"
                    },
                    "create": {
                        "breadcrumb": "Создать",
                        "header": "Создать пользователя"
                    },
                    "edit": {
                        "breadcrumb": "Редактировать",
                        "header": "Редактирование пользователя"
                    }
                }
            },
            "widget": {
                "paymentInfo": "Terms of Use",
                "input": "Другая сумма",
                "invalidFeedback": "Пожалуйста, введите сумму платежа",
                "received": "Собранная сумма",
                "needed": "Целевая сумма"
            }
        }
    },
    "ua": {
        "auth": {
            "failed": "Такі e-mail і пароль не існують.",
            "throttle": "Занадто багато спроб входу. Спробуйте ще раз за {seconds} секунд."
        },
        "pagination": {
            "previous": "&laquo; Previous",
            "next": "Next &raquo;"
        },
        "alerts": {
            "admin": {
                "common": {
                    "search": {
                        "noResult": "Не знайдено",
                        "noMatchResult": "Немає співпадінь"
                    }
                },
                "login": {
                    "error": "Такі e-mail і пароль не існують."
                },
                "feedback": {
                    "error": "Помилка відправки!",
                    "success": "Повідомлення успішно відправлено"
                },
                "forms": {
                    "success": "Успішно",
                    "data_written": "Дані записані",
                    "error": "Помилка",
                    "smthgwrong": "Щось пішло не так"
                }
            }
        },
        "passwords": {
            "password": "Пароль повинен складатися мінімум з шести символів і відповідати підтвердженому.",
            "reset": "Ваш пароль був скинут!",
            "sent": "Ми відправили вам посилання для скидання пароля по електронній пошті!",
            "token": "Цей токен скидання пароля недійсний.",
            "user": "Ми не можемо знайти користувача з такою адресою електронної пошти."
        },
        "mails": {
            "layout": {
                "hello": "Вітаемо!",
                "regards": "З повагою"
            }
        },
        "buttons": {
            "admin": {
                "common": {
                    "delete": "Видалити",
                    "cancel": "Скасувати",
                    "edit": "Редагувати",
                    "apply": "Застосувати",
                    "enableSelected": "Включити обрані",
                    "disableSelected": "Відключити обрані",
                    "removeSelected": "Видалити обрані",
                    "create": "Створити",
                    "back": "Назад",
                    "save": "Зберегти",
                    "info": "Довідка",
                    "cancellation": "Відміна",
                    "print": "Друкувати",
                    "email": "Надіслати e-mail"
                },
                "support": "Технічна підтримка",
                "login": {
                    "submit": "Логін"
                },
                "feedback": {
                    "submit": "Відправити"
                },
                "users": {
                    "create": "Створити нового користувача"
                },
                "campaigns": {
                    "create": "Створити кампанію",
                    "save": "Зберегти кампанію",
                    "delete": "Видалити!",
                    "uploadImage": "Завантажити зображення",
                    "deleteImage": "Видалити зображення"
                },
                "notifications": {
                    "header": {
                        "onePay": "Для одноразових платежів",
                        "subscriptions": "Для підписок",
                        "mailing": "Налаштування розсилки"
                    },
                    "description": "Описання",
                    "change": "Змінити повідомлення"
                }
            },
            "widget": {
                "back": "Назад",
                "confirm": "Підтвердити",
                "proceed": "Сплатити",
                "oneTime": "Разовий",
                "subscribe": "Регулярний",
                "email": "Email підтвердження"
            }
        },
        "validation": {
            "accepted": "The {attribute} must be accepted.",
            "active_url": "The {attribute} is not a valid URL.",
            "after": "The {attribute} must be a date after {date}.",
            "after_or_equal": "The {attribute} must be a date after or equal to {date}.",
            "alpha": "The {attribute} may only contain letters.",
            "alpha_dash": "The {attribute} may only contain letters, numbers, and dashes.",
            "alpha_num": "The {attribute} may only contain letters and numbers.",
            "array": "The {attribute} must be an array.",
            "before": "The {attribute} must be a date before {date}.",
            "before_or_equal": "The {attribute} must be a date before or equal to {date}.",
            "between": {
                "numeric": "The {attribute} must be between {min} and {max}.",
                "file": "The {attribute} must be between {min} and {max} kilobytes.",
                "string": "The {attribute} must be between {min} and {max} characters.",
                "array": "The {attribute} must have between {min} and {max} items."
            },
            "boolean": "The {attribute} field must be true or false.",
            "confirmed": "The {attribute} confirmation does not match.",
            "date": "The {attribute} is not a valid date.",
            "date_format": "The {attribute} does not match the format {format}.",
            "different": "The {attribute} and {other} must be different.",
            "digits": "The {attribute} must be {digits} digits.",
            "digits_between": "The {attribute} must be between {min} and {max} digits.",
            "dimensions": "The {attribute} has invalid image dimensions.",
            "distinct": "The {attribute} field has a duplicate value.",
            "email": "The {attribute} must be a valid email address.",
            "exists": "The selected {attribute} is invalid.",
            "file": "The {attribute} must be a file.",
            "filled": "The {attribute} field must have a value.",
            "image": "The {attribute} must be an image.",
            "in": "The selected {attribute} is invalid.",
            "in_array": "The {attribute} field does not exist in {other}.",
            "integer": "The {attribute} must be an integer.",
            "ip": "The {attribute} must be a valid IP address.",
            "ipv4": "The {attribute} must be a valid IPv4 address.",
            "ipv6": "The {attribute} must be a valid IPv6 address.",
            "json": "The {attribute} must be a valid JSON string.",
            "max": {
                "numeric": "The {attribute} may not be greater than {max}.",
                "file": "The {attribute} may not be greater than {max} kilobytes.",
                "string": "The {attribute} may not be greater than {max} characters.",
                "array": "The {attribute} may not have more than {max} items."
            },
            "mimes": "The {attribute} must be a file of type: {values}.",
            "mimetypes": "The {attribute} must be a file of type: {values}.",
            "min": {
                "numeric": "The {attribute} must be at least {min}.",
                "file": "The {attribute} must be at least {min} kilobytes.",
                "string": "The {attribute} must be at least {min} characters.",
                "array": "The {attribute} must have at least {min} items."
            },
            "not_in": "The selected {attribute} is invalid.",
            "numeric": "The {attribute} must be a number.",
            "present": "The {attribute} field must be present.",
            "regex": "The {attribute} format is invalid.",
            "required": "The {attribute} field is required.",
            "required_if": "The {attribute} field is required when {other} is {value}.",
            "required_unless": "The {attribute} field is required unless {other} is in {values}.",
            "required_with": "The {attribute} field is required when {values} is present.",
            "required_with_all": "The {attribute} field is required when {values} is present.",
            "required_without": "The {attribute} field is required when {values} is not present.",
            "required_without_all": "The {attribute} field is required when none of {values} are present.",
            "same": "The {attribute} and {other} must match.",
            "size": {
                "numeric": "The {attribute} must be {size}.",
                "file": "The {attribute} must be {size} kilobytes.",
                "string": "The {attribute} must be {size} characters.",
                "array": "The {attribute} must contain {size} items."
            },
            "string": "The {attribute} must be a string.",
            "timezone": "The {attribute} must be a valid zone.",
            "unique": "The {attribute} has already been taken.",
            "uploaded": "The {attribute} failed to upload.",
            "url": "The {attribute} format is invalid.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": []
        },
        "labels": {
            "http": {
                "404": {
                    "title": "404",
                    "description": "Сталася помилка - сторінка не знайдена"
                }
            },
            "emailserver": "Поштовий сервер",
            "recurrent": "Підписка",
            "single": "Одноразовий платіж",
            "admin": {
                "title": "Управління",
                "datatables": {
                    "showPerPage": "Показати",
                    "entriesPerPage": "Записів на сторінці",
                    "search": "Пошук",
                    "actions": "Дія",
                    "info": "Довідка"
                },
                "common": {
                    "search": "Пошук",
                    "footer": {
                        "EU": "Ця програма створена і підтримується за фінансової підтримки Європейського Союзу.",
                        "left": "Powered by",
                        "with": "with",
                        "by": "by"
                    },
                    "confirmation": "Ви впевнені?"
                },
                "newMenu": {
                    "header": "Додати",
                    "campaign": "Нова кампанія",
                    "user": "Новий користувач"
                },
                "languageMenu": {
                    "header": "Мова",
                    "be": "Білоруська",
                    "ru": "Російська",
                    "en": "Англійська"
                },
                "accountMenu": {
                    "header": "Профіль",
                    "avatar": "Аватар користувача",
                    "logout": "Вийти"
                },
                "rightMenu": {
                    "divider": {
                        "configuration": "Конфігурація модуля",
                        "access": "Управління доступом",
                        "help": "Часті питання",
                        "feedback": "Зворотній зв'язок"
                    }
                },
                "login": {
                    "title": "Вхід у систему",
                    "email": "E-mail адреса",
                    "placeholder": {
                        "email": "E-mail адреса",
                        "password": "Пароль"
                    },
                    "password": "Пароль",
                    "remember": "Запам'ятати мене",
                    "reset": {
                        "link": "Забули пароль?",
                        "title": "Сброс пароля",
                        "submit": "Надіслати посилання на скидання пароля",
                        "header": "Логін"
                    },
                    "header": "Логін"
                },
                "campaigns": {
                    "title": "Список кампаній",
                    "header": "Список кампаній",
                    "breadcrumb": "Список кампаній",
                    "name": "Назва кампанії",
                    "status": "Статус кампанії",
                    "backers": "Благодійники",
                    "recurrent": "Підписка",
                    "average": "Середній чек",
                    "received": "Зібрана сума",
                    "goal": "Цільова сума",
                    "days": "Кількість днів до завершення",
                    "description": "Опис",
                    "image": "Зображення для кампанії",
                    "uploadImage": "Загрузить изображение",
                    "proportionsImage": "(Оптимальне співвідношення сторін 2х1)",
                    "allowedImageTypes": "Допустимий формат: png gif jpg jpeg.",
                    "paymentSystem": "Платіжна система",
                    "startAt": "Дата початку",
                    "finishAt": "Дата закінчення",
                    "colors": "Конфігурація кольорів",
                    "preview": "Перегляд кампанії",
                    "active": "Діюча",
                    "amount": "Необхідна сума",
                    "topBanner": "Верхній банер",
                    "progressBar": "Смуга прогресу",
                    "options": "Параметри",
                    "placeholder": {
                        "shortcode": "Шорткод",
                        "header": "Створити кампанію",
                        "breadcrumb": "Створити",
                        "name": "Назва",
                        "image": "Файл не вибран",
                        "amount": "Сума гривень"
                    },
                    "create": {
                        "title": "Створити кампанію",
                        "header": "Створити кампанію",
                        "breadcrumb": "Створити кампанію"
                    },
                    "edit": {
                        "title": "Редагувати кампанію",
                        "header": "Редагувати кампанію",
                        "breadcrumb": "Редагувати"
                    }
                },
                "transactions": {
                    "title": "Список пожертв",
                    "header": "Список пожертв",
                    "breadcrumb": "Список пожертв",
                    "date": "Дата",
                    "campaign": "Кампанія",
                    "amount": "Сума",
                    "backer": "Благодійник",
                    "recurrent": "Підписка на кампанію",
                    "status": "Статус оплати",
                    "currency": "Валюта",
                    "created_at": "Дата створення",
                    "backerStatus": "Статус карти",
                    "statuses": {
                        "success": "Успішно",
                        "failed": "Не успішно",
                        "error": "Не завершено"
                    },
                    "show": {
                        "title": "Показати платіж",
                        "header": "Показати платіж",
                        "breadcrumb": "Показати"
                    },
                    "placeholder": {
                        "date": "Дата",
                        "campaign": "Кампанія",
                        "amount": "Сума",
                        "backer": "Пожертвувач",
                        "recurrent": "Підписка на кампанію",
                        "status": "Статус оплати",
                        "backerStatus": "статус карти"
                    }
                },
                "paymentSystems": {
                    "title": "Еквайрінг"
                },
                "layout": {
                    "title": "Зовнішній вигляд",
                    "font": "Колір шрифту",
                    "background": "Колір фону",
                    "progressBar": "Колір полоси виконання",
                    "button": "Колір кнопок"
                },
                "notifications": {
                    "title": "Повідомлення",
                    "name": "Назва повідомлення",
                    "text": "Коротко опишіть зміст повідомлення",
                    "caution": "Видалена кампанія не відновиться. Усі підписки будуть призупинені!"
                },
                "settings": {
                    "title": "Налаштування",
                    "payments": {
                        "header": "Інтеграція з платіжною системою",
                        "bePaidIdMarket": "Bepaid Market ID",
                        "artPayIdMarket": "Artpay Market Id",
                        "fondyIdMarket": "Fondy Market ID",
                        "bePaidKeyMarket": "Bepaid Market key",
                        "artPayKeyMarket": "Artpay Market key",
                        "fondyKeyMarket": "Fondy Market key",
                        "paymentInterval": "Виберіть періодичний інтервал оплати",
                        "paymentInterval1D": "1 день",
                        "paymentInterval1H": "1 час",
                        "paymentInterval1M": "1 місяць",
                        "paymentInterval1Y": "1 рік",
                        "test": "Відключити тестові платежі",
                        "maxPayment": "Максимальний платіж, гривень",
                        "minPayment": "Мінімальний платіж, гривень",
                        "termsOfUse": "Текст умов сервісу збору пожертв",
                        "placeholder": {
                            "bePaidIdMarket": "Bepaid Market ID",
                            "artPayIdMarket": "Artpay Market Id",
                            "fondyIdMarket": "Fondy Market ID",
                            "bePaidKeyMarket": "Bepaid Market key",
                            "artPayKeyMarket": "Artpay Market key",
                            "fondyKeyMarket": "Fondy Market key",
                            "test": "Відключити тестові платежі",
                            "maxPayment": "Максимальний платіж, гривень",
                            "minPayment": "Мінімальний платіж, гривень"
                        }
                    },
                    "layout": {
                        "header": "Параметри макета"
                    },
                    "notifications": {
                        "address": "Адреса сервера",
                        "port": "Порт сервера",
                        "user": "Користувач електронної пошти",
                        "password": "Пароль",
                        "email": "Адреса електронної пошти",
                        "header": "Налаштування повідомлень",
                        "reccurentTemplate": "Шаблон електронного листа для регулярних платежів",
                        "singleTemplate": "Подяка за зроблений платіж на пошту",
                        "placeholder": {
                            "address": "Адреса сервера",
                            "port": "Порт сервера",
                            "user": "Користувач електронної пошти",
                            "password": "Пароль",
                            "email": "Адреса електронної пошти"
                        },
                        "title": "Повідомлення",
                        "name": "Назва повідомлення",
                        "text": "Опишіть лаконічно зміст повідомлення",
                        "caution": "Віддалена кампанія не відновиться. Все підписки будуть припинені!"
                    }
                },
                "help": {
                    "title": "Часті питання",
                    "header": "Як користуватися модулем"
                },
                "feedback": {
                    "title": "Зворотній зв'язок",
                    "header": "Зв'язок",
                    "email": "Ваш Email",
                    "name": "Ім'я",
                    "message": "Повідомлення",
                    "placeholder": {
                        "email": "Ваш Email",
                        "name": "Ім'я",
                        "message": "Напишіть Ваше звернення"
                    }
                },
                "users": {
                    "title": "Список користувачів",
                    "breadcrumb": "Список користувачів",
                    "header": "Список користувачів",
                    "email": "E-mail",
                    "name": "Ім'я",
                    "active": "Діюча",
                    "createdAt": "Дата створення",
                    "updatedAt": "дата оновлення",
                    "message": "Повідомлення",
                    "password": "Пароль",
                    "passwordConfirmation": "Повторіть пароль",
                    "placeholder": {
                        "email": "E-mail",
                        "name": "Ім'я",
                        "message": "Напишіть Ваше звернення",
                        "password": "Пароль",
                        "passwordConfirmation": "Повторіть пароль"
                    },
                    "create": {
                        "breadcrumb": "Створити",
                        "header": "Створити користувача"
                    },
                    "edit": {
                        "breadcrumb": "Редагувати",
                        "header": "Редагувати користувача"
                    }
                }
            },
            "widget": {
                "title": "Дані користувача",
                "name": "Ім'я Прізвище",
                "email": "email",
                "phone": "Телефон",
                "mask": "(+380)",
                "input": "Iнша сума",
                "invalidFeedback": "Введіть суму платежу",
                "received": "Зібрана сума",
                "needed": "Цільова сума",
                "thanks": "Щиро дякуємо за допомогу!",
                "paymentInfo": "Я згоден з правилами",
                "terms": "Правила данейта"
            }
        }
    }
}
