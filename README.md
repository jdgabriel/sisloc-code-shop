# RentCar - Sisloc

## Technologies
- NextJS
- NestJS
- Docker
- Postgres
- NodeJS (v18+)

## How to run?
<p>Required `pnpm` and `docker` previews installed.</p>
<p>Execute all scripts in root folder</p>

1. First install all packages
```bash
pnpm install
```

2. First run setup database
```bash
pnpm dev:server:database
```

3. Deploy prisma migrations
```bash
pnpm dev:server:prisma
```

4. Run `server`
```bash
pnpm dev
```

5. Run `client`
```bash
pnpm dev:client
```

6. Finally, you can see in localhost
```bash
Client: http://localhost:3001/
Server: http://localhost:3000/
```

## Requirements
- [x] Fetch all cars
- [x] Get unique car
- [x] Add car in cart
- [x] Remove car at cart
- [x] Update car (amount and rend mode)
- [ ] Authenticate

### Author
Gabriel Duarte <jds.gabrielduarte@gmail.com>