const links = document.querySelector('#links')
const buttonProjects = document.querySelector('[data-js="button-projects"]')

const projects = [
  {name: 'Cadastrar endereço', img: './img/viacep.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'API'], text: 'Projeto desenvolvido com intuito de conseguir completar um formulário de endereço no preenchimento do cep, consumindo a API ViaCep.', link: 'https://paulojrc52.github.io/cep_autocomplet/'},
  {name: 'Linktree', img: './img/linktree.PNG', tec: ['JavaScript', 'CSS3', 'HTML5', 'API Static Forms'], text: 'Projeto de portifolio desenvolvido com JavaScript, HTML e CSS.', link: 'https://shamantattoo.netlify.app/'},
  {name: 'Landing Page', img: './img/landing-page.PNG', tec: ['JavaScript', 'CSS3', 'HTML5', 'API frontend'], text: 'Projeto de Landing Page criado baseado em um projeto de teste de uma empresa.', link: 'https://paulojrc52.github.io/landing_page-teste/'},
  {name: 'Conversor USD para BRL', img: './img/conversor.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'API'], text: 'Projeto desenvolvido com a ideia de criar um conversor de Dólar para Real, consumindo a API AwesomeAPI.', link: 'https://usd-brl.programmerbr.website/'},
  {name: 'Simulador de Juros Composto', img: './img/simulador.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'API'], text: 'Projeto desenvolvido com a ideia de criar um simulador de juros consumindo a API mathjs.', link: 'https://github.com/paulojrc52/juros_compostos/'},
  {name: 'Tela de captura de E-mails', img: './img/tela-capturas.PNG', tec: ['CSS3', 'HTML'], text: 'Tela de captura de e-mails com integração em Mailchimp.', link: 'https://paulojrc52.github.io/tela-de-captura/'},
  {name: 'Digital Tech', img: './img/digital-tech.PNG', tec: ['EJS', 'CSS3', 'Express.js'], text: 'Esse projeto foi desenvolvido seguindo a ideia de estudar sobre servidores e me aprofundar mais no backend usando o "express.js".', link: 'https://github.com/paulojrc52/pagina-digital-tech'},
  {name: 'Lista de Tarefas', img: './img/lista-tarefa.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'], text: 'Projeto criado com JavaScript puro usando o armazenamento do local storage', link: 'https://paulojrc52.github.io/to_do_list/'},
  {name: 'Quiz interativo', img: './img/quiz.PNG', tec: ['JavaScript', 'Bootstrap'], text: 'Quiz interativo criado com JavaScript puro e bootstrap', link: 'https://quiz-portugues-portugal.netlify.app/'},
  {name: 'AnunXiar', img: './img/anunxiar.PNG', tec: ['JavaScript', 'NextJS', 'ReactJS', 'Material-UI', 'Next-auth', 'React-dropzone', 'Axios', 'Formik', 'Bcrypt', 'MongoDB', 'Mongoose', 'Yup'], text: 'Projeto desenvolvido com intuito de conseguir completar uma aplicação do começo ao fim utilizando JavaScript acompanhado de suas mais tradicionais Libs...', link: 'https://github.com/paulojrc52/anunxiar'},
  {name: 'WORLD PHONE LIST (W.P.L)', img: './img/WPL.png', tec: ['Flask', 'Python', 'HTML5', 'CSS3', 'SQLite3'], text: 'A ideia para o desenvolvimento deste projeto foi que ele pudesse ajudar familiares que perderam o contato com outros familiares, pois a aplicação só entrega o que é prometido se no momento da pesquisa você souber o nome completo da pessoa que procura... E claro, se os dois já estiverem cadastrados na aplicação.', link: 'https://github.com/paulojrc52/World-Phone-List/'},
]

buttonProjects.addEventListener('click', () => {
  buttonProjects.classList.add('hidden')
  projects.map(({name, img, tec, text, link }) => {
      links.innerHTML += `
        <li>
          <a href=${link}>
            <img src=${img} alt=${name}><br>
            ${name}
            <span>${text}</span> 
            <span>Tecnologias:</span>
            <span>
                ${tec.map(tec => ` ${tec}`)}
            </span>
          </a>
        </li>
      `
  })

})

const typing = document.querySelector('[data-js="typing"]')

const messages = [
  'Olá, me chamo Paulo Junior', 
  'sou desenvolvedor de software', 
  'trabalho com a linguagem JavaScript', 
  'abaixo você encontra',
  'redes sociais',
  'alguns projetos', 
  'e minhas habilidades'
]

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = () => {
  const shouldTypeFirstMsg = messageIndex === messages.length

  if(shouldTypeFirstMsg) {
    messageIndex = 0
  }

  currentMessage = messages[messageIndex]
  currentCharacters = currentMessage.slice(0, characterIndex++)
  typing.textContent = currentCharacters

  const shouldChangeMessage = currentCharacters.length === currentMessage.length
  if (shouldChangeMessage) {
    messageIndex++ 
    characterIndex = 0
  }
}

setInterval(type, 250)

