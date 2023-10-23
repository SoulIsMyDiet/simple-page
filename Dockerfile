# Użyj oficjalnego obrazu Node.js
FROM node:lts

# Utwórz katalog /app w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json do katalogu /app
COPY . .

# Zainstaluj zależności projektu
RUN npm install


# Port, na którym działa serwer React
EXPOSE 3000

# Uruchom serwer deweloperski React
CMD ["npm", "run", "dev"]
