import {
  MousePointer2,
  MousePointerClick,
  Minus,
  User,
  RectangleHorizontal,
  Keyboard,
  BadgeCheck,
  Tag,
  Loader,
  BoxSelect,
  ToggleLeft,
  ToggleRight,
  TextCursorInput,
  Power,
  SlidersHorizontal,
  CheckSquare,
  CircleDot,
  ChevronDown,
  ChevronsLeftRight,
  ChevronsRight,
  ChevronsUpDown,
  FormInput,
  SquareStack,
  MessageSquare,
  PanelRight,
  PanelLeft,
  ScrollText,
  Inbox,
  ArrowUpRight,
  HelpCircle,
  Activity,
  LayoutList,
  Menu,
  BarChart3,
  AlertTriangle,
  Info,
  type LucideIcon,
} from "lucide-react";

export interface ComponentInfo {
  name: string;
  nameFA: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export interface ComponentCategory {
  category: string;
  categoryFA: string;
  components: ComponentInfo[];
}

export const componentCategories: ComponentCategory[] = [
  {
    category: "Form",
    categoryFA: "فرم",
    components: [
      {
        name: "Label",
        nameFA: "برچسب",
        href: "/components/label",
        icon: Tag,
        description: "برچسب‌های متنی برای فرم‌ها",
      },
      {
        name: "Button",
        nameFA: "دکمه",
        href: "/components/button",
        icon: MousePointer2,
        description: "دکمه‌های قابل تنظیم با چندین نوع و اندازه",
      },
      {
        name: "Toggle",
        nameFA: "دکمه دوحالته",
        href: "/components/toggle",
        icon: ToggleLeft,
        description: "دکمه دوحالته برای انتخاب‌های باینری",
      },
      {
        name: "Toggle Group",
        nameFA: "گروه دکمه دوحالته",
        href: "/components/toggle-group",
        icon: ToggleRight,
        description: "گروهی از دکمه‌های دوحالته",
      },
      {
        name: "Input",
        nameFA: "ورودی متن",
        href: "/components/input",
        icon: TextCursorInput,
        description: "فیلد ورودی متن با انواع مختلف",
      },
      {
        name: "Input Group",
        nameFA: "گروه ورودی",
        href: "/components/input-group",
        icon: TextCursorInput,
        description: "گروه‌بندی فیلدهای ورودی",
      },
      {
        name: "Input OTP",
        nameFA: "ورودی رمز یکبار مصرف",
        href: "/components/input-otp",
        icon: Keyboard,
        description: "ورودی رمز یکبار مصرف",
      },
      {
        name: "Textarea",
        nameFA: "ناحیه متن",
        href: "/components/textarea",
        icon: TextCursorInput,
        description: "ناحیه متن چندخطی",
      },
      {
        name: "Radio Group",
        nameFA: "دکمه رادیویی",
        href: "/components/radio-group",
        icon: CircleDot,
        description: "گروه دکمه‌های رادیویی",
      },

      {
        name: "Field",
        nameFA: "فیلد فرم",
        href: "/components/field",
        icon: FormInput,
        description: "فیلد فرم با برچسب و پیام خطا",
      },

      {
        name: "Switch",
        nameFA: "سوئیچ",
        href: "/components/switch",
        icon: Power,
        description: "سوئیچ روشن/خاموش",
      },
      {
        name: "Slider",
        nameFA: "اسلایدر",
        href: "/components/slider",
        icon: SlidersHorizontal,
        description: "اسلایدر برای انتخاب مقدار",
      },
      {
        name: "Checkbox",
        nameFA: "چک‌باکس",
        href: "/components/checkbox",
        icon: CheckSquare,
        description: "چک‌باکس برای انتخاب‌های چندگانه",
      },

      {
        name: "Select",
        nameFA: "انتخابگر",
        href: "/components/select",
        icon: ChevronDown,
        description: "نمایش لیست گزینه‌ها برای انتخاب کاربر",
      },
      {
        name: "Native Select",
        nameFA: "انتخابگر بومی",
        href: "/components/native-select",
        icon: ChevronDown,
        description: "منوی انتخاب بومی",
      },
    ],
  },
  {
    category: "Layout",
    categoryFA: "چیدمان",
    components: [
      {
        name: "Aspect Ratio",
        nameFA: "نسبت تصویر",
        href: "/components/aspect-ratio",
        icon: RectangleHorizontal,
        description: "حفظ نسبت ابعاد المان‌ها",
      },
      {
        name: "Breadcrumb",
        nameFA: "مسیر (نان‌خور)",
        href: "/components/breadcrumb",
        icon: ChevronsRight,
        description: "نمایش مسیر به منبع فعلی با سلسله‌مراتب لینک‌ها",
      },
      {
        name: "Card",
        nameFA: "کارت",
        href: "/components/card",
        icon: SquareStack,
        description: "گروه‌بندی محتوا و اقدامات مرتبط",
      },
      {
        name: "Separator",
        nameFA: "جداکننده",
        href: "/components/separator",
        icon: Minus,
        description: "خط جداکننده بین المان‌ها",
      },
      {
        name: "Scroll Area",
        nameFA: "ناحیه اسکرول",
        href: "/components/scroll-area",
        icon: ScrollText,
        description: "ناحیه اسکرول‌پذیر با نوار اسکرول سفارشی",
      },
      {
        name: "Tabs",
        nameFA: "تب‌ها",
        href: "/components/tabs",
        icon: SquareStack,
        description: "جابه‌جایی بین نماهای مختلف در یک صفحه",
      },
      {
        name: "Accordion",
        nameFA: "آکاردئون",
        href: "/components/accordion",
        icon: ChevronsUpDown,
        description: "عناوین تعاملی که با کلیک بخشی از محتوا را نمایش می‌دهند",
      },
      {
        name: "Item",
        nameFA: "آیتم",
        href: "/components/item",
        icon: LayoutList,
        description: "نمایش محتوا شامل تصویر، عنوان و اقدامات",
      },
      {
        name: "Pagination",
        nameFA: "صفحه‌بندی",
        href: "/components/pagination",
        icon: ChevronsLeftRight,
        description: "ناوبری بین صفحات با دکمه‌های قبلی، بعدی و شماره صفحه",
      },
      {
        name: "Dropdown Menu",
        nameFA: "منوی کشویی",
        href: "/components/dropdown-menu",
        icon: Menu,
        description: "نمایش منو برای کاربر با کلیک روی دکمه",
      },
      {
        name: "Menubar",
        nameFA: "نوار منو",
        href: "/components/menubar",
        icon: Menu,
        description: "نوار منوی افقی با چند منوی کشویی",
      },
      {
        name: "Navigation Menu",
        nameFA: "منوی ناوبری",
        href: "/components/navigation-menu",
        icon: Menu,
        description: "مجموعه لینک‌ها برای ناوبری وب‌سایت با محتوای کشویی",
      },
    ],
  },
  {
    category: "Display",
    categoryFA: "نمایش",
    components: [
      {
        name: "Avatar",
        nameFA: "آواتار",
        href: "/components/avatar",
        icon: User,
        description: "نمایش تصویر پروفایل کاربر",
      },
      {
        name: "Badge",
        nameFA: "نشان",
        href: "/components/badge",
        icon: BadgeCheck,
        description: "نشان‌های کوچک برای نمایش وضعیت",
      },
      {
        name: "Kbd",
        nameFA: "صفحه‌کلید",
        href: "/components/kbd",
        icon: Keyboard,
        description: "نمایش کلیدهای صفحه‌کلید",
      },
      {
        name: "Skeleton",
        nameFA: "اسکلتون",
        href: "/components/skeleton",
        icon: BoxSelect,
        description: "نمایش حالت بارگذاری",
      },
      {
        name: "Spinner",
        nameFA: "اسپینر",
        href: "/components/spinner",
        icon: Loader,
        description: "نمایش حالت در حال پردازش",
      },
      {
        name: "Dialog",
        nameFA: "دیالوگ",
        href: "/components/dialog",
        icon: MessageSquare,
        description: "پنجره مودال برای نمایش محتوای مهم",
      },
      {
        name: "Alert",
        nameFA: "هشدار",
        href: "/components/alert",
        icon: Info,
        description: "نمایش callout برای جلب توجه کاربر با انواع پیش‌فرض و مخرب",
      },
      {
        name: "Alert Dialog",
        nameFA: "دیالوگ هشدار",
        href: "/components/alert-dialog",
        icon: AlertTriangle,
        description: "دیالوگ مودال برای تأیید عملیات و هشدار به کاربر",
      },
      {
        name: "Drawer",
        nameFA: "کشو",
        href: "/components/drawer",
        icon: PanelRight,
        description: "پنل کشویی برای نمایش محتوا از لبه‌های صفحه",
      },
      {
        name: "Sheet",
        nameFA: "برگه",
        href: "/components/sheet",
        icon: PanelLeft,
        description: "پنل کشویی از لبه صفحه",
      },
      {
        name: "Hover Card",
        nameFA: "کارت پیش نمایش",
        href: "/components/hover-card",
        icon: MousePointerClick,
        description: "نمایش پیش‌نمایش محتوا هنگام هاور روی یک لینک",
      },
      {
        name: "Empty",
        nameFA: "خالی",
        href: "/components/empty",
        icon: Inbox,
        description: "نمایش حالت خالی برای صفحات و لیست‌ها",
      },
      {
        name: "Popover",
        nameFA: "پاپ‌اور",
        href: "/components/popover",
        icon: ArrowUpRight,
        description: "نمایش محتوای غنی در یک پورتال با کلیک",
      },
      {
        name: "Tooltip",
        nameFA: "تولتیپ",
        href: "/components/tooltip",
        icon: HelpCircle,
        description: "نمایش اطلاعات مرتبط با المان هنگام هاور یا فوکوس",
      },
      {
        name: "Progress",
        nameFA: "پیشرفت",
        href: "/components/progress",
        icon: Activity,
        description: "نمایش میزان پیشرفت انجام یک کار به صورت نوار پیشرفت",
      },

      {
        name: "Chart",
        nameFA: "نمودار",
        href: "/components/chart",
        icon: BarChart3,
        description: "نمودارهای داده با Recharts همراه با تولتیپ و راهنما",
      },
    ],
  },
];

// Flatten all components for easy access
export const allComponents = componentCategories.flatMap(
  (cat) => cat.components
);
