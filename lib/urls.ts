const urls = {
  home: () => `/`,
  about: () => `/about`,
  authors: () => `/authors`,
  author: (id: string) => `/author/${id}`,
  createAccount: () => `/sign-up`,
  myProfile: () => `/my-profile`,
  myBooks: () => `/my-books`,
  books: () => `/books`,
  book: (id: string) => `/book/${id}`,
  createBook: (id: string) => `/create-book`,
  editBook: (id: string) => `/create-book/${id}`,
};

export default urls;
