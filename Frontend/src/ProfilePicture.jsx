// import React, { useState } from 'react';
// import styled from 'styled-components';

// function ProfilePicture() {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <ProfileContainer>
//       <ProfileImage>
//         {image ? (
//           <img src={image} alt="Profile" />
//         ) : (
//           <NoImageText>No Profile Picture</NoImageText>
//         )}
//       </ProfileImage>
//       <input type="file" onChange={handleImageChange} />
//     </ProfileContainer>
//   );
// }

// export default ProfilePicture;

// const ProfileContainer = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const ProfileImage = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   overflow: hidden;
//   margin: 0 auto;
//   background: #2e2e2e;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const NoImageText = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 16px;
//   background-color: #444;
// `;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaCamera } from 'react-icons/fa';  // Importing the camera icon

// function ProfilePicture() {
//   const [image, setImage] = useState(null);
//   const fileInputRef = React.createRef();

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleClick = () => {
//     fileInputRef.current.click(); // Trigger the file input on camera icon click
//   };

//   return (
//     <ProfileContainer>
//       <ProfileImage>
//         {image ? (
//           <img src={image} alt="Profile" />
//         ) : (
//           <NoImageText>No Profile Picture</NoImageText>
//         )}
//       </ProfileImage>

//       {/* Camera Icon to trigger file input */}
//       <CameraIcon onClick={handleClick}>
//         <FaCamera />
//       </CameraIcon>

//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleImageChange}
//         accept="image/*"
//       />
//     </ProfileContainer>
//   );
// }

// export default ProfilePicture;

// const ProfileContainer = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   width: 100%;
// `;

// const ProfileImage = styled.div`
//   width: 100%;
//   height: 40vh;
//   background-color: #2e2e2e;
//   border-radius: 8px;
//   overflow: hidden;
//   position: relative;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const NoImageText = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 20px;
//   background-color: #444;
// `;

// const CameraIcon = styled.div`
//   position: absolute;
//   bottom: 10px;
//   right: 10px;
//   background-color: rgba(0, 0, 0, 0.6);
//   border-radius: 50%;
//   padding: 10px;
//   cursor: pointer;
//   color: white;
//   font-size: 30px;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaCamera } from 'react-icons/fa';  // Importing the camera icon

// function ProfilePicture() {
//   const [image, setImage] = useState(null);
//   const fileInputRef = React.createRef();

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleClick = () => {
//     fileInputRef.current.click(); // Trigger the file input on camera icon click
//   };

//   return (
//     <ProfileContainer>
//       {/* Full-width cover image */}
//       <CoverImage>
//         <CameraIcon onClick={handleClick}>
//           <FaCamera />
//         </CameraIcon>
//         {image ? (
//           <img src={image} alt="Profile" />
//         ) : (
//           <NoImageText>No Profile Picture</NoImageText>
//         )}
//       </CoverImage>

//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleImageChange}
//         accept="image/*"
//       />
//     </ProfileContainer>
//   );
// }

// export default ProfilePicture;

// const ProfileContainer = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   width: 100%;
// `;

// const CoverImage = styled.div`
//   width: 100%;
//   height: 40vh;
//   background-color: #2e2e2e;
//   border-radius: 8px;
//   overflow: hidden;
//   position: relative;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const NoImageText = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 20px;
//   background-color: #444;
// `;

// const CameraIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: rgba(0, 0, 0, 0.6);
//   border-radius: 50%;
//   padding: 10px;
//   cursor: pointer;
//   color: white;
//   font-size: 30px;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;


import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';  // Importing the camera icon

function ProfilePicture() {
  const [image, setImage] = useState(null);
  const fileInputRef = React.createRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Trigger the file input on camera icon click
  };

  return (
    <ProfileContainer>
      <CoverImage>
        <CameraIcon onClick={handleClick}>
          <FaCamera />
        </CameraIcon>
        {image ? (
          <ScrollableContainer>
            <img src={image} alt="Profile" />
          </ScrollableContainer>
        ) : (
          <NoImageText>No Profile Picture</NoImageText>
        )}
      </CoverImage>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
        accept="image/*"
      />
    </ProfileContainer>
  );
}

export default ProfilePicture;

const ProfileContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 50vh; /* Adjust this to control the height of the container */
  background-color: #2e2e2e;
  position: relative;
  overflow: hidden;
`;

const ScrollableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto; /* Makes the image scrollable */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    max-width: none; /* Prevents image from being constrained */
    max-height: none;
  }
`;

const NoImageText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  background-color: #444;
`;

const CameraIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6); /* Slightly transparent background */
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-size: 24px;
  opacity: 0.8;
  transition: opacity 0.3s ease, background-color 0.3s ease;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.9); /* Darker background on hover */
  }
`;
