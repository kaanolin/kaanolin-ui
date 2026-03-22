FROM node:20-alpine AS builder
WORKDIR /app

# Copy root workspace files
COPY package.json .npmrc ./
COPY higgs-ui-kit/packages/react/package.json higgs-ui-kit/packages/react/
COPY higgs-ui-kit/packages/utils/package.json higgs-ui-kit/packages/utils/
COPY higgs-ui-kit/packages/styles/package.json higgs-ui-kit/packages/styles/

# Install dependencies
RUN npm install --workspace=@kaanolin/react --workspace=@kaanolin/utils --workspace=@kaanolin/styles --include-workspace-root

# Copy source files
COPY higgs-ui-kit/ higgs-ui-kit/
COPY tsconfig.base.json ./

# Build Storybook
RUN npm run build-storybook --workspace=@kaanolin/react

# Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/higgs-ui-kit/packages/react/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
