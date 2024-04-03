const urls = {
  home: () => "/",
  demo: () => "/demo",
  authors: () => "/authors",
  author: (id: string) => `/authors/${id}`,
  books: () => "/books",
  book: (id: string) => `/books/${id}`,
};

export default urls;
