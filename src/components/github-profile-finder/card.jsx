import './style.css';
export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, url, name, login, created_at } = user;

    const createdDate = new Date(created_at)


    return <div className="github-user">
        <div>
            <img src={avatar_url} className="github-user-avatar" alt="User" />
        </div>
        <div className='github-user-name-container'>
            <a href={`https://github.com/${login}`} target='_blank'>{name || login}</a>
            <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', { month: "short" })} ${createdDate.getFullYear()}`}</p>
        </div>
        <div className='github-user-profile-info'>
            <div >
                <p>Public Repos</p>
                <p>{public_repos}</p>
            </div>
            <div className='follow'>
                <div>
                    <p>{followers}</p>
                    <p>Followers</p>
                </div>
                <span>|</span>
                <div>
                    <p>{following}</p>
                    <p>Following</p>
                </div>
            </div>

        </div>
    </div>
}