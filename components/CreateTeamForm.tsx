import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface TeamDetails {
  name: string;
  adminId: string;
}

interface TeamFormProps {
  onSubmit: (data: TeamDetails) => void;
  adminId: string; // Assuming the admin ID is passed as a prop
}

const TeamForm: React.FC<TeamFormProps> = ({ onSubmit, adminId }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TeamDetails>();

  const handleFormSubmit: SubmitHandler<TeamDetails> = (data) => {
    onSubmit({ ...data, adminId });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '4px', maxWidth: '500px', margin: 'auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Team Name</label>
        <input {...register('name', { required: 'Team name is required' })} id="name" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</span>}
      </div>

      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Create Team
      </button>
    </form>
  );
};

export default TeamForm;
