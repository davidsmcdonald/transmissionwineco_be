import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const Dot = styled.div`
  color: var(--black, black);
  border: 1px solid var(--black, black);
  border-radius: 50%;
  padding: 0.3rem;
  line-height: 1rem;
  min-width: 1rem;
  margin-left: 1rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: 'tabular-nums';
`;

export default function CartCount({ count }) {
  return <Dot>{count}</Dot>;
}
