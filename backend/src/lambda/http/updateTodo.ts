import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'

import { updateTodo } from '../../businessLogic/todos'
import { UpdateTodoRequest } from '../../models/requests/UpdateTodoRequest'
import CustomError from '../../utils/CustomError'
import { createLogger } from '../../utils/logger'

const logger = createLogger('updateTodo')
   // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('updateTodo event', { event })

    const todoId = event.pathParameters.todoId
    const userId = event.requestContext.authorizer.principalId
    const updatedTodo: UpdateTodoRequest = JSON.parse(event.body)

    let statusCode
    let body = ''
    if (updateTodo.name == '' ){
      statusCode = 400
      body = JSON.stringify({ msg: "Please provide the body text" })
    } else{
      const res = await updateTodo(userId, todoId, updatedTodo)
      if (res instanceof CustomError) {
        statusCode = res.code
      } else {
        statusCode = 200
      }
    }

    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: body
    }
  }
)

handler.use(httpErrorHandler()).use(
  cors({
    credentials: true
  })
)
