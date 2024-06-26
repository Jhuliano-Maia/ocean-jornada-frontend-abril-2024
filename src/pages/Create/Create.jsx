import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate()

  async function onSubmit(event) {
    // Previne que o form saia da página
    event.preventDefault()

    // Pega os dados de name e image dos inputs
    const name = event.target.name.value
    const image = event.target.image.value

    // Monta um objeto com os dados da personagem
    const data = {
      name,
      image
    }

    // Transforma um objeto em uma string JSON
    const json = JSON.stringify(data)

    // Declara a URL da API para realização do POST
    const apiUrl = 'https://ocean-jornada-backend-abril-2024.onrender.com/item'

    // Cria e executa a requisição HTTP para o endpoint POST
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })

    // Navega para a página principal
    return navigate('/')
  }

  return (
    <>
        <div className="header">
            <Link to="/">Home</Link>
        </div>

        <div className="form">
            <form onSubmit={onSubmit}>
            <label htmlFor="name">Nome:</label><br />
            <input type="text" id="name" name="name" placeholder="Digite o nome" />
            <br />
            <br />

            <label htmlFor="image">Imagem:</label><br />
            <input type="text" id="image" name="image" placeholder="Digite a URL da imagem" />
            <br />
            <br />

            <input type="submit" value="Criar" />
            </form>
        </div>
    </>
  )
}