import poll from "../../database/connection.js";

const resolvers = {
  Query: {
    getAllTasks: async () => {
      try {
        const [data] = await poll.query("SELECT * FROM Task");

        return data;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getTaskId(_, { id }) {
      const [rows] = await poll.query("SELECT * FROM Task WHERE id = (?)", [
        Number(id),
      ]);
      console.log(rows[0]);
      return rows[0];
    },
  },

  Mutation: {
    // create a new task in the database and response with she
    createTask: async (_, args) => {
      const { title, description } = args.task;

      // create a new task
      const [rows] = await poll.query(
        `INSERT INTO Task (title, description) VALUES (?, ?)`,
        [title, description]
      );

      // With ID, search in the database the task
      const id = rows.insertId;
      const [result] = await poll.query(`SELECT * FROM Task WHERE id = (?)`, [
        Number(id),
      ]);
      console.log(result[0]);
      return result[0];
    },
    async deleteTask(_, { id }) {
      const [rows] = await poll.query(`DELETE FROM Task WHERE id = (?)`, [id]);

      if (rows.affectedRows !== 1) {
        return `Could not delete the task`;
      }

      return "Task deleted successfully";
    },
    async updateTask(_, { id, task }) {
      const { title, description } = task;

      // update value if is not null
      const [rows] = await poll.query(
        `UPDATE Task SET title = IFNULL(?,title), description = IFNULL(?,description) WHERE id = (?)`,
        [title, description, Number(id)]
      );

      if (rows.affectedRows !== 1) {
        return "Update Task failed";
      }

      // search value for the validate ID
      const [newRows] = await poll.query(`SELECT * FROM Task WHERE id = (?)`, [
        Number(id),
      ]);
      return newRows[0];
    },
  },
};

export default resolvers;
