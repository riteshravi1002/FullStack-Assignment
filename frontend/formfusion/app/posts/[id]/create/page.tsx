// app/posts/create/page.tsx
import MyForm from '../../../components/MyForm';

const CreatePage = () => {
  return (
    <div>
      <h1>Create New Post</h1>
      <MyForm mode="create" />
    </div>
  );
};

export default CreatePage;
