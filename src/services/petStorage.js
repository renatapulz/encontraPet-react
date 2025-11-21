import { petsMock } from "../data/pets";

const STORAGE_KEY = "pets-db";

// Lê pets do localStorage ou usa mock na primeira execução
export function getPets() {
  const stored = localStorage.getItem(STORAGE_KEY);

  // Nunca inicializado: carrega mock
  if (stored === null) {
    savePets(petsMock);
    return petsMock;
  }

  return JSON.parse(stored);
}

// Salva array completo
export function savePets(pets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pets));
}

// Adiciona um pet novo
export function addPet(pet) {
  const pets = getPets();
  pets.push(pet);
  savePets(pets);
}

// Marcar como encontrado
export function marcarEncontrado(id) {
  const pets = getPets();
  const index = pets.findIndex(p => p.id === id);

  if (index === -1) return;

  pets[index].status = "encontrado";
  savePets(pets);
}