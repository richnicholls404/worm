export interface SectionSizeContainerProps {
  size?: "medium" | "large";
  children: React.ReactNode;
}

export default function SectionSizeContainer({
  size = "large",
  children,
}: SectionSizeContainerProps) {
  return (
    <div
      className={`relative ${size === "large" ? `max-w-[85rem]` : size === "medium" ? `max-w-[60rem]` : ``} mx-auto px-8 py-10 sm:px-10 lg:px-12 lg:py-14`}
    >
      {children}
    </div>
  );
}
