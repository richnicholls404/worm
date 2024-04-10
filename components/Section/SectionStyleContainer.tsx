export interface SectionStyleContainerProps {
  bgColor?: "lightest" | "light" | "dark";
  children: React.ReactNode;
}

const BG_COLOR_CLASSES = {
  lightest: "bg-white dark:bg-slate-950",
  light: "bg-gray-50 dark:bg-slate-900",
  dark: "bg-gray-100 dark:bg-slate-800",
};

export default function SectionStyleContainer({
  bgColor = "light",
  children,
}: SectionStyleContainerProps) {
  return <div className={BG_COLOR_CLASSES[bgColor]}>{children}</div>;
}
