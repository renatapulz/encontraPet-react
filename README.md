# 🐾  Encontra Pet

Aplicação **React + Vite** desenvolvida como MVP académico para o **Senac**, na disciplina **Projeto Integrador: Análise de Soluções Integradas para Organizações**.

O projeto simula o fluxo completo de reencontro entre pets perdidos e seus tutores, permitindo cadastro de animais, visualização de ocorrências, sinalização de achados e confirmação simulada com retorno ao tutor.  

## Tecnologias

- React 
- Vite  
- Tailwind CSS  
- Framer Motion (animações)

## 🎨 Protótipo / Design

Layout desenvolvido previamente na etapa I do projeto no Figma.

🔗 **Figma:** https://www.figma.com/design/H54mqurWCUrLnVk7Dq3Y5t/EncontraPet?node-id=25-100

---
## 🎯 Objetivo do MVP

Simular de forma funcional o fluxo de ponta a ponta:

1. Um tutor cadastra um animal perdido.
2. O animal aparece na listagem pública.
3. Um usuário encontra o pet, envia evidências e contato.
4. O tutor confirma o retorno.
5. O usuário recebe agradecimento e, se aplicável, uma recompensa via PIX.

O fluxo de confirmação é simulado com delay de 5 segundos.

## 📌 Funcionalidades

- Cadastro de pets perdidos (tutor).
- Listagem pública com imagem, descrição e indicador de recompensa.
- Modal para quem encontrou o pet:
  - Envio de foto
  - Dados de contato
  - Tipo de chave PIX (e-mail, CPF ou aleatória)
- Fluxo simulado de verificação:
  - **Status "Verificando" → após 5s → "Encontrado"**
- Mensagens dinâmicas de confirmação, com ou sem recompensa.
- Responsividade.
- Persistência local (LocalStorage).

## ▶️ Como Executar o Projeto
Pré-requisitos: Node.js (v18+), npm ou yarn.  

### 1. Clone o repositório
```bash
git clone https://github.com/renatapulz/encontraPet-react
cd encontra-pet
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Iniciar dev server
```bash
npm run dev
```

## Integrantes

- DANILO AUGUSTO FELIX
- RICHARD CARVALHO VIANA
- HASSAN DIAB
- MIGUEL GONCALVES LEITE
- RENATA MARTINS DANTAS PULZ

---

## 🎬 Vídeo demonstrativo: 

🔗 https://youtu.be/jW5W3Yl2y68

---

📝 Projeto desenvolvido para disciplina Projeto Integrador — Senac.
