CREATE DATABASE sample;
USE sample;
CREATE TABLE users(
    id int PRIMARY KEY AUTO_INCREMENT, 
    first_name VARCHAR(100) NOT NULL, 
    last_name VARCHAR(100) NOT NULL
);
INSERT INTO users(
    first_name, 
    last_name
) 
VALUES 
(
    'Taro', 
    'Yamada'
), 
(
    'Jiro', 
    'Sato'
);
INSERT INTO users(
    first_name, 
    last_name
) 
VALUES 
(
    'Taro', 
    'Yamada'
), 
(
    'Jiro', 
    'Sato'
);
/*micropostテーブル作成*/
CREATE TABLE microposts(
    id int PRIMARY KEY AUTO_INCREMENT, 
    user_id int,
    FOREIGN KEY fk_userid(user_id)
    REFERENCES users (id),
    text VARCHAR(100) NOT NULL
);
INSERT INTO microposts(
    user_id, 
    text
) 
VALUES 
(
    1, 
    'Yamada'
), 
(
    2, 
    'Sato'
);
CREATE USER 'go'@'%' IDENTIFIED BY 'p@55vv0rcl';
/*GRANT all ON sample.* TO 'go'@'%';*/
GRANT ALL PRIVILEGES ON *.* TO 'go'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;