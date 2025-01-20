class Celular {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class Smartphone extends Celular {
    constructor(marca, modelo, sistemaOperacional) {
        super(marca, modelo);
        this.sistemaOperacional = sistemaOperacional;
    }

    detalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Sistema Operacional: ${this.sistemaOperacional}`;
    }
}

class FeaturePhone extends Celular {
    constructor(marca, modelo, tecladoFisico) {
        super(marca, modelo);
        this.tecladoFisico = tecladoFisico;
    }

    detalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Teclado Físico: ${this.tecladoFisico ? 'Sim' : 'Não'}`;
    }
}

const smartphone1 = new Smartphone("Apple", "iPhone 16", "iOS");
const smartphone2 = new Smartphone("Samsung", "Galaxy S24", "Android");
const featurephone = new FeaturePhone("Motorola", "Brea", true);

console.log(smartphone1.detalhes());
console.log(smartphone2.detalhes());
console.log(featurephone.detalhes());