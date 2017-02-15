import { ManejoDeArchivosPage } from './app.po';

describe('manejo-de-archivos App', function() {
  let page: ManejoDeArchivosPage;

  beforeEach(() => {
    page = new ManejoDeArchivosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
