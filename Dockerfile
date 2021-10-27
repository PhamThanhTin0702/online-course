FROM node:alpine
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY ./public ./public
COPY --chown=nextjs:nodejs ./.next ./.next
COPY ./node_modules ./node_modules
COPY ./package.json ./package.json
COPY ./server.js ./server.js

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]