CREATE DATABASE sample;
USE sample;
CREATE TABLE users(
    id int PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL
);
INSERT INTO users(
    name
) 
VALUES 
    ('Taro'), 
    ('日下部陽治'),
    ('古沢一寿'),
    ('前川和弘'),
    ('齋藤洋一'),
    ('名取章平'),
    ('平本琴乃'),
    ('柴山弘明'),
    ('足立陽奈'),
    ('大野信生'),
    ('Jiro');

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