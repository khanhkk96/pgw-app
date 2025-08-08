import theme from '@/styles/theme';
import styled from 'styled-components';

export const Warning = styled.p``;

export const PError = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  text-align: right;
  color: ${theme.color.red};
`;

export const ErrorMessage = ({
  message,
}: //   messages,
{
  message: string;
  //   messages?: import('react-hook-form').MultipleFieldErrors;
}): any => <PError>{message}</PError>;
