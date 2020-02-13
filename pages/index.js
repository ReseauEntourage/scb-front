import Index from '../components/Index/Index';

const index = ({ postId }) => {
  return <AppShell
    appContent={
      <Index id={postId} enumeration={'Intro'} />
    }
  />;
}

index.getInitialProps = ({ query: { id } }) => ({ postId: id });

export default index;
