import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className="text-3xl my font-bold card-title">
                Latest repos
            </h2>
           {repos.map((repo)=>(
            <RepoItem key={repo.id} repo={repo}/>
           ))}
        </div>
      REPOS
    </div>
  )
}

RepoList.propTypes = {
    repos:PropTypes.array.isRequired,
}

export default RepoList
