import styled from 'styled-components';

type Props = {
  beforeIcon?: any;
  afterIcon?: any;
  text?: string;
  //   color?: string;
  style?: React.HTMLAttributes<HTMLDivElement>;
};

export default function CustomButton({
  beforeIcon,
  text,
  afterIcon,
  style,
}: Props) {
  return (
    <ButtonStyle>
      <div className="button-wrapper" style={{ ...style }}>
        {beforeIcon && <img src={beforeIcon} />}
        {text && <span>{text}</span>}
        {afterIcon && <img src={afterIcon} />}
      </div>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  margin: 0 5px;
  border: none;

  &:hover {
    background-color: black;
    color: white;
  }

  .button-wrapper {
    display: flex;
    padding: 6px 20px;
    justify-content: center;
    align-items: center;
  }
`;
