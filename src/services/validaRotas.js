/**
 * A função apenas verifica se existe um token, ou nesse caso, um usuário logado
 * com dados salvos no localStorage, e retorna true ou false.
 * Se retornar true, é porque o usuário está logado e term permissão para 
 * acessar as telas
 */
export const isLogin = () => {
  if(localStorage.getItem("usuario")){
    return true;
  } else {
    return false;
  }
}