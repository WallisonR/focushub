<template>
  <!-- Container principal das configurações -->
  <div class="flex flex-col gap-6 w-full max-w-md mx-auto" id="config-main">
    <!-- Seção: Usuário -->
    <section class="rounded-lg p-4 flex flex-col gap-2" :style="{ borderColor: 'var(--accent)' }" id="config-user-section">
      <h2 class="text-lg font-bold mb-2" :style="{ color: 'var(--text-main)' }" id="config-user-title">
        <font-awesome-icon icon="fa-solid fa-user-gear" class="mr-2" />
        Perfil
      </h2>
      <label class="text-xs text-gray-400 mb-1" id="config-user-label">Seu nome</label>
      <div class="flex gap-2 items-center" id="config-user-input-group">
        <input
          v-model="nomeLocal"
          class="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm text-gray-100 flex-1"
          placeholder="Digite seu nome"
          @keyup.enter="salvarNome"
          id="config-user-input"
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition text-xs font-bold"
          @click="salvarNome"
          id="config-user-save-btn"
        >
          Salvar
        </button>
      </div>
      <span v-if="nomeSalvo" class="text-green-400 text-xs mt-1" id="config-user-saved-msg">Nome atualizado!</span>
    </section>

    <!-- Seção: Tema -->
    <section class="rounded-lg p-4 flex flex-col gap-2" id="config-theme-section">
      <h2 class="text-lg font-bold mb-2" :style="{ color: 'var(--text-main)' }" id="config-theme-title">
        <font-awesome-icon icon="fa-solid fa-palette" class="mr-2" />
        Tema
      </h2>
      <div class="grid grid-cols-2 gap-3" id="config-theme-list">
        <button
          v-for="theme in themes"
          :key="theme.value"
          class="rounded-lg p-2 flex flex-col items-center border-2 transition"
          :style="{
            borderColor: currentTheme === theme.value ? 'var(--accent)' : theme.border,
            background: theme.preview,
            color: currentTheme === theme.value ? 'var(--accent)' : '#fff',
            opacity: currentTheme === theme.value ? 1 : 0.85
          }"
          @click="setTheme(theme.value)"
          :id="`config-theme-btn-${theme.value}`"
        >
          <span class="font-bold text-xs mb-1 flex items-center gap-1" :id="`config-theme-label-${theme.value}`">
            {{ theme.label }}
            <font-awesome-icon
              v-if="currentTheme === theme.value"
              icon="fa-solid fa-check"
              class="text-green-300 ml-1"
              :id="`config-theme-check-${theme.value}`"
            />
          </span>
        </button>
      </div>
      <div class="mt-2 text-xs text-gray-400 text-center" id="config-theme-info">
        O tema escolhido será aplicado em todo o ambiente e salvo para as próximas visitas.
      </div>
    </section>

    <!-- Seção: Documentação -->
    <section class="rounded-lg p-4 flex flex-col gap-2" id="config-doc-section">
      <h2 class="text-lg font-bold mb-2" :style="{ color: 'var(--text-main)' }" id="config-doc-title">
        <font-awesome-icon icon="fa-solid fa-book" class="mr-2" />
        Documentação
      </h2>
      <div class="flex gap-2 mb-3" id="config-doc-tabs">
        <button
          v-for="tab in docTabs"
          :key="tab"
          @click="docTab = tab"
          class="px-3 py-1 rounded-t font-semibold transition text-xs"
          :class="docTab === tab
            ? 'bg-pink-600 text-white'
            : 'bg-gray-800 text-pink-200 hover:bg-gray-700'"
          :id="`config-doc-tab-btn-${tab}`"
        >
          {{ tab }}
        </button>
      </div>
      <div class="bg-gray-900 rounded-b p-3 text-sm min-h-[120px]" id="config-doc-content">
        <!-- Conteúdo da documentação por aba -->
        <div v-if="docTab === 'Introdução'" id="config-doc-intro">
          <p>
            Bem-vindo à documentação do <b>FocusHub</b>! Aqui você encontra informações sobre como utilizar cada funcionalidade do sistema para aumentar sua produtividade.
          </p>
          <ul class="list-disc ml-5 mt-2" id="config-doc-intro-list">
            <li>Abra ferramentas pelo dock na parte inferior da tela (desktop) ou pelo menu lateral (mobile).</li>
            <li>No desktop, arraste e organize as janelas conforme sua preferência. No mobile, navegue entre as ferramentas pelo menu.</li>
            <li>Personalize o ambiente com temas e extensões.</li>
            <li>Gerencie tarefas, notas, timers, pomodoro, snippets, checklist de deploy, lembretes de água, player de música, gerador de dados e muito mais em um só lugar.</li>
            <li>Seu progresso e configurações são salvos automaticamente no navegador.</li>
          </ul>
        </div>
        <div v-else-if="docTab === 'Janelas'" id="config-doc-windows">
          <ul class="list-disc ml-5" id="config-doc-windows-list">
            <li><b>Timer:</b> Cronômetro simples para medir tempo de atividades. Permite iniciar, pausar e resetar. O timer continua mesmo se a janela for fechada.</li>
            <li><b>To-Do List:</b> Lista de tarefas com salvamento automático no seu navegador. Marque tarefas como concluídas ou exclua-as.</li>
            <li><b>Notas Rápidas:</b> Bloco para anotações rápidas, ideias ou lembretes.</li>
            <li><b>Snippets de Código:</b> Salve e consulte trechos de código úteis. Integração opcional com Gists do GitHub.</li>
            <li><b>Checklist de Deploy:</b> Lista de verificação para garantir um deploy seguro. Personalize e salve seus próprios itens.</li>
            <li><b>Pomodoro:</b> Técnica de produtividade baseada em ciclos de foco e pausa. O ciclo continua mesmo se a janela for fechada.</li>
            <li><b>Lembrete de Água:</b> Defina intervalos para ser lembrado de beber água. O lembrete continua funcionando mesmo se a janela for fechada.</li>
            <li><b>Busca:</b> Pesquise rapidamente entre suas notas, tarefas e códigos.</li>
            <li><b>Temas:</b> Personalize as cores e o visual do FocusHub.</li>
            <li><b>Player de Música:</b> Ouça músicas para relaxar ou focar durante o trabalho.</li>
            <li><b>Gerador de Dados:</b> Gere dados fake para testes de desenvolvimento.</li>
          </ul>
        </div>
        <div v-else-if="docTab === 'Sobre'" id="config-doc-about">
          <p class="mb-2">
            <b>FocusHub</b> é um ambiente digital integrado para desenvolvedores, criado para centralizar ferramentas essenciais do dia a dia em um só lugar. O objetivo é proporcionar praticidade, organização e foco, reunindo recursos como listas de tarefas, notas rápidas, timer, pomodoro, snippets de código, personalização de temas e muito mais.
          </p>
          <p class="mb-2">
            O projeto foi desenvolvido utilizando <b>Vue.js</b> e <b>Tailwind CSS</b>, priorizando responsividade, usabilidade e uma experiência moderna.
          </p>
          <hr class="my-2 border-pink-400/30" id="config-doc-about-divider">
          <p>
            <b>Sobre o autor:</b><br>
            Meu nome é Wallison, sou desenvolvedor apaixonado por criar soluções reais que causam impacto na vida das pessoas. Gosto de experimentar novas tecnologias, compartilhar conhecimento e construir ambientes produtivos e agradáveis para todos.
          </p>
          <div class="mt-4 flex flex-col gap-2 text-sm" id="config-doc-about-links">
            <a href="https://github.com/WallisonR" target="_blank" class="hover:underline text-pink-300" id="config-doc-about-github">
              <font-awesome-icon icon="fa-brands fa-github" class="mr-1" />
              Meu GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  setTheme: Function,
  currentTheme: String,
  nome: String,
  setNome: Function
})

