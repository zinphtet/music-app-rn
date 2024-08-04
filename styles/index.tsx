import styled from "styled-components/native";

export const TextComponent = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.light.tabIconSelected};
`;

export const PaddingContainer = styled.View`
  padding-left: 20px;
  padding-top:  10px;
  padding-bottom: 50px;
  position: relative;
`;
