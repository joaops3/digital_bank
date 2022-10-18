
export const getToken = () => {
  const tokenStg = localStorage.getItem("user");
  if (!tokenStg) {
    return null;
  }
  const token = JSON.parse(tokenStg);
  return token ?? null;
};

export const setToken = (value: any) => {
  localStorage.setItem("user", JSON.stringify(value));
};
