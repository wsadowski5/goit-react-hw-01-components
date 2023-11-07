// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template 
//     </div>
//   );
// };



// const Link = () => <a href="https://media.istockphoto.com/id/1461568911/pl/zdj%C4%99cie/popo%C5%82udniowe-li%C5%9Bcie-jaworu.jpg?s=1024x1024&w=is&k=20&c=vTRBOAGixyUhQdhmKIV2B4W1wsDUr9jqYJm_nX20tvg="> TESTTTTTTTTT</a>



// const Product = ({imgUrl, name, price}) => (
// <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price} dolczegabanów</p>
//     <button type="button">Add to cart</button>
//   </div>
// )

import { Profile, userData } from "./Profile/Profile";


export const App = () => {
  return (
    <>
      <Profile username = {userData.username} avatar = {userData.avatar} tag = {userData.tag} location ={userData.location} followers={userData.stats.followers} views={userData.stats.views} likes={userData.stats.likes}/>
  </>
  );
};


