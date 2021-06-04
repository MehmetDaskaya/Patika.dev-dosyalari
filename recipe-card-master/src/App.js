import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Mehmet D.";
  const recipeItem = {
    title: "Etli Nohut",
    date: "4 Haziran 2021, Cuma",
    image:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2018/01/nohut-yemegi-yemekcom.jpg",
    description:
      "Benim de en sevdiğim yemek olan etli nohut, Anadolu'nın en sevilen yemeklerindendir.",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;
