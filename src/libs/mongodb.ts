import { connect as dbConnect, disconnect as dbDisconnect, connection } from 'mongoose'
//Facilta a conexao do Node com banco

//Sempre vai chamar essa conexão antes de fazer a manipulação no banco
const connect = async () => {

  if (!process.env.DATABASE_URL) throw new Error('As variáveis de ambiente em .env não foram definidas para a conexão com o banco de dados!')

  const isAlreadyConnected = connection.readyState === 1  //fazendo a verificação se já esta conectato
  if (isAlreadyConnected) {
    return connection
  }

  const mongoConfig = {
    ignoreUndefined: true  //para não inserir undefined
  }

  return dbConnect(process.env.DATABASE_URL, mongoConfig)
} //Variavel de ambiente, DATABASE_URL, quem vem do arquivo env.

const disconnect = async () => {
  await dbDisconnect()
}

export {
  connect,
  disconnect
}
