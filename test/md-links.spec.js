//Por ahora esta sera la funcion que nos diga si una ruta apunta a un archivo .md o no
const mdLinks = require('../');


describe('mdLinks.chekingIfPathHasMdFiles', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks.chekingIfPathHasMdFiles('./README.md')).toBe(true);
  });

  it('should return false for an invalid file', () => {
    expect(mdLiks.chekingIfPathHasMdFiles('../index.js')).toBe(false);
  });
});
