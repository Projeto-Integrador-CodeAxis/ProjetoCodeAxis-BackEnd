import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from '../src/curso/entities/curso.entity';
import { Categoria } from '../src/categoria/entities/categoria.entities';
import { Usuario } from '../src/usuario/entities/usuario.entity';


describe('Testes dos Módulos Usuario e Auth (e2e)', () => {
  let token: any;
  let usuarioId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Curso, Categoria, Usuario],
          synchronize: true,
          dropSchema: true,
        }),
        AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  })

it("01 - Deve Cadastrar um novo Usuário", async () => {
  const resposta = await request(app.getHttpServer())
  .post('/usuarios/cadastrar')
  .send({
    nome: 'Root',
    usuario: 'root@root.com',
    senha: 'rootroot',
    foto: '-'
  })

  expect(201);
  usuarioId = resposta.body.id;
});

it('02 - Deve Autenticar Usuário (Login)', async () => {
  const resposta = await request(app.getHttpServer())
  .post('/usuario/logar')
  .send({
    usuario: 'root@root.com',
    senha: 'rootroot',
  });
  expect(200)
  token = resposta.body.token;
  console.log("Token: " + token);
})

it('03 - Não deve permitir a duplicação do Usuário', async () => {
  return request(app.getHttpServer())
  .post('/usuario/cadastrar')
  .send({
    nome: 'Root',
    usuario: 'root@root.com',
    senha: 'rootroot',
    foto: '-'
  })
  expect(400)
});

it('04 - Deve listar todos os Usuários', async () => {
  return request(app.getHttpServer())
  .get('/usuario/all')
  .set('Authorization', `${token}`)
  .send({})
  expect(200)
})

it('05 - Deve Atualizar um Usuário', async () => {
  return request(app.getHttpServer())
    .put('/usuarios/atualizar')
    .set('Authorization', `${token}`)
    .send({
      id: usuarioId,
      nome: 'Root Atualizado',
      usuario: 'root@root.com',
      senha: 'rootroot',
      foto: ' '
    })
    expect(200)
    });
});

