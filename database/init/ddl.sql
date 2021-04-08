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
(1, 'Yamada'), 
(2, 'Sato'),
(2, 'Yamada'),
(3, 'Yamada'),
(4, 'Yamada'),
(5, 'Yamada'),
(5, 'Yamada'), 
(6, 'Sato'),
(7, 'Yamada'),
(8, 'Yamada'),
(1, '私は以前ちっともこの養成人という事の時が生れなます。'),
(1, '坊ちゃんへなっありものもおもに当時をもうたならます。')
;
CREATE USER 'go'@'%' IDENTIFIED BY 'p@55vv0rcl';
/*GRANT all ON sample.* TO 'go'@'%';*/
GRANT ALL PRIVILEGES ON *.* TO 'go'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;