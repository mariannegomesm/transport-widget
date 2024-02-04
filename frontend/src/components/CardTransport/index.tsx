import Image from "next/image";

import { TRANSPORT_DETAILS } from "@/constants/transport-details";

import { Assessment, Card, Column, Input, Row, Typography } from "..";

import Person from "@/assets/images/Person.svg";
import Car from "@/assets/images/Car.svg";
import Phone from "@/assets/icons/Phone.svg";
import Shield from "@/assets/icons/Shield.svg";
import styled from "styled-components";

export const CardTransport = () => (
  <Card>
    <Column mb="99px">
      <Row>
        <Typography variant="big" fontWeight="semibold">
          {TRANSPORT_DETAILS.description_primary}
        </Typography>
        <Typography
          variant="big"
          fontWeight="semibold"
          color="var(--color-purple)"
          m="0 8px"
        >
          {TRANSPORT_DETAILS.driver.surname}
        </Typography>
        <Typography variant="big" fontWeight="semibold">
          {TRANSPORT_DETAILS.description_secondary}
        </Typography>
      </Row>
      <Typography variant="medium">{TRANSPORT_DETAILS.time_left}</Typography>
    </Column>
    <Row justifyContent="space-between" alignItems="center" mb="99px">
      <Row alignItems="center">
        <Column>
          <ImagePerson src={Person} alt="person" />
          <Assessment value={TRANSPORT_DETAILS.driver.assessment} />
        </Column>
        <ImageCar src={Car} alt="car" />
      </Row>
      <Column>
        <Typography variant="big" fontWeight="semibold">
          {TRANSPORT_DETAILS.driver.plate}
        </Typography>
        <Typography variant="medium">
          {TRANSPORT_DETAILS.driver.brand}
        </Typography>
      </Column>
    </Row>
    <Row>
      <Input
        placeholder={`${TRANSPORT_DETAILS.description_placeholder} ${TRANSPORT_DETAILS.driver.surname}...`}
      />
      <Row width={134} justifyContent="space-between" ml="32px">
        <Image src={Phone} alt="phone" />
        <Image src={Shield} alt="shield" />
      </Row>
    </Row>
  </Card>
);

const ImagePerson = styled(Image)`
  z-index: 1;
  position: relative;
`;

const ImageCar = styled(Image)`
  z-index: 0;
  position: relative;

  margin-left: -40px;
`;
