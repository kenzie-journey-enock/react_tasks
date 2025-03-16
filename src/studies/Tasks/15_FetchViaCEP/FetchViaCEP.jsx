import { useState, useEffect } from 'react';

export default function FetchViaCEP() {
  const [cep, setCep] = useState(localStorage.getItem('cep') || '');
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cep) {
      loadData(cep);
    }
  }, []);

  async function loadData(cep) {
    setLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data);
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.length === 8 || cep.length === 9) {
      localStorage.setItem('cep', cep);
      loadData(cep);
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Buscar Endereço pelo CEP</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          placeholder="Digite o CEP"
          maxLength={8}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Buscar</button>
      </form>

      {loading && <p style={{ textAlign: 'center', color: '#555' }}>Carregando...</p>}

      {address && !address.erro && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ color: '#333' }}>Endereço Encontrado:</h3>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
        </div>
      )}

      {address?.erro && <p style={{ textAlign: 'center', color: 'red' }}>CEP não encontrado.</p>}
    </div>
  );
}
