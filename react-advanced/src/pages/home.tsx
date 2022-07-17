import { useState, useEffect } from 'react'
import PageWrap from '../components/page-wrap';
import RepoCard from '../components/repo-card';
import { useDebounce } from '../hooks';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api';


export default function HomePage() {
  const
    [search, setSearch]          = useState(``),
    debounced                    = useDebounce(search),
    [dropdown, setDropdown]      = useState(false),
    { isLoading, isError, data } = useSearchUsersQuery(debounced, {
      skip: debounced.length < 3,
      refetchOnFocus: true // если вернулись на данную страницу спустя время, чтобы он сделал запрос снова
    }),
    [fetchRepos, { isLoading: isReposLoading, isError: isResposError, data: repos }] = useLazyGetUserReposQuery()

  
  useEffect(() => {
    if (debounced.length > 3 && !dropdown) setDropdown(true);
    if (debounced.length < 3 && dropdown) setDropdown(false);

  }, [debounced, data]);

  const handlerClick = (userName: string) => {
    fetchRepos(userName);
    setDropdown(false);
  };


  return (
    <PageWrap>
      {
        isError && <p className='text-center text-red-600'>Something went wrong...</p>
      }

      <div className='relative w-[560px]'>
        <input
          type        = "text"
          className   = 'border py-2 px-4 w-full h-[42px] mb-2'
          placeholder = 'Search for Github username...'
          value       = {search}
          onChange    = {e => setSearch(e.target.value)}
        />

        {
          dropdown &&
            <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'>
              {
                isLoading
                  ? <p className='text-center'>Loading...</p>
                  : data?.map(user => (
                    <li
                      key={user.id}
                      onClick={() => handlerClick(user.login)}
                      className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                    >
                      {user.login}
                    </li>
                  ))
              }
            </ul>
        }

        <div className="containe">
          {
            isReposLoading && <p className='text-center'>Loading...</p>
          }
          {
            repos?.map(repo => <RepoCard key={repo.id} repo={repo} />)
          }
        </div>
      </div>
    </PageWrap>
  )
}
