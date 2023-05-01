import { useNavigate } from 'react-router-dom';
function ErrorPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

  function handleLogin() {
    navigate('/login');
  }

  return (
    <div>
      <h1>Erro 404!</h1>
      <p>Esse erro pode ter ocorrido por diversos motivos, como por exemplo, a página solicitada não existir ou a necessidade de fazer login para acessá-la.</p>
      <p>Caso você já esteja logado, clique no botão a seguir para retornar à página inicial:</p>
      <button onClick={handleGoBack}>Voltar</button>
      <p>Caso ainda não esteja logado, clique no botão a seguir para fazer login:</p>
      <button onClick={handleLogin}>Fazer login</button>
    </div>
  );
}

export default ErrorPage;