import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BellComponentLibraryProps {}

const StyledBellComponentLibrary = styled.div`
  color: pink;
`;

export function BellComponentLibrary(props: BellComponentLibraryProps) {
  return (
    <StyledBellComponentLibrary>
      <h1>Welcome to BellComponentLibrary!</h1>
    </StyledBellComponentLibrary>
  );
}

export default BellComponentLibrary;
