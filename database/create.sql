create schema books;

create table books (
    id int serial primary key,
    title text not null,
    num_pages int not null,
    preview text,
    date timestamp default now()
);