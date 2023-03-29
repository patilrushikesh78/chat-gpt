import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 10px;
  //   color: #f03d4e;
`;
const LabelWhite = styled.label`
  margin-bottom: 10px;
  color: #ffffff;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledParagraph = styled.p`
  color: red;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Pre = styled.pre`
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export {
  FormContainer,
  Form,
  Label,
  Input,
  Button,
  Wrapper,
  Title,
  LabelWhite,
  StyledParagraph,
  TextArea,
  Pre
};
