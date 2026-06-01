# RPG-Forge

Uma aplicação web moderna para criar e gerenciar fichas de personagens de **Dungeons & Dragons**, com foco em acessibilidade, inclusão e experiência do usuário.

## 🎯 Sobre o Projeto

**RPG-Forge** é uma ferramenta interativa que permite criar, editar e gerenciar personagens de D&D 5e de forma intuitiva e acessível. O projeto faz parte da disciplina de **Acessibilidade & Inclusão Digital** e tem o objetivo de ser um Recurso Educacional Aberto e Acessível (REA-A) demonstrando como construir aplicações web que são inclusivas para todos os usuários.

### ✨ Características Principais

- **Criação de Personagens**: Interface para definir todas as características de um personagem D&D 5e
- **Gerenciamento de Atributos**: Controle sobre habilidades (Força, Destreza, etc.), testes de resistência e perícias
- **Sistema de Combate**: Gerenciamento de Pontos de Vida, Classe de Armadura e ataques
- **Equipamento e Itens**: Rastreamento de equipamento e itens do personagem
- **Persistência de Dados**: Salvamento automático da ficha em armazenamento local
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **Tipagem TypeScript**: Código fortemente tipado para maior segurança e manutenibilidade

## 🏗️ Arquitetura do Sistema

### Estrutura de Pastas

```
src/
├── lib/
│   ├── accessibility/      # Utilitários e recursos de acessibilidade
│   ├── assets/            # Imagens e recursos estáticos
│   ├── components/
│   │   ├── ficha/         # Componentes da ficha de personagem
│   │   │   ├── CharacterSection.svelte      # Seção de dados básicos
│   │   │   ├── AbilitiesSection.svelte      # Habilidades (FOR, DES, CON, etc)
│   │   │   ├── AbilityCard.svelte           # Cartão individual de habilidade
│   │   │   ├── SavingThrowsSection.svelte   # Testes de resistência
│   │   │   ├── SkillsSection.svelte         # Perícias
│   │   │   ├── CombatSection.svelte         # Dados de combate
│   │   │   ├── HitPointsSection.svelte      # Pontos de vida
│   │   │   ├── AttacksSection.svelte        # Ataques
│   │   │   ├── EquipmentSection.svelte      # Equipamento
│   │   └── ui/            # Componentes de interface reutilizáveis
│   │       ├── CardSection.svelte           # Seção em forma de cartão
│   │       ├── CheckboxField.svelte         # Campo de seleção
│   │       ├── NumberField.svelte           # Campo numérico
│   │       ├── SelectField.svelte           # Seletor/dropdown
│   │       └── StatDisplay.svelte           # Exibição de estatísticas
│   ├── data/              # Dados estáticos do D&D 5e
│   │   ├── abilities.ts             # Definição das habilidades
│   │   ├── classes.ts               # Classes de personagem
│   │   ├── class-registry.ts        # Registro de classes com subclasses
│   │   ├── class-options.ts         # Opções por classe
│   │   ├── species.ts               # Raças (species)
│   │   ├── backgrounds.ts           # Antecedentes
│   │   ├── skills.ts                # Perícias
│   │   └── default-character.ts     # Personagem padrão inicial
│   ├── stores/            # Armazenamento reativo de estado
│   │   └── character.svelte.ts      # Store global do personagem
│   ├── types/             # Definições de tipos TypeScript
│   │   ├── character.ts             # Interface do personagem
│   │   ├── ability.ts               # Tipo de habilidade
│   │   ├── attack.ts                # Interface de ataque
│   │   ├── equipment.ts             # Interface de equipamento
│   │   ├── class.ts                 # Interface de classe
│   │   ├── class-definition.ts      # Definição de classe
│   │   ├── saving-throw.ts          # Interface de teste de resistência
│   │   ├── skill-id.ts              # IDs de perícias
│   │   └── skill.ts                 # Interface de perícia
│   └── utils/             # Funções utilitárias
│       ├── attacks.ts               # Lógica de ataques
│       ├── character-sync.ts        # Sincronização de dados
│       ├── combat.ts                # Cálculos e lógica de combate
│       ├── dnd.ts                   # Funções genéricas do D&D 5e
│       ├── hit-points.ts            # Cálculos de pontos de vida
│       ├── saving-throws.ts         # Cálculos de testes de resistência
│       ├── skills.ts                # Cálculos de perícias
│       └── storage.ts               # Persistência em localStorage
└── routes/                # Rotas da aplicação (SvelteKit)
    ├── +layout.svelte              # Layout principal
    ├── +page.svelte                # Página principal (editor de ficha)
    └── layout.css                  # Estilos globais com paleta colorblind-safe para atualizações futuras
```

### Fluxo de Dados

