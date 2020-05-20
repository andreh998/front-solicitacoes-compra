/**
 * Essa função é responsável por verificar se o perfil do usuário tem acesso à
 * tela requerida
 * 
 * @param {*} props A função recebe todas as propriedades da rota, e partir da
 * propriedade location fará a validação
 * 
 * Retorna true ou falase se o usuário tem ou não permissão de acesso
 */
export const hasPermission = (props) => {

  /**
   * Capturo o perfil do usuário do localStorage
   * Capturo o pathname das propriedades
   */
  const perfil = localStorage.getItem("perfil");
  const telaRequest = props.location.pathname;
  /**
   * Como não tenho um banco de dados com os perfis e telas, defino manualmente
   * as telas que cada perfil tem permissão
   * 
   */
  const telasSolicitante = ['/', '/cadastro', '/consultar'];
  const telasAlmoxarife = ['/', '/solicitacoes', '/tratar'];
  const telasAdministrativo = ['/', '/consultar'];

  /**
   * Faço a verificação e retorno true ou false
   */
  switch(perfil) {
    case 'solicitante':
      return telasSolicitante.includes(telaRequest) ? true : false
    case 'almoxarife':
      return telasAlmoxarife.includes(telaRequest) ? true : false
    case 'admin':
      return telasAdministrativo.includes(telaRequest) ? true : false
  }

}