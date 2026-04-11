import ProfileCard from "./component/profile";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-4">
      

      <ProfileCard
        name="Nirasha"
        role="Software Engineering Student"
        bio="Passionate about full stack development."
      />

      
    </div>
  );
}

export default App;