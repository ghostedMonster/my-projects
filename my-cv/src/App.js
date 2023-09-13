import "./App.css";
import MyGallery from "./myGallery/myGallery";
import { navaja } from "./rutas/Navaja";
import { amongus } from "./rutas/Amongus";
import { donut } from "./rutas/Donut";
import { lata } from "./rutas/Lata";
import { ricky } from "./rutas/Ricky";
import { grua } from "./rutas/Grua";
import { auriculares } from "./rutas/Auriculares";
import { gato_raton } from "./rutas/Gato_y_raton";
import { mograph } from "./rutas/Mograph";

function App() {
  return (
    <div className="App">
      <div className={window.innerWidth > 1200 ? "main-description" : "main-description-phone"}>
        Esta página es una galería simple para enseñar los proyectos 3D que
        realice. Quizás no es mucho lo que pueda mostrar por el momento, pero la
        verdad, llevo bastante poco usando este tipo de programas. estos
        proyectos los realicé en un curso de tres meses donde usábamos Cinema 4D
        con el motor de renderizado Redshift, a excepción del donut, que hice en
        Blender siguiendo el tutorial de{" "}
        <a href="https://youtu.be/nIoXOplUvAw?si=gtNB6bc3wemR6gmZ">
          Blender Guru
        </a>{" "}
        de introducción a Blender, y el del gato y el ratón, que los hice
        despues del curso para un reto de un artista 3D llamado{" "}
        <a href="https://youtu.be/wgiRK8_iKdg?si=dyYsXfmv0A2KVYtZ">Pwnisher</a>.
      </div>
      <hr width="40%" />
      <MyGallery folder={donut} float="left" video title="Donut" />
      <MyGallery folder={navaja} float="bottom" title="Navaja" />
      <MyGallery folder={amongus} float="left" title="Among Us" />
      <MyGallery folder={lata} float="right" video title="Lata" />
      <MyGallery folder={ricky} float="left" title="Pickle Rick" />
      <MyGallery
        folder={mograph}
        float="bottom"
        title="Mograph"
        description="Este tiene efectos de sonido"
        video
      />
      <MyGallery
        folder={grua}
        float="right"
        video
        title="Grúa"
        description="Este tiene efectos de sonido"
      />
      <MyGallery
        folder={auriculares}
        float="bottom"
        video
        title="Auriculares"
        description="Este tiene música"
      />
      <MyGallery
        folder={gato_raton}
        float="bottom"
        video
        title="Gato y Ratón"
      />

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
