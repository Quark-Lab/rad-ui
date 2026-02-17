import {
  MousePointer2,
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
  FormInput,
  SquareStack,
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
        name: "Button",
        nameFA: "دکمه",
        href: "/components/button",
        icon: MousePointer2,
        description: "دکمه‌های قابل تنظیم با چندین نوع و اندازه",
      },
      {
        name: "Label",
        nameFA: "برچسب",
        href: "/components/label",
        icon: Tag,
        description: "برچسب‌های متنی برای فرم‌ها",
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
        name: "Input OTP",
        nameFA: "ورودی رمز یکبار مصرف",
        href: "/components/input-otp",
        icon: Keyboard,
        description: "ورودی رمز یکبار مصرف",
      },
      {
        name: "Input Group",
        nameFA: "گروه ورودی",
        href: "/components/input-group",
        icon: TextCursorInput,
        description: "گروه‌بندی فیلدهای ورودی",
      },
      {
        name: "Field",
        nameFA: "فیلد فرم",
        href: "/components/field",
        icon: FormInput,
        description: "فیلد فرم با برچسب و پیام خطا",
      },
      {
        name: "Native Select",
        nameFA: "انتخابگر بومی",
        href: "/components/native-select",
        icon: ChevronDown,
        description: "منوی انتخاب بومی",
      },
      {
        name: "Textarea",
        nameFA: "ناحیه متن",
        href: "/components/textarea",
        icon: TextCursorInput,
        description: "ناحیه متن چندخطی",
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
        name: "Radio Group",
        nameFA: "دکمه رادیویی",
        href: "/components/radio-group",
        icon: CircleDot,
        description: "گروه دکمه‌های رادیویی",
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
    ],
  },
];

// Flatten all components for easy access
export const allComponents = componentCategories.flatMap((cat) => cat.components);
