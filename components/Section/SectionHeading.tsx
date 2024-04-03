export interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        {title}
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{subtitle}</p>
    </div>
  );
}
