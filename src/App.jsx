import { Profile } from "./components/Profile";

function App() {
  const users = [
    {
      name: "L",
      country: "Japan",
      charge: "Detective",
      img: "L",
      company: "independiente",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
      youtube: "https://www.youtube.com/watch?v=sA6GLn9G8x4",
      facebook:
        "https://es-la.facebook.com/people/L-death-note/100063553788376/",
      twitter:
        "https://twitter.com/i/flow/login?redirect_after_login=%2Fofficiallawliet",
    },
    {
      name: "Zoro",
      country: "Wano",
      charge: "Espadachin",
      img: "Zoro",
      company: "Sombreros de paja",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
      youtube: "https://www.youtube.com/watch?v=WOiQAUNnvyE",
      facebook: "https://www.facebook.com/groups/601512847434436/",
      twitter: "https://twitter.com/roronoazoro100?lang=es",
    },
    {
      name: "Guts",
      country: "Desconocido",
      charge: "Espadachin",
      img: "Guts",
      company: "Desconocido",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
      youtube: "https://www.youtube.com/watch?v=6QmTo4vgoaY",
      facebook:
        "https://es-la.facebook.com/people/GutsBerserk/100070962570664/",
      twitter:
        "https://twitter.com/i/flow/login?redirect_after_login=%2Fgutzpuc",
    },
  ];
  return (
    <>
      <div className="main-container">
        <h1>Mis personajes favoritos</h1>
        {users.map((user) => (
          <Profile
            key={user.name}
            name={user.name}
            img={user.img}
            country={user.country}
            charge={user.charge}
            company={user.company}
            description={user.description}
            youtube={user.youtube}
            facebook={user.facebook}
            twitter={user.twitter}
          />
        ))}
      </div>
    </>
  );
}

export default App;
