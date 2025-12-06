export class UserData {
    constructor({
        data,
        first,
        items,
        last,
        next,
        pages,
        prev
    }){
        this.data = data;
        this.first = first;
        this.items = items;
        this.last = last;
        this.next = next;
        this.pages = pages;
        this.prev = prev;
    }
}