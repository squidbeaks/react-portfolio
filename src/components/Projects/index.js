// import React, { useState } from 'react';

// const PhotoList = ({ category }) => {
//   const [photos] = useState([
//     {
//       name: 'Wine and Dine Preview',
//       category: 'wine-and-dine',
//       description: 'A preview of the Wine and Dine Application'
//     },
//     {
//       name: 'masterTicket',
//       category: 'masterticket',
//       description: 'A preview of the masterTicket Application'
//     },
//   ])

// const currentProjects = photos.filter((photo) => photo.category === category);

//   return (
//     <div>
//       <div className="flex-row">
//         {currentProjects.map((image, i) => (
//           <img
//             src={require(`../../assets/projects/${i}.png`)}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             key={image.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoList;
