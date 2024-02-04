import styled, { css } from "styled-components";

import { decoration, display } from "@/utils/styled";
import { DecorationProps, DisplayProps } from "@/interface/styled";

export const Row = styled.div<DisplayProps & DecorationProps>(
  () => css`
    display: flex;
  `,
  decoration,
  display
);
