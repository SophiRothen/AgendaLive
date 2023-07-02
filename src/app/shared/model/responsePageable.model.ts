//atributos mapeados dentro do model
//model da paginaçao

export class ResponsePageable{
    content: any;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: any;
    size: number;
    sort: number;
    totalElements: number;
    totalPages: number;
}