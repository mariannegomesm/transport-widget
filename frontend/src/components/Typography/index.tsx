import styled, { css } from "styled-components";

import { DisplayProps, DecorationProps } from "@/interface/styled";
import { decoration, display } from "@/utils/styled";

interface TypographyProps extends DisplayProps, DecorationProps {
  fontWeight?: keyof typeof FONT_WEIGHT_VARIANTS;
  variant?: keyof typeof TEXT_VARIANTS;
  as?: React.ElementType;
  cursor?: string;
}

const TEXT_VARIANTS = {
  big: {
    "font-size": "40px",
  },
  medium: {
    "font-size": "25px",
  },
  small: {
    "font-size": "18px",
  },
};

const FONT_WEIGHT_VARIANTS = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

export const Typography = styled.p<TypographyProps>(
  ({ variant = "small", fontWeight = "regular", cursor }) => css`
    margin: 0;

    font-size: ${TEXT_VARIANTS[variant]["font-size"]};
    font-weight: ${FONT_WEIGHT_VARIANTS[fontWeight]};

    color: var(--color-gray);

    ${cursor &&
    css`
      cursor: ${cursor};
    `}
  `,
  display,
  decoration
);
