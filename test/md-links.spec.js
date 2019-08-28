//Por ahora esta sera la funcion que nos diga si una ruta apunta a un archivo .md o no
const mdLinks = require('../');


describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks('../README.md')).toBe(true);
  });

  it('should return false for an invalid file', () => {
    expect(mdLinks('../index.js')).toBe(false);
  });
});
