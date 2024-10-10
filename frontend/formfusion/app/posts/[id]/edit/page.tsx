// app/posts/[id]/edit/page.tsx (or create.tsx)
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchPostById, updatePost, createPost } from '../../../api/posts/api'; // Adjust imports accordingly
import MyForm from '../../../../components/MyForm';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the post ID from the URL
  const [formData, setFormData] = useState<any>(null); // Adjust type as needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const isEdit = !!id; // Determine if it's edit mode based on the presence of `id`

  // Fetch data when in edit mode
  useEffect(() => {
    const fetchData = async (postId: string) => {
      try {
        const data = await fetchPostById(postId);
        setFormData(data);
      } catch (err) {
        setError('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    if (isEdit && id) {
      fetchData(id as string);
    } else {
      setLoading(false); // If creating, skip loading
    }
  }, [id, isEdit]);

  // Submit data via POST/PUT
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`/api/posts/${isEdit ? id : ''}`, {
        method: isEdit ? 'PUT' : 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      // Handle success
      router.push('/posts'); // Redirect after successful submission
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div>
      <h1>{isEdit ? `Edit Post ${id}` : 'Create New Post'}</h1>
      {formData && (
        <MyForm 
          mode={isEdit ? 'edit' : 'create'} 
          initialData={isEdit ? formData : undefined} 
          onSubmit={onSubmit} 
        />
      )}
    </div>
  );
};

export default EditPage;
