/* Views databases and tables */
SHOW DATABASES;

/* Select database */
USE `api-graphql`;

/* Views tables */
SHOW TABLES;

/* Creation table Task */
CREATE TABLE IF NOT EXISTS Task (
    id INT not NULL auto_increment
    title VARCHAR(30)
    description VARCHAR(255)
    date DATETIME DEFAULT CURRENT_TIMESTAMP()
    primary key (id)
);

/* Insert Value */
INSERT INTO Task (title, description) VALUES ('Learning GraphQl', 'This is my new Task');

/* View structure */
DESCRIBE Task;

/* Delete data */
TRUNCATE TABLE Task;