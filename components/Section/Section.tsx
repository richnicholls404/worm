import { useMemo } from "react";

import SectionSizeContainer, {
  SectionSizeContainerProps,
} from "./SectionSizeContainer";
import SectionHeading, { SectionHeadingProps } from "./SectionHeading";
import SectionStyleContainer, {
  SectionStyleContainerProps,
} from "./SectionStyleContainer";

export { SectionSizeContainer, SectionStyleContainer, SectionHeading };

export default function Section({
  title,
  subtitle,
  headingProps = {},
  size,
  bgColor = "light",
  renderSizeContainer = true,
  renderStyleContainer = true,
  children,
}: Pick<SectionHeadingProps, "title" | "subtitle"> &
  SectionStyleContainerProps &
  SectionSizeContainerProps & {
    headingProps?: Omit<SectionHeadingProps, "title" | "subtitle">;
    renderSizeContainer?: boolean;
    renderStyleContainer?: boolean;
    children: React.ReactNode;
  }) {
  const sectionContent = useMemo(() => {
    const contentWithHeading = (
      <>
        {title && (
          <SectionHeading title={title} subtitle={subtitle} {...headingProps} />
        )}
        {children}
      </>
    );

    const contentWithSizeContainer = renderSizeContainer ? (
      <SectionSizeContainer size={size}>
        {contentWithHeading}
      </SectionSizeContainer>
    ) : (
      contentWithHeading
    );
    const contentWithStyleContainer = renderStyleContainer ? (
      <SectionStyleContainer bgColor={bgColor}>
        {contentWithSizeContainer}
      </SectionStyleContainer>
    ) : (
      contentWithSizeContainer
    );

    return contentWithStyleContainer;
  }, [
    title,
    subtitle,
    children,
    renderSizeContainer,
    renderStyleContainer,
    bgColor,
  ]);

  return sectionContent;
}
