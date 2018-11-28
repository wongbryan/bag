import React from "react";
import styled from "@emotion/styled";

const InputContainer = styled("div")`
  font-size: 1.25rem;
  position: relative;
  padding: 3px;
  border: 1px solid black;
  border-radius: 2px;
  transform-origin: left;
  display: block;
  margin: 8px;
`;

const InputBox = styled("input")`
  font-size: 1rem;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.liftInput = this.liftInput.bind(this);
  }

  liftInput(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <InputContainer>
        <InputBox
          type="input"
          placeholder={value}
          onChange={e => this.liftInput(e)}
        />
      </InputContainer>
    );
  }
}

export default Input;
