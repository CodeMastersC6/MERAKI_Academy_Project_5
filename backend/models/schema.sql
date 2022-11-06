  CREATE TABLE permissions (
  id SERIAL NOT NULL,
  permission VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
  );


  CREATE TABLE roles (
  id SERIAL NOT NULL,
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
  );

  CREATE TABLE role_permission (
id SERIAL ,
  role_id INT,
  permission_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id),
  PRIMARY KEY (id)
  );

  CREATE TABLE users(
  id SERIAL NOT NULL,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  Location VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  mobile INT,
  role_id INT,
  is_deleted SMALLINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  PRIMARY KEY (id)
  );

  CREATE TABLE products(
  id SERIAL NOT NULL,
  category VARCHAR(255),
  name VARCHAR(255),
  price INT,
  image TEXT,
  description TEXT,
  is_deleted SMALLINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (id)
  );

  CREATE TABLE cart(
  id SERIAL NOT NULL,
user_id INT, 
product_id INT,
  notes VARCHAR(255),
  quantity INT,
  is_deleted SMALLINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (id), 
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)

);