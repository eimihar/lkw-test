export default function ({next, store}) {
  if (!store.getters.isLoggedIn)
    return next({
      name: 'login'
    });

  return next();
}