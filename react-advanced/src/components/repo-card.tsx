import { useState } from 'react'
import { useActions, useAppSelector } from '../hooks';
import { IRepo } from '../models/models'



function RepoCard({ repo }: { repo: IRepo }) {
  const
    { addFavourite, deleteFavourite } = useActions(),
    { favourites }    = useAppSelector(state => state.github),
    [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  
  
  const handlerAddToFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const handlerDeleteFromFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteFavourite(repo.html_url);
    setIsFav(false);
  };

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
      <a href={repo.html_url} target="_blank">
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-small font-thin">{repo?.description}</p>
        {
          isFav
            ? <button
                className="py-2 px-4 bg-red-100 rounded hover:shadow-md transition-all"
                onClick={handlerDeleteFromFavourites}
              >
                Delete
              </button>
            : <button
                className="py-2 px-4 mr-1 bg-yellow-100 rounded hover:shadow-md transition-all"
                onClick={handlerAddToFavourites}
              >
                Add
              </button>
        }        
      </a>
    </div>
  )
}

export default RepoCard