```
Usuário (Interface)
        ↓
Components (Svelte)
        ↓
Character Store ($state)
        ↓
Utilities (cálculos e lógica)
        ↓
Storage (localStorage)
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Svelte 5.55.2**: Framework reativo para construção da UI
- **SvelteKit 2.57.0**: Framework full-stack para roteamento e SSR
- **TypeScript 6.0.2**: Tipagem estática para segurança
- **Tailwind CSS 4.2.2**: Utilitários CSS para estilização
- **Vite 8.0.7**: Build tool rápido e moderno

### Componentes e Bibliotecas
- **bits-ui**: Componentes acessíveis e sem estilo
- **lucide-svelte**: Ícones SVG modernos

### Desenvolvimento
- **svelte-check**: Verificação de tipos para componentes Svelte
- **Tailwind CSS Vite**: Plugin de integração com Vite
- **scripts/check-contrast.cjs**: Script de verificação de contraste para garantir que a paleta colorblind-safe mantenha boa legibilidade

## 📦 Tipos de Dados Principais

### Character (Personagem)
```typescript
interface Character {
  id: string;                    // ID único
  name: string;                  // Nome do personagem
  class: CharacterClass | null;  // Classe do personagem
  subclass: string | null;       // Subclasse/Arquétipo
  species: string | null;        // Raça
  background: string | null;     // Antecedente
  level: number;                 // Nível (1-20)
  xp: number;                    // Experiência
  inspiration: boolean;          // Possui inspiração?
  armorClass: number;            // Classe de Armadura
  speed: number;                 // Velocidade em pés
  hitPoints: HitPoints;          // Pontos de vida
  abilities: AbilityScores;      // Habilidades (FOR, DES, CON, SAB, INT, CAR)
  skillProficiencies: SkillId[]; // Perícias com proficiência
  attacks: Attack[];             // Ataques disponíveis
  equipment: EquipmentItem[];    // Equipamento e itens
}
```

### Habilidades
- **Força (FOR)**: Ataques físicos e testes de força
- **Destreza (DES)**: Iniciativa, Classe de Armadura, ataques à distância
- **Constituição (CON)**: Pontos de vida e resistências
- **Inteligência (INT)**: Perícias de conhecimento
- **Sabedoria (SAB)**: Percepção e resistências mentais
- **Carisma (CAR)**: Interações sociais e magias

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

```bash
# Clonar o repositório
git clone <https://github.com/Eduardo-Prates/rpg-forge.git>
cd rpg-forge

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Abrir automaticamente no navegador
npm run dev -- --open
```

O servidor estará rodando em `http://localhost:5173`


## 💾 Armazenamento e Persistência

O projeto utiliza **localStorage** do navegador para persistência de dados. Cada alteração no personagem é salva automaticamente.

- **Chave**: `rpg-forge-character`
- **Formato**: JSON serializado
- **Capacidade**: ~5-10MB por domínio (depende do navegador)

## 🎮 Funcionalidades Detalhadas

### Seção de Personagem
- Nome, classe, subclasse, raça e antecedente
- Nível e experiência
- Inspiração
- Dados básicos de combate

### Habilidades e Testes de Resistência
- Visualização e edição de modificadores de habilidades
- Cálculo automático de bônus
- Testes de resistência com proficiências

### Perícias
- 18 perícias diferentes do D&D 5e
- Aplicação automática de proficiências
- Cálculo de modificadores

### Combate
- Gerenciamento de Pontos de Vida (atuais, máximos, temporários)
- Dados de vida (Hit Dice)
- Classe de Armadura
- Velocidade de movimento

### Ataques
- Criação e edição de ataques
- Cálculos automáticos de bônus
- Dano e tipos de dano

### Equipamento
- Rastreamento de itens
- Peso e encargo
- Itens especiais e mágicos

## 🔄 Estrutura Reativa com Svelte 5

O projeto utiliza os novos `$state` runes do Svelte 5 para reatividade:

```typescript
// Store reativo
export const character = $state<Character>(
  structuredClone(defaultCharacter)
);

// Componentes se atualizam automaticamente quando o estado muda
```

## 📱 Responsividade

A interface foi construída com **Tailwind CSS** e é completamente responsiva, funcionando bem em:
- Dispositivos móveis
- Tablets
- Desktops

## 🔒 Segurança

- Código fortemente tipado com TypeScript
- Validação de tipos em tempo de desenvolvimento
- Sem dependências de terceiros para lógica crítica
- Dados armazenados localmente (sem servidor)

## 🌐 Acessibilidade e Inclusão

Este projeto demonstra melhores práticas de acessibilidade:
- Componentes acessíveis (bits-ui)
- Estrutura semântica HTML
- Suporte a navegação por teclado
- Contraste adequado de cores com paleta colorblind-safe no `src/routes/layout.css`
- Verificação de contraste automática via `scripts/check-contrast.cjs`
- Suporte para leitores de tela
- Pasta `accessibility/` reservada para expansão de recursos futuros relacionados a acessibilidade

**Última atualização**: Junho de 2026
