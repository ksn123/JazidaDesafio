// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState('pikachu');
  const [trainer, setTrainer] = useState('');
  const [pokeA, setPokeA] = useState(null);
  const [pokeB, setPokeB] = useState(null);
  const [result, setResult] = useState(null);
  const [newTrainerMap, setNewTrainerMap] = useState({});

  const API = import.meta.env.VITE_BACKEND_URL;

  const loadPokemons = async () => {
    const { data } = await axios.get(`${API}/pokemons`);
    setPokemons(data);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  const createPokemon = async () => {
    await axios.post(`${API}/pokemons`, { tipo:type, treinador:trainer });
    setTrainer('');
    loadPokemons();
  };

  const deletePokemon = async (id) => {
    await axios.delete(`${API}/pokemons/${id}`);
    loadPokemons();
  };

  const updateTrainer = async (id) => {
    const newTrainer = newTrainerMap[id];
    if (!newTrainer || !newTrainer.trim()) return;
    await axios.put(`${API}/pokemons/${id}`, { treinador: newTrainer });
    setNewTrainerMap((prev) => ({ ...prev, [id]: '' }));
    loadPokemons();
  };

  const battle = async () => {
    if (!pokeA || !pokeB) return;
    const { data } = await axios.post(`${API}/batalhar/${pokeA}/${pokeB}`);
    setResult(data);
    setPokeA(null);
    setPokeB(null);
    loadPokemons();
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Pokemons</h1>

      <div className="flex gap-4">
        <select
          className="border rounded px-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="pikachu">Pikachu</option>
          <option value="charizard">Charizard</option>
          <option value="mewtwo">Mewtwo</option>
        </select>
        <input
          placeholder="Treinador"
          className="border rounded px-2"
          value={trainer}
          onChange={(e) => setTrainer(e.target.value)}
        />
        <Button onClick={createPokemon}>Criar</Button>
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {pokemons.map((p) => (
          <li
            key={p.id}
            className="border rounded-xl p-4 shadow relative"
            onClick={() => {
              if (!pokeA) setPokeA(p.id);
              else if (!pokeB && pokeA !== p.id) setPokeB(p.id);
            }}
          >
            <p className="font-semibold">{p.tipo.toUpperCase()}</p>
            <p>Treinador: {p.treinador}</p>
            <p>Nível: {p.nivel}</p>
            <p className="text-sm text-gray-500">
              ID: {p.id} {p.id === pokeA && '(A)'} {p.id === pokeB && '(B)'}
            </p>

            <div className="mt-2 space-x-2">
              <input
                placeholder="Novo treinador"
                className="border rounded px-2 text-sm"
                value={newTrainerMap[p.id] || ''}
                onChange={(e) =>
                  setNewTrainerMap((prev) => ({ ...prev, [p.id]: e.target.value }))
                }
              />
              <Button onClick={(e) => {
                e.stopPropagation();
                updateTrainer(p.id);
              }}>Atualizar</Button>
              <Button onClick={(e) => {
                e.stopPropagation();
                deletePokemon(p.id);
              }}>Deletar</Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <Button onClick={battle} disabled={!pokeA || !pokeB}>Batalhar</Button>
        <Button onClick={() => {
          setPokeA(null);
          setPokeB(null);
          setResult(null);
        }}>Limpar Seleção</Button>
      </div>

      {result && (
        <div className="p-4 border rounded-xl">
          <p className="font-semibold text-green-600">
            Vencedor: {result.winner.tipo} (nível {result.winner.nivel})
          </p>
          <p className="text-red-600">
            Perdedor: {result.loser.tipo} (nível {result.loser.nivel})
          </p>
        </div>
      )}
    </div>
  );
}
