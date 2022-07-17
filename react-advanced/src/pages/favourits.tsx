import React from 'react'
import PageWrap from '../components/page-wrap';
import { useActions, useAppSelector } from '../hooks'


export default function FavouritsPage() {
  const
    { deleteFavourite } = useActions(),
    { favourites } = useAppSelector(state => state.github);

  const handlerDelete = (url: string) => {
    deleteFavourite(url);
    
  };

  if (favourites.length === 0) return <p className='text-center'>No items.</p>

  return (
    <PageWrap>
      <ul className='list-none'>
        {
          favourites.map(f => (
            <li key={f} className="my-1 relative">
              <a href={f} target="_blank">{f}</a>
              <div className="ml-2 absolute right-[-40px] top-0 cursor-pointer" onClick={() => handlerDelete(f)}>Х</div>
            </li>
          ))
        }
      </ul>
    </PageWrap>
  )
}
