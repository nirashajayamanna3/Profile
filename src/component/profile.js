function Profile() {
    const user = {
    name: "Nirasha Hansani",
    email: "nirasha@gmail.com",
    bio: "Software Engineering Student",  
  };
  return (
    <div className="profile-card">
      <img src={user.image} alt="profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
}

export default Profile;