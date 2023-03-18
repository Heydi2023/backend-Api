import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getProducts() {
    return [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];
  }

  getCategories() {
    return [
      { id: 1, name: "Vestidos 1" },
      { id: 2, name: "Pantalones 2" },
      { id: 2, name: "Zapatos 3" },
      { id: 2, name: "Camisas 3" },
    ];
  }

  getMarcas() {
    return [
      { id: 1, name: "Shampions 1" },
      { id: 2, name: "Nike 2" },
      { id: 2, name: "Shein 3" },
      { id: 2, name: "  Jeans 4" },
    ];
  }
  getPais() {
    return [
      { id: 1, name: "Nicaragua" },
      { id: 2, name: "Costa Rica" },
      { id: 2, name: "Estados Unidos" },
    ];
  }
  getGender() {
    return [
      { id: 1, name: "Hombre" },
      { id: 2, name: "Mujer" },
    ];
  }

  createProduct() {
    return { id: 3, name: "Product 3" };
  }

  createCategory() {
    return { id: 3, name: "Category 3" };
  }

  createMarca() {
    return { id: 3, name: "Marca 3" };
  }
  createPais() {
    return { id: 3, name: "Pais 1" };
  }

  createGender() {
    return { id: 3, name: "Genero" };
  }
}
