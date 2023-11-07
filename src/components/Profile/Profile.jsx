const jsonUser = `{
    "username": "Jacques Gluke",
    "tag": "jgluke",
    "location": "Ocho Rios, Jamaica",
    "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    "stats": {
      "followers": 5603,
      "views": 4827,
      "likes": 1308
    }
  }`
  
  
  
  export const userData = JSON.parse(jsonUser)
  
  
  
  export const Profile = ({username, tag, location, avatar, followers, views, likes}) => (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar"/>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
  
    </div>
  )