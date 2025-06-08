# Luxo's Jalecos - Site Elegance

## Informações do Projeto

Este é um projeto de site estático desenvolvido com tecnologias modernas para a Luxo's Jalecos.

## Como editar este código?

Existem várias maneiras de editar sua aplicação.

**Desenvolvimento Local**

Para trabalhar localmente usando seu próprio IDE, você pode clonar este repositório e fazer push das alterações.

O único requisito é ter Node.js & npm instalados - [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Siga estes passos:

```sh
# Passo 1: Clone o repositório usando a URL Git do projeto.
git clone <URL_DO_SEU_REPOSITÓRIO>

# Passo 2: Navegue até o diretório do projeto.
cd luxos-jalecos-elegance-site

# Passo 3: Instale as dependências necessárias.
npm install

# Passo 4: Inicie o servidor de desenvolvimento com hot-reload.
npm run dev
```

**Desenvolvimento com Docker**

Para desenvolvimento com Docker, certifique-se de ter o Docker e Docker Compose instalados:

```sh
# Inicie o ambiente de desenvolvimento
docker-compose up

# Para parar o ambiente
docker-compose down
```

**Editar um arquivo diretamente no GitHub**

- Navegue até o(s) arquivo(s) desejado(s).
- Clique no botão "Edit" (ícone de lápis) no canto superior direito da visualização do arquivo.
- Faça suas alterações e faça commit das mudanças.

## Quais tecnologias são usadas neste projeto?

Este projeto é construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Como fazer o deploy deste projeto?

Para fazer o deploy na Hostinger, siga estes passos:

```sh
# 1. Instale as dependências
npm install

# 2. Gere o build estático
npm run build:static

# 3. Faça upload do conteúdo da pasta 'dist' para a pasta pública da Hostinger
```

O site será gerado como arquivos estáticos na pasta `dist/`, prontos para serem hospedados em qualquer servidor web estático.

## Posso conectar um domínio personalizado?

Sim, você pode!

Para conectar um domínio na Hostinger:
1. Acesse o painel de controle da Hostinger
2. Vá para "Domínios"
3. Siga as instruções para configurar seu domínio personalizado
