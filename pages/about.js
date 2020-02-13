import About from '../components/About/About';

const about = ({ postId, postOrder, postValue }) => {
  return <AppShell
    appContent={
      <About slug={postId} order={postOrder} value={postValue} />
    }
  />;
}

about.getInitialProps = ({ query: { id, number, value } }) => ({ postId: id, postOrder: number, postValue: value });

export default about;
