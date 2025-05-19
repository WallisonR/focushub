# FocusHub

Um ambiente de produtividade para desenvolvedores, inspirado em um "desktop virtual", feito em Vue 3 + Vite.  
Tenha tudo o que precisa para organizar seu dia de trabalho em um só lugar: notas rápidas, checklist de deploy, snippets de código, player de música lo-fi, Pomodoro, temas customizáveis e muito mais!

## ✨ Funcionalidades

- **Janelas flutuantes**: Abra, mova, redimensione e feche apps como em um desktop.
- **Notas rápidas**: Sticky notes coláveis e editáveis.
- **To-Do List**: Gerencie suas tarefas do dia.
- **Checklist de Deploy**: Não esqueça nenhum passo antes de publicar!
- **Snippets de Código**: Salve, edite, pesquise e copie trechos de código com syntax highlight. Integração opcional com Gists do GitHub.
- **Player de Música Lo-Fi**: Playlist relaxante para foco, com controles completos.
- **Pomodoro**: Timer para ciclos de foco e pausa. O ciclo continua mesmo se a janela for fechada.
- **Timer**: Cronômetro simples para medir tempo de atividades. O timer continua mesmo se a janela for fechada.
- **Lembrete de Água**: Defina intervalos para ser lembrado de beber água. O lembrete continua funcionando mesmo se a janela for fechada.
- **Busca**: Pesquise rapidamente entre suas notas, tarefas e códigos.
- **Temas**: Vários temas escuros e claros, totalmente customizáveis.
- **Persistência**: Tudo salvo automaticamente no localStorage.
- **Barra de status e dock**: Acesso rápido a todos os apps.

## 🖥️ Acesse em

[DevRoom]()

## 🚀 Instalação

```bash
git clone https://github.com/WallisonR/focushub
cd dev-room
npm install
npm run dev
```

Acesse em [http://localhost:5173](http://localhost:5173)

## 🛠️ Tecnologias

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [highlight.js](https://highlightjs.org/) (para snippets)
- [Font Awesome](https://fontawesome.com/) (ícones)

## 🎨 Temas

Personalize o visual do Dev Room com temas como:
- Default
- Dark
- Solarized
- Dracula
- Gruvbox
- Nord

## 📁 Estrutura

```
src/
  components/
    Window.vue
    QuickNotes.vue
    TodoList.vue
    DeployChecklist.vue
    CodeSnippets.vue
    MusicPlayer.vue
    Pomodoro.vue
    Timer.vue
    WaterReminder.vue
    Search.vue
    Themes.vue
    ...
  App.vue
  style.css
```

## 📋 Licença

MIT

---

Feito para quem curte/trabalha com tecnologia e para quem gosta de produtividade e organização!
