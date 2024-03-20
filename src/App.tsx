import React, { Component } from "react";

import WheelHubLogo from "../src/assets/img/Logotipo-Vertical-Blanco-Alta.png";
import Img1 from "./assets/img/screenshots/1.jpg";
import Img2 from "./assets/img/screenshots/2.jpg";
import Img3 from "./assets/img/screenshots/3.jpg";
import Img4 from "./assets/img/screenshots/4.jpg";
import Img5 from "./assets/img/screenshots/5.jpg";
import Img6 from "./assets/img/screenshots/6.jpg";
import Img7 from "./assets/img/screenshots/7.jpg";
import Img8 from "./assets/img/screenshots/8.jpg";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="app-content">
          <h1>
            Bienvenid@ al test de{" "}
            <img
              src={WheelHubLogo}
              className="app-header-logo"
              alt={"openbank-logo"}
            />
          </h1>
          <h3>Objetivo </h3>
          <p>
            Lo que pretendemos con la prueba es evaluar las capacidades técnicas
            respecto a un/a desarrollador/a web o front, especialmente en el
            area de React y aplicaciones SPA. Con esta prueba se pretende
            valorar muchos aspectos del stack tecnológico del ámbito web, como
            arquitectura, uso de patrones de diseño, maquetación, técnicas de
            programación, conocimentos de Typescript, HTML y CSS, entre otros.{" "}
          </p>
          <h3>¿En que consiste?</h3>
          <p>
            La prueba consiste en diseñar, maquetar y desarrollar desde cero un
            pequeño wizard que simule la creación de un usuario y contraseña. Lo
            que queremos que hagas es que plantees un wizard de unos 3 pasos en
            los que una persona de su conformidad del tratamiento de sus datos,
            complete su usuario y contraseña através de un formulario, y una
            página final de feedback de la operación.
          </p>
          <h3>Desarrollo</h3>
          <ul>
            <li>
              <h4>1º Pantalla inicial</h4>
              <img src={Img1} />
              <p>
                En esta pantalla la persona que entra a la aplicación debe
                entender los pasos que realizará a lo largo del wizard.{" "}
              </p>
              <p>
                Es una pantalla con el nombre del test, logo de Wheel Hub, una
                explicación de lo que deberá realizar, un checkbox de
                confirmación y botones de wizard para avanzar al siguiente paso.
              </p>
              <p>
                Deberá marcar el checkbox para habilitar el botón de
                "Siguiente".
              </p>
              <img src={Img2} />
            </li>
            <li>
              <h4>2º Pantalla de creación de usuario y contraseña</h4>
              <img src={Img3} />
              <p>
                En esta pantalla a la persona se le pedirá los siguientes datos:
              </p>
              <ul style={{ marginBottom: "15px" }}>
                <li>Usuario</li>
                <li>
                  Contraseña (Min 8 - Max 24 caracteres)(Al menos 1 número y una
                  mayúscula)
                </li>
                <li>Repetir contraseña</li>
                <li>Pista (Maximo 60 caracteres)(dato opcional)</li>
              </ul>
              <p>
                Aquí para poder avanzar de paso, es necesario que todos los
                campos del formulario esten correctamente rellenos (salvo la
                pista que es opcional).
              </p>
              <p>
                Se debe controlar errores de tipo o forma en cada uno de ellos,
                mostrando un error asociado a cada input.
              </p>
              <img src={Img4} />
              <p>
                Se debe validar que sea una contraseña correcta y que ambas
                coincidan.
              </p>
              <p>
                El diseño del input debe ser similar al de la imagen (con una
                línea que cambie de colores según la fortaleza del password).
              </p>
              <img src={Img5} />
              <p>
                Se debe mostrar la contraseña ingresada al hacer click en el
                "ojo".
              </p>
              <img src={Img6} />
              <p>
                Cuando todos los datos obligatorios sean cargados, y se pulse el
                botón "Siguiente", se debe deshabilitar el botón y mostrar un
                spinner de carga.
              </p>
              <p>
                * Los datos se deberán enviar al backend de forma asíncrona y al
                recibir la respuesta con el status 200, avanzar a la 3er
                pantalla.
              </p>
              <p>
                <i>
                  <a href="https://github.com/Wheelhub-Opensource/test_backend">
                    Encontrará los requisitos para realizar el back en este link
                  </a>
                </i>
              </p>
              <img src={Img7} />
            </li>
            <li>
              <h4>3º Pantalla de feedback</h4>
              <img src={Img8} />
              <p>
                Esta pantalla únicamente mostrará un icono de Ok informando al
                usuario el resultado, además de un botón que regrese al inicio.
              </p>
            </li>
          </ul>
          <h3>Requisitos</h3>
          <p>
            Los requisitos que se van a tener en cuenta para la evaluación de la
            prueba son:
          </p>
          <ul>
            <li>
              Tiene que estar maquetada semánticamente correcto, con etiquetas
              de HTML5 y layouts actuales.
            </li>
            <li>
              Se puede renombrar, quitar o añadir cualquier recurso, fichero,
              asset que se crea necesario para mejorar o embellecer la prueba.
            </li>
            <li>La iconografía puede obtenerse de donde guste</li>
            <li>Sistema de traducción (i18n)</li>
            <li>Al menos 3 test unitarios con Jest</li>
            <li>
              Creación de componentes manualmente (no utilizar librerías para el
              wizard)
            </li>
            <li>
              Nice to haves a tener en cuenta
              <ul>
                <li>Estructura del proyecto</li>
                <li>Control de la UI durante las llamadas asíncronas</li>
                <li>Reutilización de componentes</li>
                <li>Uso de buenas prácticas de programación</li>
                <li>Metodologías en hojas de estilos (Scss)</li>
                <li>Rendimiento</li>
                <li>Utilización de context</li>
              </ul>
            </li>
          </ul>
          <h3>Recursos</h3>
          <p>
            Se provee un proyecto vacío donde se espera que el desarrollador
            complete la lógica.
          </p>
          <p>
            Además se provee de un base.scss con los colores corporativos e
            imágenes para completar los flujos. Todo esto es de libre
            disposición para que el destinatario lo use o no si lo cree
            conveniente.
          </p>
          <h3>Duración</h3>
          <p>Máximo 1 semana (7 días naturales) desde el recibo de la misma.</p>

          <h4 className="bye-bye">
            Sin más que añadir, ¡mucha suerte! y cualquier duda, mandanos tus
            dudas al correo que te han dado. =)
          </h4>
        </main>
      </div>
    );
  }
}

export default App;
