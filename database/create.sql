create schema books;

create table books (
    id int serial primary key auto_increment,
    title text not null,
    author varchar(50) not null,
    num_pages int not null,
    preview text,
    quantity int not null,
    available boolean,
    date timestamp default now()
);