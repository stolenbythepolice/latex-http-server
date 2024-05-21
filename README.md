# LaTeX HTTP Server

## About

LaTeX HTTP Server is an HTTP server designed to compile LaTeX formulas into SVG images via an API. This server is compatible with the [immersion-presentation](https://www.npmjs.com/package/immersion-presentation) npm package, providing a simple and efficient way to render LaTeX formulas in web applications.

## Features

- Compiles LaTeX formulas to responsive SVG images.
- Supports custom LaTeX preamble to include additional packages.
- API-compatible with the immersion-presentation package.

## Requirements

To run this server, you need the following installed on your system:

- `latex` (LaTeX distribution)
- `preview` LaTeX package (usually included in standard LaTeX distributions)
- `dvisvgm` (tool to convert DVI files to SVG)

## Installation

1. Clone the repository:
2. Install the required npm packages:

```sh
npm install
```

## Usage

To start the server, run:

```sh
npm start
```

By default, the server will run on `http://localhost:3001` to be compatible with the `immersion-presentation` defaults.

### API Endpoint

#### `/latex`

- **Method**: GET
- **Query Parameters**:
  - `tex`: URL-encoded LaTeX formula (required).
  - `preamble`: URL-encoded array of LaTeX preamble strings (optional).

##### Example Request

```sh
curl "http://localhost:3001/latex?tex=%5Cfrac%7Ba%7D%7Bb%7D&preamble=%5Cusepackage%7Bamsmath%7D"
```

## Example

To request the SVG for a simple fraction formula:

```sh
curl "http://localhost:3001/latex?tex=%5Cfrac%7B1%7D%7B2%7D"
```

If you need to include additional LaTeX packages in the preamble:

```sh
curl "http://localhost:3001/latex?tex=%5Cfrac%7B1%7D%7B2%7D&preamble=%5Cusepackage%7Bamsmath%7D"
```

This will return an SVG representation of the formula `\frac{1}{2}` with the `amsmath` package included.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project utilizes the [tex2svg](https://www.npmjs.com/package/tex2svg) library for converting LaTeX to SVG.
