import { Profile } from "./components/Profile";

function App() {
  const users = [
    {
      name: "L",
      country: "Japan",
      charge: "Detective",
      company: "independiente",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
    },
    {
      name: "Zoro",
      country: "Wano",
      charge: "Espadachin",
      company: "Sombreros de paja",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
    },{
      name: "Guts",
      country: "Desconocido",
      charge: "Espadachin",
      company: "Desconocido",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
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
            country={user.country}
            charge={user.charge}
            company={user.company}
            description={user.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
