import "./home.css"

function Home() {
  return (
    <main id="home-main">
      <div id="profile-card">
        <img src="profile-picture.png" alt="Profile Picture" />
        <div id="profile-text">
          <h1>Hello There!</h1>
          <h2>
            "I am a front-end developer with a degree in Computer Science"
          </h2>
        </div>
      </div>
    </main>
  )
}

export default Home