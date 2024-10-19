# Proyecto Efex 4: Autocorrector con React y TypeScript

Este proyecto es una aplicación de autocorrección creada con **React** y **TypeScript**. La aplicación detecta palabras incorrectas en un área de texto y las reemplaza automáticamente por las correcciones adecuadas.

---

## Requisitos

- Node.js
- npm o yarn

## Instalación

1. Clona este repositorio:
   ```bash
   git clone [URL del repositorio]
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd project_efex_4
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
   O si prefieres usar **yarn**:
   ```bash
   yarn install
   ```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm start
```

O si prefieres **yarn**:

```bash
yarn start
```

El servidor de desarrollo se iniciará en [http://localhost:3000](http://localhost:3000), y la aplicación estará disponible en tu navegador.

---

## Estructura del Proyecto

```bash
project_efex_4/
├── public/
├── src/
│   ├── components/
│   │   ├── AutocorrectTextarea.tsx  # Componente principal del área de texto con autocorrección
│   │   └── AutocorrectTextarea.test.tsx  # Pruebas unitarias del componente
│   ├── App.tsx  # Componente principal de la aplicación
│   ├── index.tsx  # Punto de entrada de la aplicación
├── package.json  # Información del proyecto y dependencias
├── tsconfig.json  # Configuración de TypeScript
└── README.md
```

---

## Pruebas

Para ejecutar las pruebas unitarias, usa el siguiente comando:

```bash
npm test
```

O si prefieres **yarn**:

```bash
yarn test
```

Esto ejecutará las pruebas definidas en `AutocorrectTextarea.test.tsx`.

---

## Funcionalidad

El componente principal, `AutocorrectTextarea`, recibe un objeto `corrections` que contiene las palabras incorrectas como claves y sus correcciones como valores. A medida que el usuario escribe en el área de texto, la última palabra es verificada contra el objeto `corrections`, y si hay una coincidencia, la palabra es corregida automáticamente.

### Ejemplo de Objeto de Correcciones:

```typescript
const corrections = {
  'realy': 'really',
  'wierd': 'weird',
  'teh': 'the',
};
```

Cuando el usuario escribe `"realy "` (con un espacio al final), el texto será automáticamente reemplazado por `"really "`.

---

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o deseas sugerir mejoras, por favor, abre un **issue** o envía un **pull request**.

## Licencia

Este proyecto está bajo la licencia MIT.
