import styled from 'styled-components';
import PostTweetForm from '../components/post-tweet-form';
import Timeline from '../components/timeline';

const Wrapper = styled.div`
  display: grid;
  overflow-y: scroll;
  gap: 50px;
  grid-template-rows: 1fr 5fr;
  &::-webkit-scrollbar{
    display: none;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}