const nomeLocal = ref(props.nome)
const nomeSalvo = ref(false)

function salvarNome() {
  if (nomeLocal.value && nomeLocal.value.trim() !== '') {
    props.setNome(nomeLocal.value.trim())
    nomeSalvo.value = true
    setTimeout(() => (nomeSalvo.value = false), 1500)
  }
}

watch(() => props.nome, (novo) => {
  nomeLocal.value = novo
})

const themes = [
  {
    label: 'Padrão',
    value: 'theme-default',
    preview: 'linear-gradient(135deg, #1e293b 60%, #2563eb 100%)',
    border: '#2563eb'
  },
  {
    label: 'Dark',
    value: 'theme-dark',
    preview: 'linear-gradient(135deg, #111827 60%, #374151 100%)',
    border: '#374151'
  },
  {
    label: 'Solarized',
    value: 'theme-solarized',
    preview: 'linear-gradient(135deg, #002b36 60%, #b58900 100%)',
    border: '#b58900'
  },
  {
    label: 'Dracula',
    value: 'theme-dracula',
    preview: 'linear-gradient(135deg, #282a36 60%, #bd93f9 100%)',
    border: '#bd93f9'
  },
  {
    label: 'Gruvbox',
    value: 'theme-gruvbox',
    preview: 'linear-gradient(135deg, #282828 60%, #fabd2f 100%)',
    border: '#fabd2f'
  },
  {
    label: 'Nord',
    value: 'theme-nord',
    preview: 'linear-gradient(135deg, #2e3440 60%, #88c0d0 100%)',
    border: '#88c0d0'
  },
  {
    label: 'Monokai',
    value: 'theme-monokai',
    preview: 'linear-gradient(135deg, #272822 60%, #f92672 100%)',
    border: '#f92672'
  },
  {
    label: 'One Dark',
    value: 'theme-onedark',
    preview: 'linear-gradient(135deg, #282c34 60%, #61afef 100%)',
    border: '#61afef'
  },
  {
    label: 'Night Owl',
    value: 'theme-nightowl',
    preview: 'linear-gradient(135deg, #011627 60%, #82aaff 100%)',
    border: '#82aaff'
  },
  {
    label: 'Palenight',
    value: 'theme-palenight',
    preview: 'linear-gradient(135deg, #292d3e 60%, #c792ea 100%)',
    border: '#c792ea'
  }
]

function setTheme(theme) {
  if (props.setTheme) props.setTheme(theme)
}

const docTabs = ['Introdução', 'Janelas', 'Sobre']
const docTab = ref('Introdução')
</script>