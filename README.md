# Nuxt 3 Autenticação e Roles

Este projeto é um sistema web construído com Nuxt 3, focado em autenticação de usuário e controle de acesso baseado em roles. Ele fornece uma estrutura robusta para restringir o acesso a páginas e funcionalidades com base nos diferentes perfis de usuário cadastrados.

## Funcionalidades

* **Autenticação de Usuário:**
    * Registro e login de usuários com senhas criptografadas.
    * Gerenciamento de sessão seguro com cookies.
* **Controle de Acesso por Roles:**
    * Definição de diferentes roles para usuários (administrador, editor, usuário comum, etc.).
    * Restrição de acesso a páginas e funcionalidades com base nos roles atribuídos a cada usuário.
    * Gerenciamento dinâmico de roles e permissões.
* **Backend Integrado:**
    * API construída diretamente no Nuxt 3 para comunicação com o frontend.
    * Banco de dados SQLite para armazenamento de dados do usuário.
* **Interface de Administração:**
    * Painel de controle para gerenciar usuários e roles.
* **Segurança:**
    * Proteção contra ataques CSRF e XSS.
    * Validação de dados de entrada.

## Tecnologias Utilizadas

* **Nuxt 3:** Framework Vue.js para aplicações web universais.
* **Node.js/Nitro:** Runtime JavaScript para o backend.
* **SQLite:** Banco de dados relacional leve.
* **bcryptjs:** Biblioteca para criptografia de senhas.
* **jsonwebtoken:** Biblioteca para geração de tokens JWT.
* **cookie-parser:** Middleware para análise de cookies.