function ProfileCard({ name, role, bio }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md">
      <h2 className="text-teal-400 text-xl font-bold">{name}</h2>
      <p className="text-gray-400">{role}</p>
      <p className="text-gray-300 mt-2">{bio}</p>
    </div>
  );
}

export default ProfileCard;