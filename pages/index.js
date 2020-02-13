import Entete from '../components/Entete/Entete';

const index = ({ postId }) => {
  return <div className='container-fluid'>
    <Entete id={postId} enumeration={'Intro'}></Entete>
  </div>
}

index.getInitialProps = ({ query: { id } }) => ({ postId: id });

export default index;
