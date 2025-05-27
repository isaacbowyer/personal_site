import * as Chakra from "@chakra-ui/react";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { TemplateProductSectionContainer } from "@/components/templates/TemplateProjectSectionContainer";
import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";

interface IProps {
  comment: string;
  clientName: string;
  clientRole: string;
}

export const ProjectClientSection = ({
  comment,
  clientName,
  clientRole,
}: IProps) => {
  return (
    <TemplateProductSectionContainer
      bgGradient="linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
      bgImage={`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><line x1="0" y1="40" x2="40" y2="0" stroke="%23bbbbbb" stroke-width="1" opacity="0.1"/></svg>')`}
      main={
        <Chakra.VStack width="full" maxW="1200px" gap={8} id="gallery">
          <TitleWithHeader
            title="CLIENT"
            subTitle={{ title: "TESTIMONY", color: "#111" }}
          />

          <TestimonialCard
            comment={comment}
            clientName={clientName}
            clientRole={clientRole}
          />
        </Chakra.VStack>
      }
    />
  );
};
