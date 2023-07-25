import { gql } from "apollo-server-express";

const typeDefs = gql`
  # simil to description of one table in mysql
  type Task {
    id: ID
    title: String
    description: String
    date: String
  }

  type Query {
    # all data
    getAllTasks: [Task]
    # search data for ID
    getTaskId(id: ID): Task
  }

  input TaskInput {
    title: String
    description: String
  }

  type Mutation {
    # create new task
    createTask(task:TaskInput): Task
    deleteTask(id: ID!): String!
    updateTask(id: ID!,task: TaskInput): Task
  }
`;
export default typeDefs;
