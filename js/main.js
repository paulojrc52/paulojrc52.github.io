const links = document.querySelector('#links')

const projects = [
  {name: 'Cadastrar endereço', img: './img/viacep.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'API'], text: 'Projeto desenvolvido com intuito de conseguir completar um formulário de endereço no preenchimento do cep, consumindo a API ViaCep.', link: 'https://paulojrc52.github.io/cep_autocomplet/'},
  {name: 'WORLD PHONE LIST (W.P.L)', img: './img/WPL.png', tec: ['Flask', 'Python', 'HTML5', 'CSS3', 'SQLite3'], text: 'A ideia para o desenvolvimento deste projeto foi que ele pudesse ajudar familiares que perderam o contato com outros familiares, pois a aplicação só entrega o que é prometido se no momento da pesquisa você souber o nome completo da pessoa que procura... E claro, se os dois já estiverem cadastrados na aplicação.', link: 'https://github.com/paulojrc52/World-Phone-List/'},
  {name: 'Linktree', img: './img/linktree.PNG', tec: ['JavaScript', 'CSS3', 'HTML5', 'API Static Forms'], text: 'Projeto de portifolio desenvolvido com JavaScript, HTML e CSS.', link: 'https://paulojrc52.github.io/linktreeguilherme/'},
  {name: 'Conversor USD para BRL', img: './img/conversor.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'API'], text: 'Projeto desenvolvido com a ideia de criar um conversor de Dólar para Real, consumindo a API AwesomeAPI.', link: 'https://paulojrc52.github.io/conversor_dolar-real/'},
  {name: 'Simulador de Juros Composto', img: './img/simulador.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'API'], text: 'Projeto desenvolvido com a ideia de criar um simulador de juros consumindo a API mathjs.', link: 'https://github.com/paulojrc52/juros_compostos/'},
  {name: 'Tela de captura de E-mails', img: './img/tela-capturas.PNG', tec: ['CSS3', 'HTML'], text: 'Tela de captura de e-mails com integração em Mailchimp.', link: 'https://paulojrc52.github.io/tela-de-captura/"'},
  {name: 'Digital Tech', img: './img/digital-tech.PNG', tec: ['EJS', 'CSS3', 'Express.js'], text: 'Esse projeto foi desenvolvido seguindo a ideia de estudar sobre servidores e me aprofundar mais no backend usando o "express.js".', link: 'https://github.com/paulojrc52/pagina-digital-tech'},
  {name: 'Lista de Tarefas', img: './img/lista-tarefa.PNG', tec: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'], text: 'Projeto criado com JavaScript puro usando o armazenamento do local storage', link: 'https://paulojrc52.github.io/to_do_list/'},
  {name: 'Quiz interativo', img: './img/quiz.PNG', tec: ['JavaScript', 'Bootstrap'], text: 'Quiz interativo criado com JavaScript puro e bootstrap', link: 'https://quiz-portugues-portugal.netlify.app/'},
]


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

