# Rick and Morty

_Página hecha con React, la cual mediante una petición a la API devuelve un listado de personajes de la serie Rick y Morty, los cuales al pinchar en cada personaje muestran sus detalles._

## Tecnologías utilizadas 🚀

_Este proyecto está hecho con React, JavaScript, HTML5, preprocesador Gulp, Sass y CSS3._

### Instalación 🔧

_Para poner en marcha el proyecto abre una terminal en la carpeta raíz de tu repositorio e instala las dependencias locales ejecutando en la terminal el comando:_

```
npm install
```

_Para arrancar el proyecto, hay que ejecutar el comando siguiente en la consola:_

```
npm start
```

_Por último para publicar la página en GitHub Pages, ejecutamos el siguiente comando:_

```
npm run docs
```

### Proyecto
_Este proyecto está divivido en componentes, la mayoría de clase. Cada uno representa una funcionalidad o componente._
_*1. App*_
_*2. CharacterList*_
_*3. CharacterCard*_
_*4. CharacterInfo*_
_*5. Header*_
_*6. Input filter*_

_Por otro lado en la carpeta Data, tenemos el fetch con la petición a la API._

_Algunos ejemplos de código, que merece la pena destacar serían:_

```
renderCharacterInfo(props) {
    const routeId = parseInt(props.match.params.id);
    const size = this.state.characters.length;
    const selectedCharacter = this.state.characters.find(
      (character) => character.id === routeId
    );
    if (selectedCharacter === undefined) {
      return (
        <div className="go__home">
          <Link to="/">
            <img className="portal__home" src={Portal} alt="" />
          </Link>
          <div className="not__exist">
            <h2>The character you are looking for, doesn't exist.</h2>
            <div className="not-found">
              <img src={NotFound} alt="" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <CharacterInfo
          character={selectedCharacter}
          size={size}
          charactersToShow={this.allFilters()}
        />
      );
    }
  }
```
```
const actualIndex = props.charactersToShow.indexOf(props.character);
const prevId =
  actualIndex > 0
    ? props.charactersToShow[actualIndex - 1].id
    : props.charactersToShow[actualIndex].id;
const nextId =
  actualIndex < props.charactersToShow.length - 1
    ? props.charactersToShow[actualIndex + 1].id
    : props.charactersToShow[actualIndex].id;
```
```
handleInput(ev) {
    const character = ev.currentTarget.value;
    this.props.filterCharacter(character);
  }
  handleSpecies(ev) {
    const specie = ev.currentTarget.value;
    this.props.filterSpecies(specie);
  }
  handleSubmit(ev) {
    ev.preventDefault();
  }
```

_Y ya estaría!!_

---
⌨️ Con ❤️ por [SandraTapia](https://github.com/sandratapia) 😊
