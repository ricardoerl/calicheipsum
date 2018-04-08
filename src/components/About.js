import React, { Component } from 'react';
import { Box } from 'rebass';

class About extends Component {
  render() {
    return (
      <Box>
        <h3>¿Qué es CalicheIpsum?</h3>
        <p>
          CalicheIpsum es un generador de texto Lorem Ipsum a lo salvadoreño.
        </p>
        <h3>¿Cómo funciona?</h3>
        <p>
          El generador hace una mezcla aleatoria entre el texto original de
          Lorem Ipsum y una lista de caliches proporcionados por la comunidad.
        </p>
        <h3>¿Puedo agregar un caliche?</h3>
        <p>
          Si, cualquier usuario puede agregar un caliche llenando este{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://airtable.com/shrzNXPnVFJCWCD2Y"
          >
            formulario
          </a>. Todos los caliches pasan por un proceso de revisión sencillo
          para filtrar spam.
        </p>
        <h3>¿A quién se le ocurre...?</h3>
        <p>
          CalicheIpsum es desarrollado por{' '}
          <a
            href="http://ricardoerl.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ricardo Ramírez
          </a>. El código fuente se encuentra disponible{' '}
          <a
            href="https://github.com/ricardoerl/calicheipsum"
            rel="noopener noreferrer"
            target="_blank"
          >
            aquí
          </a>.
        </p>
      </Box>
    );
  }
}

export default About;
