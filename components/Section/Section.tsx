import SectionHeading, { SectionHeadingProps } from "./SectionHeading";

export default function Section({
  title,
  subtitle,
  bgColor = "default",
  children,
}: SectionHeadingProps & {
  bgColor?: "dark" | "default" | "light";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-w-[85rem] px-8 py-10 sm:px-10 lg:px-12 lg:py-14 mx-auto ${bgColor === "light" ? `bg-slate-100 dark:bg-slate-900` : bgColor === "dark" ? `bg-slate-300 dark:bg-slate-700` : `bg-slate-200 dark:bg-slate-800`}`}
    >
      <SectionHeading title={title} subtitle={subtitle} />
      {children}
    </div>
  );
}
