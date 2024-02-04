import styled from "styled-components";

interface InputProps {
  placeholder: string;
}

export const Input = ({ placeholder }: InputProps) => (
  <InputContainer placeholder={placeholder} />
);

const InputContainer = styled.input`
  width: 516px;
  height: 64px;

  padding: 14px 29px;

  border: 0px;
  border-radius: 24px;

  background-color: var(--color-purple-light);

  &::-webkit-input-placeholder {
    font-size: 24px;

    color: var(--color-gray);
  }
`;
