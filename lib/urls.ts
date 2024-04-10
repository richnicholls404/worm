const urls = {
  home: () => `/`,
  about: () => `/about`,
  authors: () => `/authors`,
  author: (id: string) => `/author/${id}`,
  createAuthor: () => `/author-profile`,
  editAuthor: () => `/author-profile`,
  books: () => `/books`,
  book: (id: string) => `/book/${id}`,
  createBook: (id: string) => `/create-book`,
  editBook: (id: string) => `/create-book/${id}`,
};

export default urls;
