// components/MyForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../validation/validationSchema'; // Import your Zod schema for validation

interface MyFormProps {
  mode: 'create' | 'edit';
  initialData?: {
    title?: string;
    content?: string;
  }; // Define initialData structure according to your needs
  onSubmit: (data: any) => void; // Define the type based on your data structure
}

const MyForm: React.FC<MyFormProps> = ({ mode, initialData, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialData || {}, // Set default values from initialData or empty object
  });

  // Reset form values when initialData changes
  React.useEffect(() => {
    reset(initialData); // Resets the form with initial data
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" {...register('title')} />
        {errors.title && <span>{errors.title.message}</span>} {/* Show validation error if any */}
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" {...register('content')} />
        {errors.content && <span>{errors.content.message}</span>} {/* Show validation error if any */}
      </div>
      <button type="submit">{mode === 'edit' ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default MyForm; // Export the component for use in other files
