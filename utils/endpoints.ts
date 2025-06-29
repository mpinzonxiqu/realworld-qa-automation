export const API = {
  auth: {
    register: '/users',
    login: '/users/login',
    currentUser: '/user',
  },
  articles: {
    all: '/articles',
    single: (slug: string) => `/articles/${slug}`,
    create: '/articles',
    favorite: (slug: string) => `/articles/${slug}/favorite`,
    comments: (slug: string) => `/articles/${slug}/comments`,
    deleteComment: (slug: string, commentId: number) => `/articles/${slug}/comments/${commentId}`,
  },
  profiles: {
    get: (username: string) => `/profiles/${username}`,
    follow: (username: string) => `/profiles/${username}/follow`,
  },
  tags: '/tags',
};
