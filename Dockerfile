FROM node:16-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY .npmrc ./.npmrc
COPY package.json yarn.lock ./
RUN yarn install

COPY components ./components
COPY libs ./libs
COPY pages ./pages
COPY public ./public
COPY Room ./Room
COPY styles ./styles
COPY .env ./.env
COPY .eslintrc ./.eslintrc
COPY global.d.ts ./global.d.ts
COPY next-env.d.ts ./next-env.d.ts
COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY tsconfig.json ./tsconfig.json

EXPOSE 3000

CMD ["yarn", "dev"]