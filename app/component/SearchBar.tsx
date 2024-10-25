import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  search: z.string().min(1, "Search term is required"), // Ensure search is not empty
});

type Input = z.infer<typeof schema>;

interface Props {
  setQuery: (query: string) => void;
}

const SearchBar = ({ setQuery }: Props) => {
  const { handleSubmit, register, formState: { errors } } = useForm<Input>({
    resolver: zodResolver(schema), // Use zodResolver with the schema
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    setQuery(data.search); // Use data.search to get the input value
  };

  return (
    <div className='search'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-row justify-between ml-3'>
        <input
          id='search'
          {...register('search')} // Register the input for validation
          type='text'
          className='outline-none bg-card'
          placeholder='Search GitHub username..'
        />
        <button type='submit' className='button'>Search</button>
      </form>
      {/* Display error message if validation fails */}
      {errors.search && <p className="error">{errors.search.message}</p>}
    </div>
  );
};

export default SearchBar;
