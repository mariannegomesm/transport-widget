import Image from "next/image";

import { Row, Typography } from "..";

import Star from "@/assets/icons/Star.svg";

interface AssessmentProps {
  value: string;
}

export const Assessment = ({ value }: AssessmentProps) => (
  <Row
    borderRadius="16px"
    backgroundColor="var(--color-gray)"
    zIndex="2"
    position="relative"
    alignItems="center"
    p="7px 21px"
    m="-22px auto 0"
  >
    <Image src={Star} alt="star" />
    <Typography variant="small" color="var(--color-white)" ml="10px">
      {value}
    </Typography>
  </Row>
);
