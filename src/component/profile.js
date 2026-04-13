function Profile() {
    const user = {
    name: "Nirasha Jayamanna",
    email: "nirashajayamanna3@gmail.com",
    bio: "Software Engineering Student",  
  };
  return (
    <div className="profile-card">
      
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
}

export default Profile;