import styled from "@emotion/styled";
import { ClipLoader } from "react-spinners";

const Loading = () => {

  const color = '#88AFE3';
  const loading = true

  return (
    <LoadingWrapper>
      <ClipLoader color={color} loading={loading} size={50} />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export default Loading;