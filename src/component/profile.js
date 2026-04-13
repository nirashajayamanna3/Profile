function Profile() {
  const user = {
    picture: "myPhoto.jpg",
    name: "Nirasha Jayamanna",
    email: "nirashajayamanna3@gmail.com",
    bio: "Software Engineering Student",  
  };

  return (
    <div className="profile-card">
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>{user.email}</p>
      
    </div>
  );
}

export default Profile;